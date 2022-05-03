// import tools from firebase
import { initializeApp, getApp, cert, getApps } from "firebase-admin/app";
// import firestore from firebase
import { getFirestore } from "/firebase-admin/app";

// import my credentials to connect to firebase( already done)
import myCredentials from "../credentials.js";

// write a function to connect to firebase
export default function connectDb() {
  // check to see if we are already connected...
  if (getApps().length === 0) {
    // if not connect
    initializeApp({
      credential: cert(myCredentials),
    });
  }
  // either way, return the connection to firestore
  return getFirestore();

  // return the connection to firestore
}
