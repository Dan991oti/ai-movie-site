// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC38mMJeaKzXjJyPaY72zKF72LVmFhWezk",
  authDomain: "ai-movie-platform-9e81c.firebaseapp.com",
  projectId: "ai-movie-platform-9e81c",
  storageBucket: "ai-movie-platform-9e81c.appspot.com",
  messagingSenderId: "439123002218",
  appId: "1:439123002218:web:928aa80681a923f0039b13",
  measurementId: "G-GS0540J7WN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
