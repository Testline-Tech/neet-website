
import React from 'react';
import { UserGroupIcon, ChartBarIcon, ClockIcon } from './Icons';

export const HeroSection: React.FC = () => {
    return (
        <div className="text-center px-4 pt-16 sm:pt-24">
            <div className="inline-block bg-gradient-to-r from-teal-400 to-green-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                <span className="mr-2">💎</span> FREE NEET MASTERCLASS - WORTH ₹2,999
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                3 Easy & Proven Tricks <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Ordinary Students</span> Use <br />
                to Crack NEET Like Pros
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg lg:text-xl text-red-600 font-bold">
                90% of students fail because they never learn these. Will you?
            </p>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-12">
                <div className="flex items-center gap-3 text-slate-600 font-semibold">
                    <UserGroupIcon className="w-6 h-6 text-green-500" />
                    <span>50k+ students saw the difference</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 font-semibold">
                    <ChartBarIcon className="w-6 h-6 text-blue-500" />
                    <span>98% got visible rank improvement</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 font-semibold">
                    <ClockIcon className="w-6 h-6 text-purple-500" />
                    <span>85% improved within 4 weeks</span>
                </div>
            </div>
        </div>
    );
};
