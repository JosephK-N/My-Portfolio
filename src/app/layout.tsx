import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  // Base URL for resolving relative image paths in Open Graph/Twitter meta tags
  metadataBase: new URL("https://your-portfolio-domain.vercel.app"), 

  title: {
    default: "Joseph KN | Full-Stack Developer",
    template: "%s | Joseph KN",
  },
  description:
    "Full-stack developer specializing in Next.js, TypeScript, Tailwind CSS, and modern web applications.",
  keywords: [
    "Joseph KN",
    "Portfolio",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Joseph KN" }],
  creator: "Joseph KN",

  // Open Graph metadata for social media previews (LinkedIn, Facebook, Discord, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-domain.vercel.app",
    title: "Joseph KN | Full-Stack Developer",
    description:
      "Full-stack developer building fast, responsive, and modern web applications with Next.js, TypeScript, and Tailwind CSS.",
    siteName: "Joseph KN Portfolio",
    images: [
      {
        url: "/og-image.png", // Must be placed inside the /public folder
        width: 1200,
        height: 630,
        alt: "Joseph KN Portfolio Preview",
      },
    ],
  },

  // Twitter / X card metadata
  twitter: {
    card: "summary_large_image",
    title: "Joseph KN | Full-Stack Developer",
    description:
      "Full-stack developer building fast, responsive, and modern web applications.",
    images: ["/og-image.png"],
    creator: "@your_twitter_handle", // Replace or omit if not applicable
  },

  // Search Engine Bot Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-brand-blue text-white selection:bg-brand-orange selection:text-white transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}