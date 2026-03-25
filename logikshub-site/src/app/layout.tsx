import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logikshub — AI-Powered IT Software Development Company",
  description:
    "Logikshub is an AI-powered IT software development company based in Surat, Gujarat. We build software 3x faster using AI — more productive, cost-effective, and production-ready than traditional IT services.",
  keywords: [
    "Logikshub",
    "AI Software Development",
    "IT Company Surat",
    "AI-Powered Development",
    "SaaS Development",
    "Custom Software",
    "AI Chatbots",
    "Web Development",
    "Cloud Solutions",
  ],
  authors: [{ name: "Logikshub Solutions" }],
  openGraph: {
    title: "Logikshub — AI-Powered IT Software Development",
    description:
      "We build software 3x faster using AI. More productive, more affordable IT services from Surat, Gujarat.",
    url: "https://logikshub.tech",
    siteName: "Logikshub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logikshub — AI-Powered IT Software Development",
    description:
      "We build software 3x faster using AI. More productive, more affordable IT services.",
  },
  metadataBase: new URL("https://logikshub.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
