import "dotenv-safe/config";

const {
  initializeApp,
  // applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  // Timestamp,
  // FieldValue,
} = require("firebase-admin/firestore");

const serviceAccount = require(`${process.env.FILE_PATH}/data/serviceAccountKey.json`);

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
