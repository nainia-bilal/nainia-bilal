import { motion } from "motion/react";

export function AnimatedBackground({ isDark }: { isDark: boolean }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? "bg-dark-gradient" : "bg-light-gradient"}`} />
      
      {/* Floating Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px]"
      />
    </div>
  );
}
