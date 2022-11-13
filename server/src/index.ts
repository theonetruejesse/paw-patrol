import express from "express";
import cors from "cors";
import { getToken } from "./queries/verbwire";
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

  app.get("/test", async (_, res) => {
    res.send("testies");
  });

  app.get("/mint", async (req, res) => {
    if (!req.query.time || !req.query.location)
      // long lat
      res.send("bad query params given");

    res.send(await getToken());
  });

  app.get("/getInstances", async (req, res) => {
    // if (req.query.location) // long lat
    res.send("bad query params given");
  });

  app.listen(process.env.PORT, () => {
    console.log("\nlistening to port:", process.env.PORT);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
