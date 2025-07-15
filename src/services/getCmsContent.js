// src/services/getCmsContent.js
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // ensure this is your Firebase config file

export const getCmsContent = async (slug) => {
  try {
    const docRef = doc(db, "cms", slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.warn("No CMS content found for slug:", slug);
      return null;
    }
  } catch (error) {
    console.error("Error fetching CMS content:", error);
    return null;
  }
};
