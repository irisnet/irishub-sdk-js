const EventEmitter = require("events");
const Pumpify = require("pumpify").obj;
const Ndjson = require("ndjson");
const Websocket = require("websocket-stream");

export class WsProvider extends EventEmitter {
    /**
     *
     * @param {string} - lcd's url
     * @param {object} - other configurable parameters
     * @return {HttpProvider}
     */
    constructor(url, option) {
        super();
        this.url = `${url}/websocket`;
        this.connect();
    }

    /**
     *
     */
    connect() {
        this.ws = Pumpify(
            Ndjson.stringify(),
            Websocket(this.url)
        );
        this.ws.on("error", (err) => {
            this.emit("error", err)
        });
        this.ws.on("close", () => {
            if (this.closed) return;
            this.emit("error", Error("websocket disconnected"))
        });
        this.ws.on("data", (data) => {
            data = JSON.parse(data);
            if (!data.id) return;
            this.emit(data.id, data.error, data.result)
        })
    }

    /**
     *
     * @param method
     * @param args
     * @param listener
     * @returns {Promise<any>}
     */
    call(method, args, listener) {
        let self = this;
        return new Promise((resolve, reject) => {
            let id = Math.random().toString(36);
            let params = convertWsArgs(args);
            if (method === "subscribe") {
                if (typeof listener !== "function") {
                    throw Error("Must provide listener function")
                }
                // events get passed to listener
                this.on(id + "#event", (err, res) => {
                    if (err) return self.emit("error", err);
                    listener(res.data.value);
                });

                // promise resolves on successful subscription or error
                this.on(id, (err) => {
                    if (err) return reject(err);
                    resolve()
                })
            } else {
                // response goes to promise
                this.once(id, (err, res) => {
                    if (err) return reject(err);
                    resolve(res)
                })
            }
            let payload = {jsonrpc: "2.0", id, method, params};
            this.ws.write(payload)
        })
    };

    /**
     *
     */
    close() {
        this.closed = true;
        this.ws.destroy()
    }
}

function convertWsArgs(args) {
    args = args || {};
    for (let k in args) {
        let v = args[k];
        if (typeof v === "number") {
            args[k] = String(v)
        } else if (Buffer.isBuffer(v)) {
            args[k] = "0x" + v.toString("hex")
        } else if (v instanceof Uint8Array) {
            args[k] = "0x" + Buffer.from(v).toString("hex")
        }
    }
    return args
}
