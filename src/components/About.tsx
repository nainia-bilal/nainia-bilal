import { motion } from "motion/react";
import { GraduationCap, Code, Brain } from "lucide-react";

export function About() {
  const education = [
    {
      title: "Web Development Certification",
      status: "Ongoing",
      icon: <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Bachelor in Management",
      status: "Ongoing",
      icon: <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Baccalaureate in Physical Sciences",
      status: "Completed",
      icon: <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    },
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "MongoDB"];
  const softSkills = ["Time Management", "Problem Solving", "Fast Learner"];

  return (
    <section id="about" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Education + Skills */}
          <div className="space-y-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">Education</h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="glass dark:glass-dark p-4 rounded-2xl flex items-center gap-4 hover:scale-[1.02] transition-transform"
                  >
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass dark:glass-dark rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass dark:glass-dark rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 italic"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: About Text */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass dark:glass-dark p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
              <p className="text-2xl md:text-3xl text-gray-900 dark:text-white leading-relaxed font-bold">
                "I am <span className="text-purple-600 dark:text-purple-400">Bilal Nainia</span>, a passionate Web Developer and Management student based in Casablanca. I specialize in building modern, responsive, and user-friendly digital experiences."
              </p>
              <p className="mt-8 text-gray-800 dark:text-gray-200 text-lg font-bold">
                I combine technical expertise with management principles to create solutions that are not only beautiful but also efficient and scalable. My goal is to bridge the gap between business needs and technological possibilities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass dark:glass-dark p-6 rounded-3xl text-center">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">Casablanca</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Based in Morocco</p>
              </div>
              <div className="glass dark:glass-dark p-6 rounded-3xl text-center">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">Fast</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Learner & Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
