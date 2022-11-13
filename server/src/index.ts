import express from "express";
import cors from "cors";
import { createToken } from "./queries/verbwire";
import { getCloseAccounts } from "./queries/firebase";
import { sendMessages } from "./queries/twilio";
import "dotenv-safe/config";

async function main() {
  const app = express();
  app.set("proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  sendMessages(["9254873772"]);

  app.get("/test", async (req, res) => {
    const lon = req.query.lon;
    const lat = req.query.lat;

    if (!lon || !lat) res.send("bad query params given");

    const location: number[] = [
      parseFloat(lon as string),
      parseFloat(lat as string),
    ];

    res.send(await getCloseAccounts(location));
  });

  app.get("/mint", async (req, res) => {
    const lon = req.query.lon;
    const lat = req.query.lat;
    const time = req.query.time;
    const username = "would-be-email";

    if (!time || !lon || !lat) res.send("bad query params given");

    const location: number[] = [
      parseFloat(lon as string),
      parseFloat(lat as string),
    ];

    res.send(await createToken(location, time as string, username));
  });

  app.get("/getInstances", async (req, res) => {
    // if (req.query.location) // long lat
    res.send("bad query params given");
  }); // todo

  // app.get("/getClose", async (req, res) => {

  // });

  app.listen(process.env.PORT, () => {
    console.log("\nlistening to port:", process.env.PORT);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
