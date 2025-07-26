import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="text-white px-4 md:px-10 py-20 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#e0e6ff] font-cinzel">
          About Kothari Gems
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Empowering the gemstone world with trust, precision, and craftsmanship
          since 2008.
        </p>
      </motion.div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Brand Origins */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#e0e6ff] mb-3">
            Humble Beginnings
          </h2>
          <p className="text-gray-300 text-md leading-relaxed">
            Kothari Gems began its journey in 2008 with a simple goal: to
            deliver exceptional gemstones backed by integrity and passion. What
            started as a small manufacturing effort has grown into a globally
            trusted name.
          </p>
          <p className="text-gray-300 mt-3">
            Today, we proudly serve clients across continents—from the United
            States and Europe to Asia-Pacific—offering both large-scale and
            niche solutions.
          </p>
        </motion.div>

        {/* Our Commitment to Quality */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#e0e6ff] mb-3">
            Precision at Every Step
          </h2>
          <p className="text-gray-300 text-md leading-relaxed">
            Each gemstone we produce undergoes a meticulous process guided by
            skilled artisans using modern equipment. We prioritize symmetry,
            luster, and durability in every piece.
          </p>
          <p className="text-gray-300 mt-3">
            Our in-house quality checks and custom standards ensure our clients
            receive stones that reflect excellence and consistency.
          </p>
        </motion.div>

        {/* Ethical Sourcing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#e0e6ff] mb-3">
            Responsible Sourcing
          </h2>
          <p className="text-gray-300 text-md leading-relaxed">
            We work closely with mines and suppliers in Brazil, Thailand,
            Tanzania, and beyond who share our commitment to ethical labor
            practices and environmental respect.
          </p>
          <p className="text-gray-300 mt-3">
            Transparency, traceability, and fair trade are the pillars of our
            sourcing strategy.
          </p>
        </motion.div>

        {/* Masterful Crafting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#e0e6ff] mb-3">
            Artistry That Inspires
          </h2>
          <p className="text-gray-300 text-md leading-relaxed">
            Behind every gem lies the touch of a master craftsman. Our team
            constantly explores new designs and cutting styles, blending
            tradition with innovation to offer exclusive results.
          </p>
        </motion.div>

        {/* Innovation & Technology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#e0e6ff] mb-3">
            Leading Through Innovation
          </h2>
          <p className="text-gray-300 text-md leading-relaxed">
            From CAD-driven modeling to CNC cutting systems, we integrate modern
            technology to optimize production and deliver unmatched
            precision—every time.
          </p>
          <p className="text-gray-300 mt-3">
            As we scale, our focus remains rooted in craftsmanship, ethics, and
            customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
