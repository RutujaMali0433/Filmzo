import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDH_4rq32axtrBzYwbESKioEpxVsGQk8xg",
  authDomain: "movie-app-2a81a.firebaseapp.com",
  projectId: "movie-app-2a81a",
  storageBucket: "movie-app-2a81a.appspot.com",
  messagingSenderId: "1724678729",
  appId: "1:1724678729:web:7baf8430d0c9ae1beeb598",
  measurementId: "G-9DNRNZ8RRF"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);