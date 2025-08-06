import React from 'react';
import { FilmIcon } from './Icons';

export const CtaSection: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
    return (
        <section className="py-20 sm:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-10 sm:p-12 text-center text-white shadow-2xl shadow-blue-200">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Transform Your NEET Preparation Like Them?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
                        Join 50,000+ students who've already discovered these game-changing techniques
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={onCtaClick}
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
                             <FilmIcon className="w-6 h-6" />
                            Watch Free Masterclass Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
