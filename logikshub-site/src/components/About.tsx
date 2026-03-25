"use client";

import { FadeIn, SlideIn } from "./AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  "Next.js", "React", "Node.js", "Python", "TypeScript",
  "OpenAI", "AWS", "Docker", "PostgreSQL", "TailwindCSS",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image / Visual */}
          <SlideIn direction="left">
            <div className="relative">
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
                <div className="relative z-10">
                  <Image
                    src="/images/logikshub-cover.svg"
                    alt="Logikshub Team"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl -z-10 opacity-50 blur-sm" />

              {/* Floating tech badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 shadow-lg z-20"
              >
                <span className="text-xs font-bold gradient-text">AI-First Approach</span>
              </motion.div>
            </div>
          </SlideIn>

          {/* Right — Content */}
          <SlideIn direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[var(--color-primary)] mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Software{" "}
              <span className="gradient-text">Development Company</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              Logikshub is an IT software development company that harnesses the power
              of Artificial Intelligence to deliver projects faster, smarter, and more
              cost-effectively than traditional IT service providers.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Based in Surat, Gujarat, we partner with startups and enterprises to turn
              bold ideas into production-ready software — using AI at every stage from
              code generation to testing and deployment.
            </p>

            {/* Tech Stack Marquee */}
            <div className="mb-6 overflow-hidden">
              <p className="text-xs font-medium mb-3" style={{ color: "var(--muted)" }}>
                TECH WE WORK WITH
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Mission */}
              <FadeIn delay={0.1}>
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    To revolutionize software development by combining AI-driven
                    tools with expert engineering — delivering faster, better, and
                    more affordable solutions for businesses worldwide.
                  </p>
                </div>
              </FadeIn>

              {/* Vision */}
              <FadeIn delay={0.2}>
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-pink-500 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    To become the leading AI-first IT company recognized globally
                    for innovation, speed, and excellence — shaping how software
                    is built in the age of artificial intelligence.
                  </p>
                </div>
              </FadeIn>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
