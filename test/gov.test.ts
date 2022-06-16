import { BaseTest } from './basetest';
import * as types from '../src/types';

describe('Gov Tests', () => {
  describe('Query', () => {
    test('query proposal', async () => {
      await BaseTest.getClient().gov
        .queryProposal(29)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query proposals', async () => {
      await BaseTest.getClient().gov
        .queryProposals({},{
          page_number: 1,
          page_size: 100
        })
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query vote', async () => {
      await BaseTest.getClient().gov
        .queryVote(13, 'iaa176dd0tgn38grpc8hpxfmwl6sl8jfmkneg8mkxr')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query votes', async () => {
      await BaseTest.getClient().gov
        .queryVotes(13)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query Params', async () => {
      await BaseTest.getClient().gov
        .queryParams('deposit')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query deposit', async () => {
      await BaseTest.getClient().gov
        .queryDeposit(15, 'iaa14wmlevjxxnshdhc8vrpj0eq5q4wuujeevktx90')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query deposits', async () => {
      await BaseTest.getClient().gov
        .queryDeposits(15)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query tally', async () => {
      await BaseTest.getClient().gov
        .queryTallyResult(29)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });

  const initDeposit: types.Coin[] = [
    {
      denom: 'udev',
      amount: '100',
    },
  ];

  describe('Submit PlainText Proposal', () => {
    test(
      'submitPlainTextProposal',
      async () => {
        await BaseTest.getClient().gov
          .submitProposal(
            {
              type:types.ProposalType.Text_Proposal,
              value:{ 
                title:'1111',
                description:'1111'
              }
            },
            initDeposit, 
            BaseTest.baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  });

  describe('Submit Parameter Change Proposal', () => {
    test(
      'submitParameterChangeProposal',
      async () => {
        await BaseTest.getClient().gov
          .submitProposal(
            {
              type:types.ProposalType.Parameter_Change_Proposal,
              value:{ 
                title:'3333',
                description:'3333',
                changes:[
                  {
                    subspace: 'staking',
                    key: 'MaxValidators',
                    value: '4',
                  }
                ]
              }
            },
            initDeposit, 
            BaseTest.baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  });

  describe('Submit Community Pool Spend Proposal', () => {
    test(
      'Submit CommunityPoolSpendProposal',
      async () => {
        await BaseTest.getClient().gov
          .submitProposal(
            {
              type:types.ProposalType.Community_Pool_Spend_Proposal,
              value:{ 
                title:'1111',
                description:'1111',
                recipient: 'iaa176dd0tgn38grpc8hpxfmwl6sl8jfmkneg8mkxr',
                amount: [{denom: 'udev',amount: '100'}]
              }
            },
            initDeposit, 
            BaseTest.baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  });

  describe('Submit Software Upgrade Proposal', () => {
    test(
      'submitSoftwareUpgradeProposal',
      async () => {
        await BaseTest.getClient().gov
          .submitProposal(
            {
              type:types.ProposalType.Software_Upgrade_Proposal,
              value:{ 
                title:'6666',
                description:'6666',
                plan:{
                  name:'6666',
                  time:{
                    seconds: new Date().getTime()/1000 + 3000, 
                    nanos:0
                  },
                  info:'123123',
                }
              }
            },
            initDeposit, 
            BaseTest.baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  });

  describe('Submit Cancel Software Upgrade Proposal', () => {
    test(
      'submitCancelSoftwareUpgradeProposal',
      async () => {
        await BaseTest.getClient().gov
          .submitProposal(
            {
              type:types.ProposalType.Cancel_Software_Upgrade_Proposal,
              value:{ 
                title:'5555',
                description:'5555'
              }
            },
            initDeposit, 
            BaseTest.baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  });

  describe('Deposit', () => {
    test(
      'deposit',
      async () => {
        await BaseTest.getClient()
          .gov.deposit(
            29,
            initDeposit,
            BaseTest.baseTx
          )
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  });

  describe('Vote', () => {
    test(
      'vote',
      async () => {
        await BaseTest.getClient().gov
          .vote(29, types.VoteOption.VOTE_OPTION_YES, BaseTest.baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  });
});
