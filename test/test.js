const {IrisClient,Event} = require("../src");

describe('test modules', function () {
    let client = new IrisClient("http://irisnet-lcd.dev.rainbow.one");

    describe('should bank module', async function() {
        it('should getAccount', async function () {
            let res = await client.getAccount("faa10xj3gsy6zfje94x7gu8mxxas08a9ugcn4n3v5m");
            console.log(JSON.stringify(res))
        });
    });

    describe('should stake module', async function() {
        it('should getValidators', async function () {
            let res = await client.getValidators();
            console.log(JSON.stringify(res))
        });
    });

    describe('should rpc', async function() {
        client.setUri("http://irisnet-lcd.dev.rainbow.one");

        it('should status', async function () {
            let res = await client.status();
            console.log(JSON.stringify(res))
        });
    });

    describe('should ws', function () {
        this.timeout(10000);
        client.setUri("ws://irisnet-rpc.dev.rainbow.one");

        it("should subscribe", async function(){
            await new Promise(() => {
                client.subscribe(Event.NewBlock, (events) => {
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
});