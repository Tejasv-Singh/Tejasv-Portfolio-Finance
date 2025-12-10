"use client";

import { TickerTape as TVTickerTape } from "react-ts-tradingview-widgets";

export function TickerTape() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-terminal-black h-[46px] overflow-hidden">
            <TVTickerTape
                symbols={[
                    { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
                    { proName: "FOREXCOM:NSXUSD", title: "US 100" },
                    { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
                    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
                    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
                    { proName: "NSE:NIFTY", title: "NIFTY 50" },
                    { proName: "BSE:SENSEX", title: "SENSEX" },
                ]}
                showSymbolLogo={true}
                isTransparent={false}
                displayMode="adaptive"
                colorTheme="dark"
                locale="en"
            />
        </div>
    );
}
