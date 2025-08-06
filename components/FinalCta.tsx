import React from 'react';
import CountdownTimer from './CountdownTimer';
import { ClockIcon } from './Icons';

export const FinalCta: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
    return (
        <section className="bg-gradient-to-b from-blue-600 to-indigo-800 text-white py-20 sm:py-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    You're Just 20 Minutes Away
                </h2>
                <p className="mt-4 text-2xl sm:text-3xl text-blue-200">
                    from learning what <span className="font-bold text-yellow-300">90% of NEET students never do.</span>
                </p>
                <div className="mt-10 max-w-md mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="flex items-center justify-center gap-2 text-yellow-300 font-semibold">
                        <ClockIcon className="w-5 h-5"/>
                        <span>Limited Time Offer Expires In:</span>
                    </div>
                    <CountdownTimer className="block text-6xl font-bold mt-2" />
                </div>
                <div className="mt-10">
                    <button 
                        onClick={onCtaClick}
                        className="bg-white text-indigo-700 font-bold py-5 px-12 rounded-lg shadow-2xl hover:scale-105 transition-transform text-xl">
                        Start Watching Now – It's Free
                    </button>
                </div>
            </div>
        </section>
    );
};
