import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Logikshub | Tech Insights & Articles",
  description:
    "Stay updated with the latest trends in technology, development best practices, and industry insights from the Logikshub team.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
