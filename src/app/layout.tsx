import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import CommandPalette from "@/components/command-palette/CommandPalette";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pankaj Kumar Maurya - Software Engineer",
  description:
    "Software Engineer focused on backend systems, distributed architectures, and full-stack development. SDE Intern at Razorpay, MNNIT Allahabad CSE graduate, 1800+ DSA problems.",
  keywords: [
    "Pankaj Kumar Maurya",
    "Pankaj Maurya",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Full Stack Developer",
    "Razorpay SDE Intern",
    "MNNIT Allahabad",
    "Apache Kafka",
    "Next.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Pankaj Kumar Maurya" }],
  creator: "Pankaj Kumar Maurya",
  openGraph: {
    title: "Pankaj Kumar Maurya - Software Engineer",
    description:
      "Software Engineer focused on backend systems, distributed architectures, and full-stack development.",
    type: "website",
    locale: "en_US",
    siteName: "Pankaj Kumar Maurya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Kumar Maurya - Software Engineer",
    description:
      "Software Engineer focused on backend systems, distributed architectures, and full-stack development.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#08090c] text-[#e2e8f0] font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {/* Subtle engineering grid background */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#13182415_1px,transparent_1px),linear-gradient(to_bottom,#13182415_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <Navbar />
        <CommandPalette />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
