"use client";

import { MarketOverview, TechnicalAnalysis } from "react-ts-tradingview-widgets";
import { motion } from "framer-motion";

export function MarketCommand() {
    return (
        <section className="py-20 px-4 md:px-20 border-b border-terminal-green/20">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="relative">
                        <h2 className="text-3xl font-mono font-bold text-white tracking-widest">
                            MARKET_COMMAND
                        </h2>
                        <span className="absolute -top-1 -right-4 w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-terminal-green/50 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border border-neutral-800 bg-terminal-black p-2 rounded-sm shadow-2xl h-[420px]"
                    >
                        <MarketOverview
                            colorTheme="dark"
                            height={400}
                            width="100%"
                            tabs={[
                                {
                                    title: "Indices",
                                    originalTitle: "Indices",
                                    symbols: [
                                        { s: "NSE:NIFTY", d: "NIFTY 50" },
                                        { s: "BSE:SENSEX", d: "SENSEX" },
                                        { s: "NSE:BANKNIFTY", d: "BANK NIFTY" },
                                        { s: "NSE:NIFTYIT", d: "NIFTY IT" },
                                    ],
                                },
                                {
                                    title: "Crypto",
                                    originalTitle: "Crypto",
                                    symbols: [
                                        { s: "BINANCE:BTCUSDT", d: "BTC/USDT" },
                                        { s: "BINANCE:ETHUSDT", d: "ETH/USDT" },
                                    ],
                                },
                            ]}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border border-neutral-800 bg-terminal-black p-2 rounded-sm shadow-2xl h-[420px]"
                    >
                        <TechnicalAnalysis
                            symbol="NSE:NIFTY"
                            colorTheme="dark"
                            width="100%"
                            height={400}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
