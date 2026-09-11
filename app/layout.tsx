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
  verification: {
    google: "aMGpYJ-0fNIIDEKIzR0oyACaUjhkCx59yFoFXn1Ce60",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning><head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Google Tag Manager - Head Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TMLV2G52');
            `,
          }}
        />
      </head><body 
        className="min-h-full flex flex-col bg-[#0b0c10] text-[#c5c6c7]" 
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) - Body Script */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMLV2G52"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <NavbarOverlay />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body></html>
  );
}