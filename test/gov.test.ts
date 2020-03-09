import { BaseTest } from './basetest';
import * as types from '../src/types';

describe('Gov Tests', () => {
  describe('Query', () => {
    test('query proposal', async () => {
      await BaseTest.getClient().gov
        .queryProposal(164)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query proposals', async () => {
      await BaseTest.getClient().gov
        .queryProposals({
          limit: 1,
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
        .queryVote(1, 'faa1rug6dlx3rugu50ha0a35at6fwv2sss9l9amknx')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query votes', async () => {
      await BaseTest.getClient().gov
        .queryVotes(2)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query deposit', async () => {
      await BaseTest.getClient().gov
        .queryDeposit(260, 'faa1rug6dlx3rugu50ha0a35at6fwv2sss9l9amknx')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query deposits', async () => {
      await BaseTest.getClient().gov
        .queryDeposits(260)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query tally', async () => {
      await BaseTest.getClient().gov
        .queryTally(260)
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
      denom: 'iris-atto',
      amount: '1000000000000000000000',
    },
  ];
  describe('Submit ParameterChange Proposal', () => {
    test(
      'submitParameterChangeProposal',
      async () => {
        const params: types.ChangeParameter[] = [
          {
            subspace: 'slashing',
            key: 'MaxEvidenceAge',
            value: '51840',
          },
        ];
        await BaseTest.getClient()
          .gov.submitParameterChangeProposal(
            'Title',
            'Desc',
            initDeposit,
            params,
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

  describe('Submit PlainText Proposal', () => {
    test(
      'submitPlainTextProposal',
      async () => {
        await BaseTest.getClient().gov
          .submitPlainTextProposal('Title', 'Desc', initDeposit, BaseTest.baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  });

  describe('Submit CommunityTaxUsag Proposal', () => {
    test(
      'submitCommunityTaxUsageProposal',
      async () => {
        await BaseTest.getClient()
          .gov.submitCommunityTaxUsageProposal(
            'Title',
            'Desc',
            initDeposit,
            types.CommunityTaxUsageType.Distribute,
            'faa1rug6dlx3rugu50ha0a35at6fwv2sss9l9amknx',
            0.5,
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

  describe('Deposit', () => {
    test(
      'deposit',
      async () => {
        await BaseTest.getClient()
          .gov.deposit(
            1,
            [
              {
                denom: 'iris-atto',
                amount: '1000000000000000000000',
              },
            ],
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
          .vote(1, types.VoteOption.Yes, BaseTest.baseTx)
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
