import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Star, Sparkles, Crown, Award, Gem, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import BackToTopButton from "../components/BackToTopButton";

export default function MainLayout() {
  const floatingElements = [
    { icon: <Star size={24} />, delay: 0, duration: 4 },
    { icon: <Sparkles size={20} />, delay: 1, duration: 5 },
    { icon: <Crown size={28} />, delay: 2, duration: 3.5 },
    { icon: <Award size={22} />, delay: 0.5, duration: 4.5 },
    { icon: <Gem size={26} />, delay: 1.5, duration: 3 },
    { icon: <ShieldCheck size={24} />, delay: 2.5, duration: 4 },
  ];

  return (
    <div
      style={{
        background: `
      radial-gradient(circle at center, 
      #1e1f5f 0%,      /* darker indigo center */
        #151a4d 30%,     /* deep transition tone */
        #0f1123 65%,     /* navy black */
        #000000 100%     /* black outer edges */
      )
    `,
      }}
      className="relative min-h-screen text-white "
    >
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />

      {/* Particle background — shared across all pages */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-[#9bbdf8] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating decorative icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingElements.map((element, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute text-blue-400/20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          >
            {element.icon}
          </motion.div>
        ))}
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}
