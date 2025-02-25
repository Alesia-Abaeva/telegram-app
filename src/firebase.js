import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOHWk9PULh6kLY_sqLCa6mQVzkg-d978A",
  authDomain: "telegram-app-c83d0.firebaseapp.com",
  projectId: "telegram-app-c83d0",
  storageBucket: "telegram-app-c83d0.firebasestorage.app",
  messagingSenderId: "382384144688",
  appId: "1:382384144688:web:b989edf17b80d0bbaec8f5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
