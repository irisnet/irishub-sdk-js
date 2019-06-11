const Utils = require("../utils/index");
const axios = require("axios");

class HttpProvider{
    /**
     *
     * @param url
     */
    constructor(url){
        this._url = url;
        this._httpClient = axios.create({ baseURL:url })
    }

    /**
     *
     * @param url
     * @param opts
     * @returns {*}
     */
    get(url,opts){
        return this._execute("get", url,null,opts)
    }

    /**
     *
     * @param url
     * @param data
     * @param opts
     */
    post(url, data, opts) {
        throw new Error("not implement")
    }

    /**
     *
     * @param method
     * @param args
     * @returns {Promise<SpeechRecognitionEvent | SVGAnimatedString | string | ArrayBuffer | never>}
     */
    call(method, args){
        let url = `${this._url}/${method}`;
        url = convertHttpArgs(url, args);
        return axios({
            url: url
        }).then(function ({ data }) {
            if (data.error) {
                let err = Error(data.error.message);
                Object.assign(err, data.error);
                throw err
            }
            return data.result
        }, function (err) {
            throw Error(err)
        })
    }

    close(){}

    /**
     *
     * @param method
     * @param path
     * @param params
     * @param opts
     * @returns {Promise<AxiosResponse<T> | never>}
     * @private
     */
    _execute(method, path, params, opts) {
        const options = {
            method,
            url: path,
            ...opts
        }

        if (params) {
            if (method === "get") {
                options.params = params
            } else {
                options.data = params
            }
        }

        return this._httpClient
            .request(options)
            .then(response => {
                return response.data
            }).catch(err => {
                let error = err;
                try {
                    const msgObj = err.response && err.response.data;
                    error = new Error(msgObj.message);
                    error.code = msgObj.code
                } catch (err) {
                    throw error
                }
                throw error
            })
    }
}

function convertHttpArgs (url, args) {
    args = args || {};
    const search = [];
    for (let k in args) {
        if(Utils.isString(args[k])) {
            search.push(`${k}="${args[k]}"`)
        } else if(Utils.isBuffer(args[k])){
            search.push(`${k}=0x${args[k].toString("hex")}`)
        } else {
            search.push(`${k}=${args[k]}`)
        }
    }
    return `${url}?${search.join("&")}`
}
module.exports = HttpProvider;