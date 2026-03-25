"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  Services: [
    { name: "AI-Powered Development", href: "#services" },
    { name: "Custom Software", href: "#services" },
    { name: "SaaS & Cloud", href: "#services" },
    { name: "AI Chatbots", href: "#services" },
  ],
  Contact: [
    { name: "logikshubsolution@gmail.com", href: "mailto:logikshubsolution@gmail.com" },
    { name: "+91 97236 57967", href: "tel:+919723657967" },
    { name: "Surat, Gujarat", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.svg"
                alt="Logikshub"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-xl font-bold gradient-text">Logikshub</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: "var(--muted)" }}>
              AI-powered IT software development company. We deliver projects
              3x faster using AI — more productive, more affordable, and
              production-ready.
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/logikshub-solutions-86a15821b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow us on LinkedIn
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-[var(--color-primary)]"
                      style={{ color: "var(--muted)" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} Logikshub Solutions. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Surat, Gujarat &middot; AI-Powered IT Services
          </p>
        </div>
      </div>
    </footer>
  );
}
