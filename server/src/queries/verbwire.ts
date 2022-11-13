const sdk = require("api")("@verbwire/v1.0#1xnglab5r6l9");

sdk.auth("sk_live_055c27cb-fc0e-4876-9455-981c5f9828b8");

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
