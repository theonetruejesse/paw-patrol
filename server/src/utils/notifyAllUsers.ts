import { getAllUsers } from "../queries/firebase";
import { sendMessage } from "../queries/twilio";
import { messages, seeIncident } from "./messages";

export const notifyAllUsers = async () => {
  console.log("quye")
  const users = await getAllUsers();
  console.log("yooo")
  const info = users.map((u: any) => [u.data.phone, u.data.camera]);
  console.log("yoooo")
  info.map((i: [string, boolean]) => {
    // sendMessage(i[0], info[1] ? messages.hasCam : messages.noCam);
    console.log(i)
    // sendMessage(i[0], seeIncident);
  });
};
