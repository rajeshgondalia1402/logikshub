"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          if (displayText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className="gradient-text">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, target]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating AI particles */}
        <motion.div
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-indigo-400"
        />
        <motion.div
          animate={{ y: [10, -10, 10], x: [5, -5, 5], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[10%] w-2 h-2 rounded-full bg-purple-400"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[20%] w-2.5 h-2.5 rounded-full bg-pink-400"
        />
        <motion.div
          animate={{ y: [8, -12, 8], x: [-3, 7, -3], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-cyan-400"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="flex items-center gap-1.5">
            AI-Powered IT Solutions
            <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          IT Services Powered by{" "}
          <br className="hidden sm:block" />
          <TypewriterText
            texts={[
              "Artificial Intelligence",
              "Faster Delivery",
              "Smarter Development",
              "Next-Gen Innovation",
            ]}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-6"
          style={{ color: "var(--muted)" }}
        >
          We build software{" "}
          <span className="font-semibold" style={{ color: "var(--foreground)" }}>
            3x faster
          </span>{" "}
          using AI-driven development. More productive, more efficient, and more
          cost-effective than traditional IT services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {["AI Development", "Rapid Delivery", "Cost-Effective", "Production-Ready"].map(
            (tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20"
              >
                ✦ {tag}
              </motion.span>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold text-base hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            Start Your Project
          </Link>
          <Link
            href="#services"
            className="px-8 py-3.5 rounded-full glass font-semibold text-base hover:scale-105 transition-all duration-300"
          >
            Explore Services →
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { target: 3, suffix: "x", label: "Faster with AI" },
            { target: 50, suffix: "+", label: "Projects Delivered" },
            { target: 40, suffix: "%", label: "Cost Savings" },
            { target: 99, suffix: "%", label: "Client Satisfaction" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass rounded-2xl p-5 cursor-default"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm mt-1" style={{ color: "var(--muted)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
