import React from 'react';
import CountdownTimer from './CountdownTimer';
import { ClockIcon, LightningIcon, LogoIcon } from './Icons';

export const Header: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-orange-400 text-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-semibold">
                    <div className="flex items-center gap-2">
                        <ClockIcon className="w-5 h-5" />
                        <span>FREE Masterclass Ends In</span>
                        <CountdownTimer className="bg-white/20 px-2 py-0.5 rounded" />
                    </div>
                    <div className="hidden md:block">
                        <span>Only 47 Spots Left!</span>
                    </div>
                    <div className="hidden lg:block">
                        <span>July 27, Team Testline</span>
                    </div>
                </div>
            </div>
            <div className="bg-white/80 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
                    <div className="flex items-center gap-2">
                         <LogoIcon className="h-8 w-8" />
                         <span className="text-2xl font-bold text-slate-800">Testline</span>
                    </div>
                    <button 
                        onClick={onCtaClick}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:scale-105 transition-transform">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};
