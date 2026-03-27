import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
    >
      <div className="glass dark:glass-dark rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`text-sm font-bold transition-colors ${
                  location.pathname === link.href
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle isDark={isDark} toggle={toggleTheme} />
      </div>
    </motion.nav>
  );
}
