import { getAllUsers } from "../queries/firebase";
import { sendMessage } from "../queries/twilio";
import { messages, seeIncident } from "./messages";

export const notifyAllUsers = async () => {
  const users = await getAllUsers();
  const info = users.map((u: any) => [u.data.phone, u.data.camera]);
  info.map((i: [string, boolean]) => {
    // sendMessage(i[0], info[1] ? messages.hasCam : messages.noCam);
    sendMessage(info[0], seeIncident);
  });
};
