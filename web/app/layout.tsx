import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tcxcommit.com"),
  title: {
    default: "tcxcommit - AI-Powered Git Commit Message Generator",
    template: "%s | tcxcommit",
  },
  description: "tcxcommit is an AI-powered CLI tool that generates smart and conventional git commit messages. Never write commit messages manually again. Free to start with 5 trials.",
  keywords: [
    "git commit",
    "commit message generator",
    "AI commit",
    "conventional commits",
    "git helper",
    "automation",
    "developer tools",
    "openrouter",
    "CLI tool",
  ],
  authors: [{ name: "sahilcodexx", url: "https://github.com/sahilcodexx" }],
  creator: "sahilcodexx",
  publisher: "sahilcodexx",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tcxcommit.com",
    siteName: "tcxcommit",
    title: "tcxcommit - AI-Powered Git Commit Message Generator",
    description: "tcxcommit is an AI-powered CLI tool that generates smart and conventional git commit messages. Never write commit messages manually again. Free to start with 5 trials.",
    images: [
      {
        url: "/tcx-commit.webp",
        width: 1200,
        height: 630,
        alt: "tcxcommit - AI Git Commit Message Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "tcxcommit - AI-Powered Git Commit Message Generator",
    description: "tcxcommit is an AI-powered CLI tool that generates smart and conventional git commit messages. Never write commit messages manually again.",
    images: ["/tcx-commit.webp"],
    creator: "@sahilcodexx",
  },
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster/>
      </body>
    </html>
  );
}
