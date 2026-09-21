import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
