const {IrisClient,Event} = require("../src");

describe('test modules', function () {

    describe('should bank module', async function() {
        let client = new IrisClient("http://irisnet-lcd.dev.rainbow.one");
        it('should getAccount', async function () {
            let res = await client.getAccount("faa10xj3gsy6zfje94x7gu8mxxas08a9ugcn4n3v5m");
            console.log(JSON.stringify(res))
        });
    });

    describe('should stake module', async function() {
        let client = new IrisClient("http://irisnet-lcd.dev.rainbow.one");
        it('should getValidators', async function () {
            let res = await client.getValidators();
            console.log(JSON.stringify(res))
        });


    });

    describe('should rpc', async function() {
        let client = new IrisClient("http://irisnet-rpc.dev.rainbow.one");
        it('should status', async function () {
            let res = await client.status();
            console.log(JSON.stringify(res))
        });

        it('should abciQuery', async function () {
            let data = Buffer.from("faa10xj3gsy6zfje94x7gu8mxxas08a9ugcn4n3v5m");
            let path = "custom/acc/account";
            let res = await client.abciQuery({path,data});
            console.log(JSON.stringify(res))
        });
    });

    describe('should ws', function () {
        this.timeout(10000);

        let client = new IrisClient("ws://irisnet-rpc.dev.rainbow.one");
        it("should subscribe", async function(){
            await new Promise(() => {
                client.subscribe(Event.queryTxForEvent("hahha"), (events) => {
                    console.log(JSON.stringify(events));
                    // setTimeout(function () {
                    //     client.unsubscribe(Event.NewBlock).then(res =>{
                    //         console.log(JSON.stringify(res))
                    //     }).catch(err =>{
                    //         console.log(JSON.stringify(err))
                    //     })
                    // },1000)
                    //client.close()
                })
            })
        });
    });


    it('should utils', function () {
        // const utils = require("../src/utils");
        // console.log(utils.parseUrl("/a/"));
        // console.log(utils.parseUrl("/a/%s",123));
        // console.log(utils.parseUrl("/a/%s/%s",123,1234));
        // console.log(utils.isBuffer(111))

        let client = new IrisClient("ws://irisnet-rpc.dev.rainbow.one");
        let o = Object.getOwnPropertyNames(Object.getPrototypeOf(client))
        console.log(o)
    });
});