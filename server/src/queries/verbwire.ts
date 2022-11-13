const sdk = require("api")("@verbwire/v1.0#1xnglab5r6l9");
import "dotenv-safe/config";
const path = `${process.env.FILE_PATH}/data/starting.json`;

sdk.auth(process.env.VW_Key);

const createStartData = (location: number[], time: string) => {
  const fs = require("fs");
  const data = JSON.stringify({
    location,
    time,
  });

  fs.writeFile(path, data, function (err: Error) {
    if (err) throw err;
    console.log("Saved!");
  });
};

const uploadToIPFS = async () => {
  return await sdk.postNftStoreMetadatafromimage(
    {
      name: "Incident Token File",
      description: "genesis",
      filePath: path,
    },
    { accept: "application/json" }
  );
};

export const createToken = async (
  location: number[],
  time: string,
  address: string
) => {
  createStartData(location, time);
  const upload_obj = await uploadToIPFS();
  return await sdk.postNftMintQuickmintfrommetadataurl(
    {
      allowPlatformToOperateToken: "true",
      chain: "goerli",
      metadataUrl: upload_obj.data.ipfs_storage.metadata_url,
      recipientAddress: address,
    },
    { accept: "application/json" }
  );
};
