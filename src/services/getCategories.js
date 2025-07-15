// src/services/getCategories.js
import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const getCategoriesWithSubcategories = async () => {
  const categorySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

  for (const docSnap of categorySnapshot.docs) {
    const categoryId = docSnap.id;
    const categoryName = docSnap.data().name;

    const subSnapshot = await getDocs(
      collection(db, `categories/${categoryId}/subcategories`)
    );
    const subcategories = subSnapshot.docs.map((doc) => doc.data().name);

    categories.push({
      id: categoryId,
      name: categoryName,
      subcategories: subcategories,
    });
  }

  return categories;
};
