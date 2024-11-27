import React from "react";
import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
    const comparisonPoints = [
        "Point no one",
        "Point no two this",
        "Point no three this",
        "Point no four this",   
        "Point no five this",
    ];

    return (
        <div className="min-h-screen px-4 sm:px-8 md:px-20 relative">
            <h2 className="mb-8 md:mb-12 pl-4 md:pl-12 text-3xl md:text-5xl font-bold text-white tracking-tight">
                Why <span className="text-[#ffd700] font-mono">MoonEX</span> ?
            </h2>
            <div className="relative w-full max-w-6xl rounded-xl bg-[#0D1B28]/50 backdrop-blur-md p-4 md:p-8 shadow-lg mx-auto">
                <div className="absolute h-48 w-48 top-64 left-52 blur-[220px] rotate-180 bg-[#EDD955] rounded-full"></div>
                
                {/* Desktop version */}
                <div className="hidden md:grid grid-cols-3 text-center gap-y-4">
                    <div className="text-xl font-semibold text-[#FFD700] flex items-center justify-center">
                        <img src="./Comparison.svg" alt="Comparison" className="w-full max-w-[200px] h-auto" />
                    </div>
                    <div className="text-xl font-semibold text-[#FFD700] flex items-center justify-center">
                        <img src="./compare-moonex.svg" alt="MoonEX" className="w-full max-w-[150px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="./uniswap.png" alt="Uniswap" className="w-full max-w-[150px] h-auto" />
                    </div>

                    {comparisonPoints.map((point, index) => (
                        <React.Fragment key={`desktop-point-${index}`}>
                            <div className="border-t border-[#1a2c3f] py-6 text-left text-gray-400 font-light text-base px-2">
                                {index + 1}. {point}
                            </div>
                            <div className="border-t border-[#1a2c3f] py-6">
                                <Check className="h-6 w-6 text-green-500 mx-auto" />
                            </div>
                            <div className="border-t border-[#1a2c3f] py-6">
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile version */}
                <div className="md:hidden">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="col-span-1"></div>
                        <div className="col-span-1 flex justify-center items-center">
                            <img src="./compare-moonex.svg" alt="MoonEX" className="w-full max-w-[100px] h-auto" />
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                            <img src="./uniswap.png" alt="Uniswap" className="w-full max-w-[100px] h-auto" />
                        </div>
                    </div>
                    {comparisonPoints.map((point, index) => (
                        <div key={`mobile-point-${index}`} className="border-t border-[#1a2c3f] py-4">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-1 text-left text-gray-400 font-light text-sm pr-2">
                                    {index + 1}. {point}
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <Check className="h-5 w-5 text-green-500" />
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <X className="h-5 w-5 text-red-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

