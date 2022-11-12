import cors from "cors";
import express from "express";
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

  app.get("/data", async (_, res) => {
    res.send("testies");
  });

  app.listen(process.env.PORT, () => {
    console.log("\nlistening to port:", process.env.PORT);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
