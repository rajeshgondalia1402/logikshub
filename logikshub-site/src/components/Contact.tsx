"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const contactInfo = [
  {
    label: "Email",
    value: "logikshubsolution@gmail.com",
    href: "mailto:logikshubsolution@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    label: "Mobile",
    value: "+91 97236 57967",
    href: "tel:+919723657967",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500",
  },
  {
    label: "Location",
    value: "Surat, Gujarat",
    href: "https://maps.google.com/?q=Surat,Gujarat",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[var(--color-primary)] mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--muted)" }}>
            Ready to accelerate your project with AI-powered development? Reach out to us today.
          </p>
        </FadeIn>

        {/* Contact Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactInfo.map((item) => (
            <StaggerItem key={item.label}>
              <motion.a
                href={item.href}
                target={item.label === "Location" ? "_blank" : undefined}
                rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 flex flex-col items-center text-center group cursor-pointer block h-full"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="text-sm font-medium mb-1" style={{ color: "var(--muted)" }}>
                  {item.label}
                </h3>
                <p className="text-base font-semibold group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {item.value}
                </p>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Follow Us - LinkedIn Only */}
        <FadeIn className="text-center">
          <div className="glass rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <motion.a
              href="https://www.linkedin.com/in/logikshub-solutions-86a15821b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0077B5] to-[#0A66C2] text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </motion.a>
            <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
              Stay updated with our latest projects and AI innovations
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
