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
  metadataBase: new URL("https://tcxcommit.vercel.app"),
  title: {
    default: "tcxcommit - AI-Powered Git Commit Message Generator",
    template: "%s | tcxcommit",
  },
  description: "AI-powered CLI tool to generate smart git commit messages. Conventional format, 5 free trials, unlimited with your API key.",
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
    url: "https://tcxcommit.vercel.app",
    siteName: "tcxcommit",
    title: "tcxcommit - AI-Powered Git Commit Message Generator",
    description: "AI-powered CLI tool to generate smart git commit messages. Conventional format, 5 free trials, unlimited with your API key.",
    images: [
      {
        url: "https://tcxcommit.vercel.app/tcx-commit.webp",
        width: 1200,
        height: 630,
        alt: "tcxcommit - AI Git Commit Message Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "tcxcommit - AI-Powered Git Commit Message Generator",
    description: "AI-powered CLI tool to generate smart git commit messages. Conventional format, 5 free trials.",
    images: ["https://tcxcommit.vercel.app/tcx-commit.webp"],
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
