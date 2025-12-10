"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
    { symbol: "BTC", value: "98,432.10", change: "+2.4%", up: true },
    { symbol: "ETH", value: "3,892.45", change: "+1.2%", up: true },
    { symbol: "SPX", value: "5,980.20", change: "+0.5%", up: true },
    { symbol: "PYTHON", value: "v3.12", change: "OPTIMIZED", up: true },
    { symbol: "C++", value: "STD:23", change: "COMPILE_OK", up: true },
    { symbol: "LATENCY", value: "12ms", change: "-4.2%", up: true },
    { symbol: "MATLAB", value: "R2024b", change: "ACTIVE", up: true },
    { symbol: "STOCHASTICS", value: "σ=0.4", change: "VOLATILE", up: false },
];

export function TickerTape() {
    return (
        <div className="fixed top-[64px] left-0 right-0 z-40 bg-terminal-black border-y border-neutral-800 py-1 overflow-hidden pointer-events-none">
            <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-neutral-500 font-bold">{item.symbol}</span>
                        <span className="text-white">{item.value}</span>
                        <span
                            className={
                                item.up ? "text-terminal-green" : "text-terminal-blue" // Using blue for neutral/down in this aesthetic or sticking to green vs blue
                            }
                        >
                            {item.up ? "▲" : "▼"} {item.change}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
