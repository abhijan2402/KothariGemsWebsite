import { useEffect, useState } from "react";
import { getCmsContent } from "../services/getCmsContent";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await getCmsContent("privacy-policy");
      setContent(data);
    };
    fetchContent();
  }, []);

  return (
    <section className="text-white px-4 md:px-10 py-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#e0e6ff] font-cinzel">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Please read our Privacy Policy carefully before using our platform.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto min-h-[300px] flex items-center justify-center"
      >
        {content ? (
          <div
            className="text-gray-300 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content.description }}
          />
        ) : (
          <p className="text-gray-500 text-center text-lg animate-pulse">
            Loading Privacy Policy...
          </p>
        )}
      </motion.div>
    </section>
  );
}
