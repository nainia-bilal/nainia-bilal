import { motion } from "motion/react";
import { Linkedin, Github, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    { name: "WhatsApp", icon: <Phone className="w-5 h-5" />, href: "https://wa.me/212687755912" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/bilal-nainia/" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com/nainia-bilal" },
    { name: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:nainiabilal@gmail.com" },
  ];

  return (
    <footer className="py-16 px-6 glass dark:glass-dark mt-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
          >
            Bilal Nainia
          </motion.h2>
          <p className="text-gray-800 dark:text-gray-200 text-center max-w-md font-bold">
            Building modern, responsive, and user-friendly digital experiences from Casablanca, Morocco.
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass dark:glass-dark rounded-xl text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/10 w-full text-center">
          <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
            © {currentYear} Bilal Nainia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
