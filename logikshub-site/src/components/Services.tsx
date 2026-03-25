"use client";

import { StaggerContainer, StaggerItem, FadeIn } from "./AnimatedSection";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI-Powered Development",
    description:
      "We leverage AI tools and copilots to write, test, and deploy code 3x faster — delivering production-grade software in record time.",
    highlight: "3x Faster",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Custom Software Development",
    description:
      "Full-stack web & mobile applications built with Next.js, React, Node.js, and Python — tailored to your unique business needs.",
    highlight: "Full-Stack",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "SaaS & Cloud Solutions",
    description:
      "Scalable SaaS platforms with multi-tenancy, AI-integrated workflows, and cloud-native architecture on AWS, Azure, or GCP.",
    highlight: "Scalable",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "AI Chatbots & Automation",
    description:
      "Smart chatbots, workflow automation, and AI-powered analytics that reduce manual effort and boost operational efficiency.",
    highlight: "Smart AI",
  },
];

function ComparisonBar() {
  return (
    <FadeIn className="mt-16">
      <div className="glass rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-center mb-8">
          Why Choose <span className="gradient-text">AI-Powered</span> Development?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Development Speed",
              ours: "3x Faster",
              traditional: "Standard",
              percentage: 85,
            },
            {
              label: "Cost Efficiency",
              ours: "40% Less",
              traditional: "Full Cost",
              percentage: 75,
            },
            {
              label: "Code Quality",
              ours: "AI-Reviewed",
              traditional: "Manual Only",
              percentage: 90,
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-sm font-medium mb-3">{item.label}</p>
              <div className="h-2 rounded-full bg-[var(--card-border)] overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
                />
              </div>
              <div className="flex justify-between text-xs" style={{ color: "var(--muted)" }}>
                <span>{item.traditional}</span>
                <span className="font-semibold text-[var(--color-primary)]">{item.ours}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "var(--section-alt)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[var(--color-primary)] mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            AI-First <span className="gradient-text">IT Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--muted)" }}>
            We use AI at every stage of development — from planning to deployment — so you get
            better software, faster, and at a lower cost than traditional IT companies.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 h-full group cursor-default relative overflow-hidden"
              >
                {/* Highlight badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 text-[var(--color-primary)]">
                  {service.highlight}
                </span>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center mb-4 text-[var(--color-primary)] group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {service.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ComparisonBar />
      </div>
    </section>
  );
}
