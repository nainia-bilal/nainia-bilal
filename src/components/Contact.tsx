import { motion } from "motion/react";
import React, { useState } from "react";
import { Mail, MessageSquare, User, Send, Linkedin, Github, Phone } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  const socials = [
    { name: "WhatsApp", icon: <Phone className="w-6 h-6" />, href: "https://wa.me/212687755912", color: "hover:text-green-500" },
    { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/bilal-nainia/", color: "hover:text-blue-600" },
    { name: "GitHub", icon: <Github className="w-6 h-6" />, href: "https://github.com/nainia-bilal", color: "hover:text-gray-900 dark:hover:text-white" },
  ];

  return (
    <section id="contact" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass dark:glass-dark p-8 md:p-12 rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 dark:text-gray-200 ml-4 uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full pl-16 pr-8 py-5 glass dark:glass-dark rounded-2xl focus:ring-2 focus:ring-purple-600 outline-none transition-all text-gray-900 dark:text-white font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 dark:text-gray-200 ml-4 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full pl-16 pr-8 py-5 glass dark:glass-dark rounded-2xl focus:ring-2 focus:ring-purple-600 outline-none transition-all text-gray-900 dark:text-white font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 dark:text-gray-200 ml-4 uppercase tracking-wider">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-6 top-8 w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full pl-16 pr-8 py-5 glass dark:glass-dark rounded-2xl focus:ring-2 focus:ring-purple-600 outline-none transition-all text-gray-900 dark:text-white resize-none font-bold"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Right: Info & Socials */}
          <div className="space-y-12">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Let's build something amazing together.</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. If you have a project in mind or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 glass dark:glass-dark rounded-3xl group hover:scale-[1.02] transition-all">
                  <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400">Email Me</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">nainiabilal@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-6 glass dark:glass-dark rounded-3xl group hover:scale-[1.02] transition-all">
                  <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400">WhatsApp</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">+212 687 755 912</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Follow Me</h4>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-5 glass dark:glass-dark rounded-2xl text-gray-600 dark:text-gray-400 transition-all ${social.color} hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
