// src/components/FilterPanel.js
import { useEffect, useState } from "react";
import { getCategoriesWithSubcategories } from "../services/getCategories";

export default function FilterPanel({ onFilterSelect }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoriesWithSubcategories();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedSubcategory(null);
            onFilterSelect(null, null);
          }}
          className={`px-4 py-2 rounded-sm w-28 border ${
            !selectedCategory
              ? "bg-yellow-400 text-black"
              : "border-yellow-400 text-yellow-400"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedSubcategory(null);
              onFilterSelect(cat.name, null);
            }}
            className={`px-4 py-2  rounded-sm w-28 border ${
              selectedCategory?.id === cat.id
                ? "bg-yellow-400 text-black"
                : "border-yellow-400 text-yellow-400"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {selectedCategory && selectedCategory.subcategories.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {selectedCategory.subcategories.map((sub, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedSubcategory(sub);
                onFilterSelect(selectedCategory.name, sub);
              }}
              className={`px-3 py-1 rounded border text-sm ${
                selectedSubcategory === sub
                  ? "bg-yellow-300 text-black"
                  : "text-yellow-300 border-yellow-300"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
