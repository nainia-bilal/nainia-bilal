import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { motion, AnimatePresence } from "motion/react";

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${isDark ? "dark bg-black text-white" : "bg-white text-gray-900"}`}>
        <AnimatedBackground isDark={isDark} />
        
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="relative z-10 pt-24">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
