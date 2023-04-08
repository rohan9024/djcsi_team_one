import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAamm05PDvYaBM8aQqBXyGRZ6UVe2XJcGw",
  authDomain: "ettarra-ff769.firebaseapp.com",
  projectId: "ettarra-ff769",
  storageBucket: "ettarra-ff769.appspot.com",
  messagingSenderId: "305619923143",
  appId: "1:305619923143:web:f10aa73193a60ab2218ee2",
  measurementId: "G-0J2C82XE8F"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app);

export { db, auth, storage };