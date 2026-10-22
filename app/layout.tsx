import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile, site } from "@/src/data";
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
  title: site.title,
  description: site.description,
  authors: [{ name: profile.name }],
  keywords: site.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground antialiased selection:bg-foreground selection:text-background">
        {children}
      </body>
    </html>
  );
}
