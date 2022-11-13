import "dotenv-safe/config";
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

export const sendMessages = (numbers: string[]) => {
  numbers.forEach((num) => {
    client.messages.create({
      body: "\nThis is the ship that made the Kessel Run in fourteen parsecs?",
      from: process.env.TWILIO_NUMBER,
      to: num,
    });
  });
  console.log("done");
};
