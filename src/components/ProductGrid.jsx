import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase"; // your firebase config
import { Star } from "lucide-react";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const q = query(
          collection(db, "products"),
          where("isFeatured", "==", true)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Sort newest first in JS
        const sorted = data.sort(
          (a, b) => b.created_at?.toMillis() - a.created_at?.toMillis()
        );
        setProducts(sorted.slice(0, 3)); // only 3 most recent
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <section className="bg-transparent text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-cinzel text-[#fff] mb-4">
          Featured Collection
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our most exclusive and recent handpicked gems.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-400 py-16">
          <Star className="w-8 h-8 mb-3 text-yellow-400" />
          <p className="text-lg font-medium text-[#e0e6ff]">
            No featured products available right now
          </p>
          <p className="text-sm text-gray-500 max-w-md">
            Please check back later — we’re handpicking something special for
            you.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-[#b1b7e106] rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 shadow-lg hover:shadow-blue-700/30 transition-shadow"
            >
              {/* Featured Badge */}
              <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Star className="w-3 h-3" /> Featured
              </div>

              <img
                src={product.images?.[0] || ""}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xl text-[#e0e6ff] font-semibold">
                  {product.categoryName}
                </h3>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-[#e0e6ff] font-medium">
                    ₹{product.price}
                  </span>
                  <span className="text-gray-500">
                    Origin: {product.origin}
                  </span>
                </div>
                <a
                  href={`https://wa.me/+919829098489?text=Hi, I want to enquire about: ${product.categoryName}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-center border border-[#fff] text-[#ffff] hover:bg-[#fff] hover:text-black px-4 py-2 rounded-full text-sm transition w-full"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
