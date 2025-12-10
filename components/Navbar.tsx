"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const navItems = [
        { name: "Projects", href: "#projects" },
        { name: "Research", href: "#research" },
        { name: "Skills", href: "#skills" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass"
        >
            <Link href="/" className="flex items-center gap-2 group">
                <div className="p-1 border border-terminal-green rounded-sm group-hover:bg-terminal-green/10 transition-colors">
                    <Terminal className="w-5 h-5 text-terminal-green" />
                </div>
                <span className="font-mono text-sm font-bold tracking-tighter text-white">
                    TSH<span className="text-terminal-green">.TERMINAL</span>
                </span>
            </Link>

            <ul className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            className="font-mono text-xs text-neutral-400 hover:text-terminal-green transition-colors uppercase tracking-widest"
                        >
                            {`[${item.name}]`}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="md:hidden">
                {/* Mobile Menu Placeholder - can be expanded */}
                <span className="font-mono text-xs text-terminal-green animate-pulse">
                    ● ONLINE
                </span>
            </div>
        </motion.nav>
    );
}
