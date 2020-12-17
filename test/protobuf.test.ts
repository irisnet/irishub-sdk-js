import { BaseTest } from './basetest';


describe('protobuf Tests', () => {
  test(
    'deserialize Tx',
    async () => {
      let tx_proto = 'CpwBCpkBCiEvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dNdWx0aVNlbmQSdAo4CippYWExNHg4YTd5ODhweTl4a3ZreHpsZDNqeGhncGpwbTAzd2hydXp3enASCgoFc3Rha2USATESOAoqaWFhMWd5dGd1Zndxa3o5dG1oamdsamZ4ZDNxY3dwZHp5bWo2MDIycTN3EgoKBXN0YWtlEgExEmQKUApGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQIjolBAYHY8vGL2QlFqFYoLKbai75xRK5/hf4/ZcrqbQRIECgIIARgFEhAKCgoFc3Rha2USATIQwJoMGkAI44tlZd+mIMCup6NsiXAhlcp+WSJ9rquD3/0hOIKP1BTi1cS8UHf0EUDc/v2a5fIn/dlfYUzeLGDv7mcV8U2T';
      let tx = BaseTest.getClient().protobuf.deserializeTx(tx_proto);
      console.log('tx:',tx);
    }
  );

  test(
    'unpack Msg',
    async () => {
      let msg_proto = {
        typeUrl: '/cosmos.bank.v1beta1.MsgMultiSend',
        value: 'CjgKKmlhYTE0eDhhN3k4OHB5OXhrdmt4emxkM2p4aGdwanBtMDN3aHJ1end6cBIKCgVzdGFrZRIBMRI4CippYWExZ3l0Z3Vmd3Frejl0bWhqZ2xqZnhkM3Fjd3BkenltajYwMjJxM3cSCgoFc3Rha2USATE='
      };
      let msg = BaseTest.getClient().protobuf.unpackMsg(msg_proto);
      console.log('msg:',msg);
    }
  );

  test(
    'deserialize Sign Doc',
    async () => {
      let signDoc_proto = ' CocBCoQBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmQKKmlhYTE0eDhhN3k4OHB5OXhrdmt4emxkM2p4aGdwanBtMDN3aHJ1end6cBIqaWFhMWd5dGd1Zndxa3o5dG1oamdsamZ4ZDNxY3dwZHp5bWo2MDIycTN3GgoKBXN0YWtlEgExEmQKUApGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQIjolBAYHY8vGL2QlFqFYoLKbai75xRK5/hf4/ZcrqbQRIECgIIARgMEhAKCgoFc3Rha2USATIQwJoMGgR0ZXN0IAg=';
      let signDoc = BaseTest.getClient().protobuf.deserializeSignDoc(signDoc_proto);
      console.log('signDoc:',signDoc);
    }
  );

  test(
    'deserialize Tx Raw',
    async () => {
      let txRaw_proto = 'CocBCoQBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmQKKmlhYTE0eDhhN3k4OHB5OXhrdmt4emxkM2p4aGdwanBtMDN3aHJ1end6cBIqaWFhMWd5dGd1Zndxa3o5dG1oamdsamZ4ZDNxY3dwZHp5bWo2MDIycTN3GgoKBXN0YWtlEgExEmQKUApGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQIjolBAYHY8vGL2QlFqFYoLKbai75xRK5/hf4/ZcrqbQRIECgIIARgMEhAKCgoFc3Rha2USATIQwJoMGkC3fIfYTv48lJUY7198d4xcM11vHHVfBeZTokqJ728hYRp7IJMXKrYJGHsgKcd5mudWgDrHTJy3sordNELcwaoK';
      let txRaw = BaseTest.getClient().protobuf.deserializeTxRaw(txRaw_proto);
      console.log('txRaw:',txRaw);
    }
  );

  test(
    'deserialize Signing Info',
    async () => {
      let signingInfo_proto = 'CippY2Exd3JkNWMybjd4Y205N3l5enJrc3pjcWdhMjNzY3RseGc5NHk2dWoYxJ4FIgA';
      let signingInfo = BaseTest.getClient().protobuf.deserializeSigningInfo(signingInfo_proto);
      console.log('signingInfo:',signingInfo);
    }
  );  

  test(
    'deserialize Signing Info',
    async () => {
      let pubKey_proto = {
              "typeUrl":"/cosmos.crypto.ed25519.PubKey",
              "value":"CiAXbTnFxwWEocyc0QcXC0cvMNWM9oYYG5Kc7TBHw6YS+g=="
          };
      let pubKey = BaseTest.getClient().protobuf.deserializePubkey(pubKey_proto);
      console.log('pubKey:',pubKey);
    }
  ); 

});
