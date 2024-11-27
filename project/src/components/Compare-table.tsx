    import React from "react";
    import { Check, X } from "lucide-react";

    export default function ComparisonTable() {
        const comparisonPoints = [
            "Point no one",
            "Point no two this",
            "Point no three this",
            "Point no four this",
            "Point no five this",
        ];

        return (
            <div className="min-h-screen px-20 relative">
                <h2 className="mb-12 pl-12 text-5xl font-bold text-white tracking-tight">
                    Why <span className="text-[#ffd700] font-mono">MoonEX</span> ?
                </h2>
                {/* Transparent Card */}
                <div className="relative w-full max-w-6xl rounded-xl bg-[#0D1B28]/50 backdrop-blur-md p-8 shadow-lg">
                    {/* Lighting effects */}
                    <div className="absolute h-48 w-48 top-64 left-52 blur-[220px] rotate-180 bg-[#EDD955] rounded-full"></div>
                    {/* Table */}
                    <div className="grid grid-cols-3 text-center gap-y-4">
                        {/* Header Row */}
                        <div className="text-xl font-semibold text-[#FFD700] flex items-center justify-center">
                            <img src="./Comparison.svg" alt="Comparison" />
                        </div>
                        <div className="text-xl font-semibold text-[#FFD700] flex items-center justify-center">
                            <img src="./compare-moonex.svg" alt="MoonEX" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="./uniswap.png" alt="Uniswap" />
                        </div>

                        {/* Comparison Points */}
                        {comparisonPoints.map((point, index) => (
                            <React.Fragment key={`point-${index}`}>
                                {/* Point Description */}
                                <div className="border-t border-[#1a2c3f] py-6 text-left text-gray-400 font-light">
                                    {index + 1}. {point}
                                </div>
                                {/* MoonEX Column */}
                                <div className="border-t border-[#1a2c3f] py-6">
                                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                                </div>
                                {/* Uniswap Column */}
                                <div className="border-t border-[#1a2c3f] py-6">
                                    <X className="h-6 w-6 text-red-500 mx-auto" />
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
