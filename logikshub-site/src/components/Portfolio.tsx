"use client";

import { StaggerContainer, StaggerItem, FadeIn } from "./AnimatedSection";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GymDeskPro",
    category: "SaaS Web App",
    description:
      "A complete Gym Member Management SaaS platform with membership tracking, payment management, attendance monitoring, and a beautiful admin dashboard — built for gym owners to manage everything in one place.",
    tags: ["React.js", "Node.js", "Prisma", "shadcn/ui"],
    gradient: "from-indigo-500 to-blue-500",
    href: "https://gymdeskpro.in/",
    live: true,
  },
  {
    title: "Calculators Ninja",
    category: "Free Tools",
    description:
      "A comprehensive free online calculator tools platform featuring 100+ calculators across finance, health, math, science, and everyday use — fast, accurate, and completely free.",
    tags: ["Next.js", "TypeScript", "shadcn/ui", "Material UI"],
    gradient: "from-emerald-500 to-teal-500",
    href: "https://www.calculatorsninja.com/",
    live: true,
  },
  {
    title: "Care for Kids",
    category: "Childcare Platform",
    description:
      "Australia's leading childcare search and comparison platform — helping parents find, compare, and enquire about childcare services with a built-in cost calculator and parent playbook.",
    tags: ["React", ".NET Core Web API"],
    gradient: "from-purple-500 to-indigo-500",
    href: "https://www.careforkids.com.au/",
    live: true,
  },
  {
    title: "Smart Customer Support Bot",
    category: "AI Chatbot",
    description:
      "Intelligent NLP chatbot with sentiment analysis, automated ticket routing, and seamless CRM integration — reducing support costs by 60%.",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    gradient: "from-purple-500 to-pink-500",
    href: null,
    live: false,
  },
  {
    title: "E-Commerce AI Analytics Hub",
    category: "AI Analytics",
    description:
      "Real-time analytics dashboard with AI-powered inventory forecasting, customer behavior prediction, and automated marketing insights.",
    tags: ["Next.js", "Python", "GCP", "BigQuery"],
    gradient: "from-orange-500 to-red-500",
    href: null,
    live: false,
  },
  {
    title: "FinTech Payment Gateway",
    category: "Custom Software",
    description:
      "Secure payment processing solution with fraud detection AI, multi-currency support, and automated compliance monitoring.",
    tags: ["React", "Spring Boot", "Azure", "MongoDB"],
    gradient: "from-cyan-500 to-blue-500",
    href: null,
    live: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24" style={{ background: "var(--section-alt)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[var(--color-primary)] mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            AI-Built <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--muted)" }}>
            Software we built using AI-powered development — delivered faster and smarter.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Wrapper = project.href ? "a" : "div";
            const linkProps = project.href
              ? { href: project.href, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
              <StaggerItem key={project.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl overflow-hidden group h-full flex flex-col"
                >
                  {/* Colored header */}
                  <Wrapper {...linkProps} className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden block`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    {project.live && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500 text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </Wrapper>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-primary)] hover:scale-110 transition-transform"
                          aria-label={`Visit ${project.title}`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
