import "dotenv-safe/config";
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

// export const sendMessages = (numbers: string[], message: string) => {
//   numbers.forEach((num) => {
//     console.log(num);
//       client.messages.create({
//         body: `\n${message}`,
//         from: process.env.TWILIO_NUMBER,
//         to: num,
//       });
//     }
//   });
//   console.log("sent");
// };

export const sendMessage = (num: string, message: string) => {
  client.messages
    .create({
      body: `\n${message}`,
      from: process.env.TWILIO_NUMBER,
      to: num,
    })
    .catch((e: Error) => console.log(e));
};
