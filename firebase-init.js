
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC38mMJeaKzXjJyPaY72zKF72LVmFhWezk",
  authDomain: "ai-movie-platform-9e81c.firebaseapp.com",
  projectId: "ai-movie-platform-9e81c",
  storageBucket: "ai-movie-platform-9e81c.firebasestorage.app",
  messagingSenderId: "439123002218",
  appId: "1:439123002218:web:928aa80681a923f0039b13",
  measurementId: "G-GS0540J7WN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
