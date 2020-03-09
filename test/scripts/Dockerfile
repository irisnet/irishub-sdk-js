FROM irisnet/irishub:testnet-v0.16.0

COPY . /scripts

RUN sh /scripts/setup.sh

EXPOSE 26657

CMD iris start