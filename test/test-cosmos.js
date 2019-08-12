import {IrisClient} from "../src"
const lcdUrl = "http://192.168.150.31:31317";
//const lcdUrl = "http://192.168.150.31:31317";
const rpcUrl = "http://192.168.150.31:26657";

const chai = require('chai');
const assert = chai.assert;

describe('test modules', function () {
    let client = new IrisClient(lcdUrl,{
        network:"testnet",
        chain_id: "cosmos-dev",
        chain: "cosmos",
        timeout:10000,
        fee:{denom: "stake", amount: "2"},
        gas:200000,
        mode:"sync", //async | commit | sync
    });

    describe('should crypto module', async function() {
        it('should createAccount', function () {
            let crypto = client.getCrypto();
            let account = crypto.create('english');
            console.log(JSON.stringify(account));
            assert.isNotNull(account);
        });
    });

    describe('should IrisClient',function () {
        it('should custom Provider', async function () {
            let provider = {
                get : (url,opts) =>{
                    return "hello"
                }
            };
            let client2 = new IrisClient(provider);
            let res = await client2.getValidators(1,2);
            console.log(res);

            let account = client2.getCrypto().create('english');
            console.log(JSON.stringify(account));

        });
    });

    describe('should bank module', async function() {
        it('should getAccount', async function () {
            let res = await client.getAccount("cosmos1q89fhadkshugejj9vuhpfurldwepmtxepchuex");
            assert.isNotNull(res);
        });

        it('should transfer', async function () {
            let from = "cosmos192xdyxer5hvtrrredragyup2gejv73ztzpa7j3";
            let to = "cosmos1q89fhadkshugejj9vuhpfurldwepmtxepchuex";
            let amount  = [{denom: "stake", amount: 10}];
            let memo = "1";
            let private_key = "4F13455BE209B262E8F28D610B8396F8BB0C8318154C1719EF055BDA44EA9EFF";
            let result = await client.transfer(from,to,amount,{memo,private_key});
            assert.equal(result.hash,result.resp.txhash);
        });
    });

    describe('should stake module', async function() {
        it('should getValidators', async function () {
            let res = await client.getValidators(1,2);
            assert.isArray(res)
        });
    });

    describe('should Distr module', async function() {
        it('should getWithdrawAddr', async function () {
            let res = await client.getWithdrawAddr("cosmos12qf750gjjlxpslxefnnql3egu350c6qn3h09z0");
            assert.isNotNull(res);
        });

        it('should queryRewards', async function () {
            let res = await client.queryRewards("cosmos12qf750gjjlxpslxefnnql3egu350c6qn3h09z0");
            assert.isNotNull(res);
        });
    });

    describe('should tm module', async function() {
        it('should getNodeInfo', async function () {
            let res = await client.getNodeInfo();
            assert.isNotNull(res);
        });

        it('should getSyncing', async function () {
            let res = await client.getSyncing();
            assert.isNotNull(res);
        });

        it('should getBlock', async function () {
            let res = await client.getBlock();
            assert.isNotNull(res);
        });

        it('should getValidatorSet', async function () {
            let res = await client.getValidatorSet();
            assert.isNotNull(res);
        });

        it('should getTx', async function () {
            let res = await client.getTx("751907A05986FC46C99530ECC3C97406966243E37521C1C0041AD24E608A1F31");
            assert.isNotNull(res);
        });
    });

    describe('should version module', async function() {
        it('should getLcdVersion', async function () {
            let res = await client.getLcdVersion();
            assert.isNotNull(res);
        });

        it('should getNodeVersion', async function () {
            let res = await client.getNodeVersion();
            assert.isNotNull(res);
        });
    });

    describe('should slashing module', async function() {
        it('should getSigningInfo', async function () {
            let res = await client.getSigningInfo("fcp1zcjduepqevwqk73gun8pp59wz6raddnsg2fczvs237cefl9ve7f94feh6lzsdr4qrf");
            assert.isNotNull(res);
        });
    });

    describe('should gov module', async function() {
        it('should getProposals', async function () {
            let res = await client.getProposals(null,null,"Rejected");
            assert.isNotNull(res);
        });
        it('should getProposal', async function () {
            let res = await client.getProposal(3);
            assert.isNotNull(res);
        });
        it('should getDeposits', async function () {
            let res = await client.getDeposits(3);
            assert.isNotNull(res);
        });
        it('should getDeposit', async function () {
            let res = await client.getDeposit(3,'faa10xj3gsy6zfje94x7gu8mxxas08a9ugcn4n3v5m');
            assert.isNotNull(res);
        });
        it('should getVotes', async function () {
            let res = await client.getVotes(3);
            assert.isNotNull(res);
        });
        it('should getVote', async function () {
            let res = await client.getVote(3,'');
            assert.isNotNull(res);
        });
        it('should getParams', async function () {
            let res = await client.getParams("stake");
            assert.isNotNull(res);
        });
    });

    describe('should rpc', async function() {
        it('should status', async function () {
            let client2 = client.clone(rpcUrl);
            let res = await client2.status();
            assert.isNotNull(res);

            let res1 = await client2.getTx("1FC77F5A871D6F16DF194D150AFE203F645D57E4A8D81B61D8737E5CF0D68F9B");
            assert.isNotNull(res1);
        });

        it('should block', async function () {
            client.clone(rpcUrl);
            let res = await client.block({height:100});
            assert.isNotNull(res);
        });
    });

    // describe('should ws', function () {
    //     this.timeout(10000);
    //     it("should subscribe", async function(){
    //         let wsClient = client.clone(`ws://${rpcUrl}`);
    //         await new Promise(() => {
    //             wsClient.subscribe(client.event.NewBlock, (events) => {
    //                 console.log(JSON.stringify(events));
    //             })
    //         })
    //     });
    // });
});