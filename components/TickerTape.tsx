"use client";

import { TickerTape as TVTickerTape } from "react-ts-tradingview-widgets";

export function TickerTape() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-terminal-black">
            <TVTickerTape
                symbols={[
                    { proName: "BSE:SENSEX", title: "SENSEX" },
                    { proName: "NSE:NIFTY", title: "NIFTY 50" },
                    { proName: "NSE:BANKNIFTY", title: "BANK NIFTY" },
                    { proName: "NSE:RELIANCE", title: "RELIANCE" },
                    { proName: "NSE:INFY", title: "INFOSYS" },
                    { proName: "NSE:TATASTEEL", title: "TATA STEEL" },
                ]}
                displayMode="adaptive"
                colorTheme="dark"
                isTransparent={false} // Ensure it has background to cover hero overlap if any
            />
        </div>
    );
}
