import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFBzSf8Iv3z0IOQ0v9BXm5ej28qnwUbcQ",
  authDomain: "fir-login-8e1a1.firebaseapp.com",
  projectId: "fir-login-8e1a1",
  storageBucket: "fir-login-8e1a1.firebasestorage.app",
  messagingSenderId: "538837978437",
  appId: "1:538837978437:web:29681c91937d699fbdc22c",
  measurementId: "G-HQD9BQ3XSS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
