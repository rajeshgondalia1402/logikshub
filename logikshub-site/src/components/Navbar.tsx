"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

const servicesMenu = [
  {
    title: "Mobile Apps",
    items: ["iOS", "Android", "Hybrid", "Cross Platform", "PWA"],
  },
  {
    title: "Web Development",
    items: ["Ecommerce", "CMS", "CRM", "API & Backend", "Custom Software Development"],
  },
  {
    title: "Product Design",
    items: ["UI/UX Design", "Web Design"],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 shadow-lg shadow-indigo-500/5"
          : "py-4"
      }`}
      style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.svg"
              alt="Logikshub"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold gradient-text">
              Logikshub
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium transition-colors hover:text-[var(--color-primary)] group flex items-center gap-1"
                  >
                    {link.name}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] rounded-2xl p-6 shadow-xl border border-[var(--color-primary)]/10"
                        style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)" }}
                      >
                        <div className="grid grid-cols-3 gap-6">
                          {servicesMenu.map((group) => (
                            <div key={group.title}>
                              <h4 className="text-sm font-semibold gradient-text mb-3">{group.title}</h4>
                              <ul className="space-y-2">
                                {group.items.map((item) => (
                                  <li key={item}>
                                    <Link
                                      href="#services"
                                      onClick={() => setServicesOpen(false)}
                                      className="text-sm transition-colors hover:text-[var(--color-primary)]"
                                      style={{ color: "var(--muted)" }}
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors hover:text-[var(--color-primary)] group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
            <ThemeToggle />
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 flex flex-col gap-2">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-primary)]/10 transition-colors flex items-center justify-between"
                  >
                    {link.name}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 space-y-3">
                          {servicesMenu.map((group) => (
                            <div key={group.title}>
                              <p className="px-4 py-1 text-xs font-semibold gradient-text uppercase tracking-wider">{group.title}</p>
                              {group.items.map((item) => (
                                <Link
                                  key={item}
                                  href="#services"
                                  onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                                  className="block px-4 py-1.5 text-sm hover:bg-[var(--color-primary)]/10 rounded-lg transition-colors"
                                  style={{ color: "var(--muted)" }}
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-primary)]/10 transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mx-4 mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white text-sm font-semibold text-center"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
