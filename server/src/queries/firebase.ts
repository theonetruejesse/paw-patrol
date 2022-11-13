// import { db } from "../firebaseConfig";
import geofire from "geofire-common";

export const getCloseAccounts = async (location: number[]) => {
  const center: [number, number] = [location[0], location[1]];
  const radiusInM = 1000; // 1 km
  const bounds = geofire.geohashQueryBounds(center, radiusInM);
  return bounds;

  // const promises = [];
  // for (const b of bounds) {
  //   const q = db
  //     .collection("people")
  //     .orderBy("address")
  //     .startAt(b[0])
  //     .endAt(b[1]);

  //   promises.push(q.get());
  // }

  // // Collect all the query results together into a single list
  // return Promise.all(promises).then((snapshots) => {
  //   const matchingDocs = [];

  //   for (const snap of snapshots) {
  //     for (const doc of snap.docs) {
  //       const lat = doc.get("lat");
  //       const lng = doc.get("lng");

  //       // We have to filter out a few false positives due to GeoHash
  //       // accuracy, but most will match
  //       const distanceInKm = geofire.distanceBetween([lat, lng], center);
  //       const distanceInM = distanceInKm * 1000;
  //       if (distanceInM <= radiusInM) {
  //         matchingDocs.push(doc);
  //       }
  //     }
  //   }

  //   return matchingDocs;
  // });
};
