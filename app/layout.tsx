import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarOverlay from "@/components/NavbarOverlay";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aexus Studios | Digital Experience & 3D Studio",
  description: "We transform concepts into captivating digital experiences, specializing in Web Product Configurators and 3D Visualizations.",
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
      <body 
        className="min-h-full flex flex-col bg-[#0b0c10] text-[#c5c6c7]" 
        suppressHydrationWarning
      >
        <NavbarOverlay />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}