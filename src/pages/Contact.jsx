import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen px-4 py-24 md:px-10 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#e0e6ff] font-cinzel">
          Get In Touch
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Have a query about gemstones, custom orders, or bulk buying? We’re
          here to help!
        </p>
      </motion.div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#b1b7e10e] rounded-xl p-8 border border-blue-500/10 shadow-lg"
        >
          <div className="mb-6">
            <label className="block mb-2 text-[#fff] text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-[#b1b7e106] text-white border border-blue-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e0e6ff]"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-[#fff] text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#b1b7e106] text-white border border-blue-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e0e6ff]"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-[#fff] text-sm font-medium">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              className="w-full p-3 bg-[#b1b7e106] text-white border border-blue-500/20 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#e0e6ff]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-[#e0e6ff] text-black py-3 rounded-md hover:bg-[#fff] transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between bg-[#b1b7e10e] rounded-xl p-8 border border-yellow-500/10 shadow-lg"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#e0e6ff] mb-2">
                Office Address
              </h3>
              <p className="text-gray-300">
                Kothari Gems, Jaipur, Rajasthan, India
                <br />
                Pincode - 302003
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e0e6ff] mb-2">
                Contact Info
              </h3>
              <p className="text-gray-300 flex items-center gap-2">
                <Phone className="text-[#e0e6ff]" size={18} />
                +91 98290 98489
              </p>
              <p className="text-gray-300 flex items-center gap-2 mt-1">
                <Mail className="text-[#e0e6ff]" size={18} />
                contact@kotharigems.com
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/+919829098489?text=Hi, I have an enquiry about your gemstones"
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-center border border-[#fff] text-[#ffff] hover:bg-[#fff] hover:text-black px-4 py-3 rounded-full text-sm transition w-full"
          >
            Enquire via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
