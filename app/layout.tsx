import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gab Guban - Web Developer",
  description:
    "Full-stack Web Developer specializing in React and Node.js. Passionate about building efficient and scalable web applications. Open to freelance opportunities.",
  authors: [{ name: "Gab Guban" }],
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "Python",
    "PHP",
    "Content Creator",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
