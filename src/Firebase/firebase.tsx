import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./credenciales";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);