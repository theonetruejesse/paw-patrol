import express from "express";
import cors from "cors";
import { createToken } from "./queries/verbwire";
import { notifyAllUsers } from "./utils/notifyAllUsers";
import "dotenv-safe/config";
import { sendMessage } from "./queries/twilio";
import { hasCam, messages, seeIncident } from "./utils/messages";

async function main() {
  const app = express();
  app.set("proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.get("/test", async (req, res) => {
    res.send("check yall's phone");
    await notifyAllUsers();
    // res.send("check yall's phone");
  });

  app.get("/mint", async (req, res) => {
    const lon = req.query.lon;
    const lat = req.query.lat;
    const time = req.query.time;
    const username = "bruh?";

    if (!time || !lon || !lat) res.send("bad query params given");

    const location: number[] = [
      parseFloat(lon as string),
      parseFloat(lat as string),
    ];

    notifyAllUsers();

    res.send(await createToken(location, time as string, username));
  });

  // app.get("/getInstances", async (req, res) => {
  //   // if (req.query.location) // long lat
  //   res.send("bad query params given");
  // }); // todo

  app.get("/getHomeLink", async (req, res) => {
    const phone = req.query.phone as string;
    // sendMessage(phone, seeIncident);
    console.log(req.query)
    console.log("here")
    sendMessage(phone, hasCam(req.query.id as string));

    res.send("check-ka-check");
  });

  app.listen(process.env.PORT, () => {
    console.log("\nlistening to port:", process.env.PORT);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
