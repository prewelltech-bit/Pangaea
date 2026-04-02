import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjHNl4ThS7HlnlxyjEPu7Qc7SBFR0-nUE",
  authDomain: "pangaea-slotbooking.firebaseapp.com",
  databaseURL: "https://pangaea-slotbooking-default-rtdb.firebaseio.com",
  projectId: "pangaea-slotbooking",
  storageBucket: "pangaea-slotbooking.firebasestorage.app",
  messagingSenderId: "630290113683",
  appId: "1:630290113683:web:48a09d88028ea007785966",
  measurementId: "G-R266JXPFKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
