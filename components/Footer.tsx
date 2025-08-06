
import React from 'react';
import { LogoIcon } from './Icons';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-3">
                        <LogoIcon className="h-8 w-8" />
                        <span className="text-2xl font-bold text-white">Testline</span>
                    </div>
                    <p className="mt-4 max-w-md">
                        Empowering NEET aspirants to achieve their dreams through proven study techniques
                    </p>
                </div>
                <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p>&copy; 2024 Testline. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
