import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Maison Bilal - Premium Beldi Food",
      description: "A premium e-commerce platform for traditional Moroccan food products. Features a clean, elegant design that showcases the quality of the products.",
      image: "https://picsum.photos/seed/maison-bilal/800/600",
      link: "https://premium-beldi-food.vercel.app/",
    },
    {
      id: 2,
      title: "RAID - Sneakers E-commerce",
      description: "A modern, high-performance sneakers store with a focus on user experience and visual appeal. Includes product filtering and a seamless checkout flow.",
      image: "https://picsum.photos/seed/raid-sneakers/800/600",
      link: "https://ecommerce-websitebilal.vercel.app",
    },
    {
      id: 3,
      title: "Amal El Abdellaoui Portfolio",
      description: "A professional portfolio website for a creative professional. Minimalist design with smooth transitions and a focus on visual storytelling.",
      image: "https://picsum.photos/seed/amal-portfolio/800/600",
      link: "https://amal-ruby.vercel.app/",
    },
    {
      id: 4,
      title: "Rose Bloom Portfolio",
      description: "A delicate and artistic portfolio design for a floral or creative business. Soft colors and elegant typography define this project.",
      image: "https://picsum.photos/seed/rose-bloom/800/600",
      link: "https://rose-bloom-ecru.vercel.app/",
    },
    {
      id: 5,
      title: "Douae El Andalosy Portfolio",
      description: "A modern personal brand website featuring interactive elements and a professional layout for showcasing skills and projects.",
      image: "https://picsum.photos/seed/douae-portfolio/800/600",
      link: "https://douae-elandalosy.vercel.app/",
    },
    {
      id: 6,
      title: "Maroc Safariyat",
      description: "A travel and tourism platform for exploring the beauty of Morocco. Features destination guides and booking integrations.",
      image: "https://picsum.photos/seed/maroc-safariyat/800/600",
      link: "https://maroc-safariyat.vercel.app/",
    },
    {
      id: 7,
      title: "Future Project",
      description: "An upcoming project that will push the boundaries of web development. Stay tuned for more updates!",
      image: "https://picsum.photos/seed/future-project/800/600",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer glass dark:glass-dark rounded-3xl overflow-hidden hover:scale-[1.02] transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-white/90 dark:bg-black/90 rounded-full text-sm font-bold text-purple-600 dark:text-purple-400">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass dark:glass-dark w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-200 text-xl leading-relaxed mb-8 font-bold">
                  {selectedProject.description}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20"
                  >
                    View Project <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-4 glass dark:glass-dark text-gray-700 dark:text-gray-300 font-bold rounded-full hover:bg-white/20 dark:hover:bg-black/40 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
