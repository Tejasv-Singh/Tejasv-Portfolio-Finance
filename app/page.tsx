import { Navbar } from "@/components/Navbar";
import { TickerTape } from "@/components/TickerTape";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Research } from "@/components/Research";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

import { MarketCommand } from "@/components/MarketCommand";

export default function Home() {
  return (
    <main className="min-h-screen relative font-sans selection:bg-terminal-green selection:text-black">
      <Navbar />
      <TickerTape />

      <div className="pt-24 space-y-0">
        <Hero />
        <MarketCommand />
        <Projects />
        <Research />
        <Skills />
        <About />
        <Contact />
      </div>

      <footer className="py-8 text-center text-xs font-mono text-neutral-600 border-t border-neutral-900">
        <p>© {new Date().getFullYear()} TEJASV SINGH HADA. ALL RIGHTS RESERVED.</p>
        <p className="mt-2">
          SYSTEM_STATUS: <span className="text-terminal-green">ONLINE</span> | LATENCY: 12ms
        </p>
      </footer>
    </main>
  );
}
