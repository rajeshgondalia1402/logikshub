"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const blogPosts = [
  {
    title: "How AI is Transforming SaaS in 2026",
    excerpt:
      "Artificial intelligence is reshaping the SaaS landscape. Learn how AI-powered features are becoming essential for modern software platforms.",
    date: "March 20, 2026",
    category: "AI",
    readTime: "5 min read",
    gradient: "from-indigo-500 to-purple-500",
    content: [
      {
        heading: "The AI-SaaS Revolution",
        text: "In 2026, AI isn't just a feature — it's the foundation. SaaS companies that haven't embraced AI are falling behind rapidly. From automated customer onboarding to predictive analytics dashboards, AI is embedded into every layer of modern software platforms.",
      },
      {
        heading: "Smart Automation at Scale",
        text: "AI-powered automation is eliminating repetitive tasks across SaaS products. Intelligent workflows can auto-categorize support tickets, generate reports, predict churn before it happens, and personalize user experiences in real-time — all without human intervention.",
      },
      {
        heading: "AI-Driven Product Development",
        text: "Development teams are using AI copilots to write, test, and deploy code 3x faster. At Logikshub, we leverage AI at every stage — from code generation and bug detection to automated testing and deployment pipelines. This means faster releases and higher quality software.",
      },
      {
        heading: "Predictive Analytics & Insights",
        text: "Modern SaaS platforms use machine learning models to surface insights that would take human analysts weeks to uncover. Revenue forecasting, user behavior prediction, and anomaly detection are now standard features expected by enterprise customers.",
      },
      {
        heading: "What This Means for Businesses",
        text: "If you're building or investing in a SaaS product, AI integration isn't optional anymore — it's a competitive necessity. Companies that adopt AI-first approaches are seeing 40%+ improvements in efficiency and significantly lower development costs.",
      },
    ],
  },
  {
    title: "Next.js App Router: A Complete Guide",
    excerpt:
      "Dive deep into the Next.js App Router architecture and learn how to build performant, SEO-friendly web applications.",
    date: "March 15, 2026",
    category: "Web Development",
    readTime: "8 min read",
    gradient: "from-blue-500 to-cyan-500",
    content: [
      {
        heading: "Why App Router Changed Everything",
        text: "The Next.js App Router introduced a paradigm shift in React development. Built on React Server Components, it enables developers to build applications where the server does the heavy lifting — resulting in smaller JavaScript bundles, faster page loads, and better SEO out of the box.",
      },
      {
        heading: "File-Based Routing & Layouts",
        text: "The App Router uses a file-system based routing approach with folders defining routes. Nested layouts allow you to share UI between pages without re-rendering the entire page. This means persistent navigation, sidebars, and headers that don't flash on navigation.",
      },
      {
        heading: "Server Components vs Client Components",
        text: "By default, all components in the App Router are Server Components — they render on the server and send only HTML to the client. When you need interactivity (click handlers, state, effects), you add 'use client' at the top of the file. This hybrid approach gives you the best of both worlds.",
      },
      {
        heading: "Data Fetching Patterns",
        text: "Gone are getServerSideProps and getStaticProps. In the App Router, you fetch data directly in Server Components using async/await. This feels more natural and eliminates the mental overhead of choosing between different data fetching methods. Caching and revalidation are built-in.",
      },
      {
        heading: "Performance Best Practices",
        text: "Use Server Components for data-heavy pages, implement streaming with Suspense for progressive loading, leverage parallel routes for complex layouts, and use route handlers for API endpoints. These patterns combined deliver exceptional Core Web Vitals scores.",
      },
    ],
  },
  {
    title: "Cloud-Native Architecture Best Practices",
    excerpt:
      "Explore containerization, microservices, and serverless patterns that power modern cloud deployments.",
    date: "March 10, 2026",
    category: "Cloud",
    readTime: "6 min read",
    gradient: "from-emerald-500 to-teal-500",
    content: [
      {
        heading: "What is Cloud-Native?",
        text: "Cloud-native architecture is an approach to building and running applications that fully exploits the advantages of cloud computing. It encompasses containerization, microservices, declarative APIs, and immutable infrastructure — designed for scalability, resilience, and rapid iteration.",
      },
      {
        heading: "Containerization with Docker & Kubernetes",
        text: "Containers package your application with all its dependencies into a portable unit. Docker makes creating containers simple, while Kubernetes orchestrates them at scale — handling deployment, scaling, load balancing, and self-healing automatically across clusters of machines.",
      },
      {
        heading: "Microservices Done Right",
        text: "Break your monolith into independently deployable services, each owning its own data and business logic. But don't over-split — start with a modular monolith and extract services only when there's a clear scaling or team ownership need. Communication between services should use async messaging (like event queues) wherever possible.",
      },
      {
        heading: "Serverless & Edge Computing",
        text: "Serverless functions (AWS Lambda, Azure Functions, Vercel Edge) let you run code without managing servers. They're perfect for event-driven workloads, APIs, and background processing. Edge computing pushes logic closer to users, reducing latency to milliseconds for global applications.",
      },
      {
        heading: "Observability & Monitoring",
        text: "In distributed systems, observability is critical. Implement structured logging, distributed tracing (OpenTelemetry), and metrics collection from day one. Tools like Grafana, Datadog, and AWS CloudWatch give you visibility into every request flowing through your system.",
      },
    ],
  },
  {
    title: "Building Scalable Multi-Tenant SaaS Platforms",
    excerpt:
      "A practical guide to designing multi-tenant architectures that scale gracefully with your growing user base.",
    date: "March 5, 2026",
    category: "SaaS",
    readTime: "7 min read",
    gradient: "from-orange-500 to-red-500",
    content: [
      {
        heading: "Understanding Multi-Tenancy",
        text: "Multi-tenancy is the backbone of SaaS — a single application instance serves multiple customers (tenants), each with isolated data and configurations. Getting this right from the start is crucial because retrofitting multi-tenancy into an existing application is extremely costly.",
      },
      {
        heading: "Database Strategies",
        text: "There are three main approaches: shared database with tenant ID column (cheapest, good for most startups), shared database with separate schemas per tenant (balanced isolation), and separate databases per tenant (highest isolation, highest cost). Most SaaS platforms start with the shared approach and graduate as needed.",
      },
      {
        heading: "Authentication & Authorization",
        text: "Implement organization-based auth where users belong to tenants. JWT tokens should include the tenant context. Role-based access control (RBAC) should be tenant-scoped — an admin in Tenant A has no visibility into Tenant B. Use middleware to enforce tenant isolation on every request.",
      },
      {
        heading: "Scaling Strategies",
        text: "Horizontal scaling is key — use stateless application servers behind load balancers, cache aggressively with Redis, implement connection pooling for databases, and use queue-based processing for heavy workloads. Plan for noisy-neighbor problems where one tenant's heavy usage affects others.",
      },
      {
        heading: "Billing & Subscription Management",
        text: "Integrate with Stripe or similar platforms early. Support multiple pricing tiers, usage-based billing, and per-seat licensing. Track feature usage per tenant to inform pricing decisions. Automated invoicing, proration for mid-cycle changes, and dunning for failed payments are must-haves.",
      },
    ],
  },
  {
    title: "The Future of DevOps: AI-Driven Pipelines",
    excerpt:
      "How machine learning is automating CI/CD pipelines, infrastructure management, and incident response.",
    date: "February 28, 2026",
    category: "DevOps",
    readTime: "5 min read",
    gradient: "from-pink-500 to-rose-500",
    content: [
      {
        heading: "AI Meets DevOps",
        text: "AIOps is revolutionizing how teams build, deploy, and maintain software. Machine learning models analyze deployment patterns, predict failures before they occur, and automatically remediate common issues — turning reactive firefighting into proactive management.",
      },
      {
        heading: "Intelligent CI/CD Pipelines",
        text: "AI-powered pipelines can automatically determine which tests to run based on code changes (reducing test suite time by 60%+), detect flaky tests, optimize build caching, and even predict whether a deployment will cause issues based on historical data patterns.",
      },
      {
        heading: "Automated Infrastructure Management",
        text: "Infrastructure as Code (IaC) combined with AI enables self-optimizing infrastructure. ML models analyze resource utilization patterns and automatically right-size instances, scale clusters, and adjust configurations — saving 30-40% on cloud costs without manual intervention.",
      },
      {
        heading: "Incident Detection & Response",
        text: "AI-driven monitoring detects anomalies in real-time by learning normal behavior patterns. When an incident occurs, automated runbooks execute remediation steps immediately. Root cause analysis that previously took hours can now be surfaced in minutes using log correlation and trace analysis.",
      },
      {
        heading: "Getting Started with AIOps",
        text: "Start by instrumenting your applications thoroughly — you need data before AI can help. Implement structured logging, distributed tracing, and comprehensive metrics. Then gradually introduce ML-based alerting, test optimization, and automated scaling. The ROI compounds quickly.",
      },
    ],
  },
  {
    title: "Securing Your Web Application: OWASP Top 10",
    excerpt:
      "Stay ahead of vulnerabilities with this comprehensive guide to the OWASP Top 10 security risks and mitigation strategies.",
    date: "February 20, 2026",
    category: "Security",
    readTime: "9 min read",
    gradient: "from-violet-500 to-purple-500",
    content: [
      {
        heading: "Why Security Can't Be an Afterthought",
        text: "Data breaches cost businesses an average of $4.5 million in 2025. Security must be baked into every stage of development — from design to deployment. The OWASP Top 10 provides a framework for addressing the most critical web application security risks.",
      },
      {
        heading: "Broken Access Control (#1)",
        text: "The most common vulnerability — users accessing resources or actions beyond their permissions. Mitigation: implement server-side authorization checks on every endpoint, deny by default, use role-based access control, validate JWT tokens and session ownership, and log all access control failures for monitoring.",
      },
      {
        heading: "Injection Attacks (#3)",
        text: "SQL injection, NoSQL injection, and command injection occur when untrusted data is sent to an interpreter. Mitigation: always use parameterized queries or ORM frameworks (like Prisma), validate and sanitize all input, apply the principle of least privilege to database accounts, and use WAFs as an additional layer.",
      },
      {
        heading: "Security Misconfiguration (#5)",
        text: "Default configurations, open cloud storage buckets, unnecessary features enabled, and missing security headers are shockingly common. Mitigation: automate your security configuration checks in CI/CD, use minimal base images for containers, disable directory listings, implement CSP/HSTS/X-Frame-Options headers.",
      },
      {
        heading: "Keeping Dependencies Secure",
        text: "Vulnerable and outdated components account for a huge attack surface. Run automated dependency scanning (Snyk, npm audit, Dependabot) in your pipeline. Pin dependency versions, review changelogs before updating, and have a process for emergency patching when critical CVEs are disclosed.",
      },
    ],
  },
];

function BlogModal({
  post,
  onClose,
}: {
  post: (typeof blogPosts)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-8 overflow-y-auto"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="glass rounded-3xl w-full max-w-3xl my-8 overflow-hidden relative"
        style={{ background: "var(--background)" }}
      >
        {/* Header gradient */}
        <div className={`h-48 sm:h-56 bg-gradient-to-br ${post.gradient} relative`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <span className="text-white/80 text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm w-fit mb-3">
              {post.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 text-white/70 text-sm mt-2">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            {post.excerpt}
          </p>

          {post.content.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
                {section.heading}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {section.text}
              </p>
            </motion.div>
          ))}

          {/* Footer CTA */}
          <div className="pt-4 border-t border-[var(--card-border)] flex items-center justify-between">
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              Published by Logikshub Solutions
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-105"
            >
              Back to Articles
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[var(--color-primary)] mb-4">
              Blog
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Insights & <span className="gradient-text">Articles</span>
            </h1>
            <p
              className="max-w-2xl mx-auto text-base"
              style={{ color: "var(--muted)" }}
            >
              Stay updated with the latest trends in technology, development best
              practices, and industry insights.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <StaggerItem key={post.title}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl overflow-hidden group h-full flex flex-col cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div
                    className={`h-40 bg-gradient-to-br ${post.gradient} relative`}
                  >
                    <div className="absolute inset-0 flex items-end p-4">
                      <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div
                      className="flex items-center gap-3 text-xs mb-3"
                      style={{ color: "var(--muted)" }}
                    >
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {post.title}
                    </h2>
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: "var(--muted)" }}
                    >
                      {post.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="text-sm font-medium text-[var(--color-primary)] group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-semibold hover:scale-105 transition-transform"
            >
              ← Back to Home
            </Link>
          </FadeIn>
        </div>
      </main>
      <Footer />

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
