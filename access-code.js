import { db } from './firebase-init.js';
import {
  collection,
  getDoc,
  setDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export async function verifyCode(code, movieId, userEmail) {
  const codeRef = doc(db, "accessCodes", code);
  const codeSnap = await getDoc(codeRef);

  if (!codeSnap.exists()) {
    alert("Invalid code.");
    return false;
  }

  const codeData = codeSnap.data();

  if (codeData.used) {
    alert("Code has already been used.");
    return false;
  }

  if (codeData.movieId !== movieId) {
    alert("This code is not for this movie.");
    return false;
  }

  if (codeData.userEmail !== userEmail) {
    alert("This code is not assigned to your account.");
    return false;
  }

  await updateDoc(codeRef, {
    used: true,
    usedAt: new Date()
  });

  alert("Access granted! Playing movie...");
  return true;
}
