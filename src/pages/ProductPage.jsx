// src/pages/ProductPage.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProducts } from "../services/getProducts";
import FilterPanel from "../components/FilterPanel";
import Slider from "react-slick";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchData();
  }, []);

  const handleFilterSelect = (category, subcategory) => {
    const filtered = products.filter((p) => {
      return (
        (!category || p.category === category) &&
        (!subcategory || p.subcategory === subcategory)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <>
      <section className="min-h-screen text-white py-20 px-4 md:px-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-cinzel">
            Discover Our Collection
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Finest gemstones curated with care, authenticity, and elegance.
          </p>
        </motion.div>

        <FilterPanel onFilterSelect={handleFilterSelect} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111] rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 shadow-lg hover:shadow-yellow-700/30 transition-shadow"
            >
              {product.images?.length > 1 ? (
                // Carousel if more than one image
                <Slider {...settings}>
                  {product.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Image ${i}`}
                      className="w-full h-56 object-cover cursor-pointer"
                      onClick={() => {
                        setModalImage(img);
                        setModalOpen(true);
                      }}
                    />
                  ))}
                </Slider>
              ) : product.images?.length === 1 ? (
                // Single image (no carousel)
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-56 object-cover cursor-pointer"
                  onClick={() => {
                    setModalImage(product.images[0]);
                    setModalOpen(true);
                  }}
                />
              ) : (
                // Fallback image if none found
                <img
                  src={product.image || "/default.jpg"}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xl text-yellow-300 font-semibold">
                  {product.title || product.name}
                </h3>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-yellow-400 font-medium">
                    ₹{Number(product.price).toLocaleString()}
                  </span>
                  <span className="text-gray-500">
                    Origin: {product.origin}
                  </span>
                </div>
                <a
                  href={`https://wa.me/919782488408?text=Hi, I want to enquire about: ${
                    product.title || product.name
                  }`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-center border border-yellow-500 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full text-sm transition w-full"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}

          {/* ✨ No Products Message */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="col-span-full flex flex-col items-center mt-10"
            >
              <span className="text-5xl animate-bounce">😕</span>
              <p className="mt-4 text-gray-400 text-lg font-medium">
                No products available. Try changing filters or check back later.
              </p>
            </motion.div>
          )}
        </div>
      </section>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <motion.img
            src={modalImage}
            alt="Zoomed"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="max-w-4xl w-full max-h-[90vh] object-contain rounded shadow-lg"
          />
        </motion.div>
      )}
    </>
  );
}
