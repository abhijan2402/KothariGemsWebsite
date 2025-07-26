import { motion } from "framer-motion";
import { Gem, Globe2, UserCheck, Award } from "lucide-react";

const stats = [
  { icon: <Gem size={32} />, number: 250, label: "Gemstone Designs" },
  { icon: <UserCheck size={32} />, number: 500, label: "Happy Clients" },
  { icon: <Award size={32} />, number: 15, label: "Years of Legacy" },
  { icon: <Globe2 size={32} />, number: 20, label: "Countries Served" },
];

export default function AboutSection() {
  return (
    <section className=" text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className=" sm:text-4xl  font-cinzel text-3xl md:text-4xl text-[#fff] mb-2">
            About Us
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Since 2008, Kothari Gems has established itself as a leading name in
            the gemstone crafting and supply sector.
          </p>
          <p className="text-gray-400 mb-4">
            Over time, we’ve built a reputation for excellence, serving both
            global jewelry brands and independent designers with the same
            passion and reliability.
          </p>
          <p className="text-gray-400 mb-4">
            Our commitment to quality and timely delivery has allowed us to
            foster long-term partnerships with clients in the USA, Europe, Asia,
            Australia, and beyond.
          </p>
          <p className="text-gray-400">
            Backed by skilled artisans and advanced in-house facilities, we
            produce premium gemstones with precision and care — ensuring
            brilliance, accuracy, and innovation in every piece.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#b1b7e106] border border-blue-600/30 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-blue-500/20 transition-all"
            >
              <div className="text-[#e0e6ff] mb-3">{item.icon}</div>
              <h3 className="text-3xl font-bold text-[#e0e6ff]">
                {item.number}+
              </h3>
              <p className="text-sm text-gray-400 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
