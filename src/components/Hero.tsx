import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-48 h-64 mx-auto mb-8 rounded-3xl overflow-hidden glass dark:glass-dark p-2"
        >
          <img
            src="https://picsum.photos/seed/bilal/400/600"
            alt="Bilal Nainia"
            className="w-full h-full object-cover rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
        >
          Bilal Nainia
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-bold"
        >
          Frontend Web Developer | Management Student
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="/projects"
            className="px-8 py-4 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
