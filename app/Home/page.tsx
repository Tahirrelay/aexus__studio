import type { Metadata } from "next";
import NavbarOverlay from "@/components/NavbarOverlay";

export const metadata: Metadata = {
  title: "Aexus Studios",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function NavbarOverlaypage() {
  return (
    <main className="min-h-screen bg-[#05060a] text-white selection:bg-[var(--color-aexus-orange)] selection:text-black">
      <NavbarOverlay />
    </main>
  );
}