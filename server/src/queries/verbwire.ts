const sdk = require("api")("@verbwire/v1.0#1xnglab5r6l9");

sdk.auth(process.env.TZ);

export const getToken = async () => {
  return await sdk.getNftDataAttributesforslug({
    slug: "boredapeyachtclub",
    chain: "ethereum",
    limit: "25",
    page: "1",
    sortField: "key",
    sortDirection: "DESC",
  });
};

export const createToken = () => {
  sdk
    .postNftMintQuickmintfrommetadataurl({ accept: "application/json" })
    .then(({ data }: any) => console.log(data))
    .catch((err: any) => console.error(err));
};
