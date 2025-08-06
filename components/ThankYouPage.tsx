import React from 'react';
import { LogoIcon, CheckCircleIcon, AppleIcon, GooglePlayIcon, WhatsAppIcon, EnvelopeIcon } from './Icons';
import { Footer } from './Footer';

const ThankYouHeader: React.FC = () => (
    <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
                 <LogoIcon className="h-8 w-8" />
                 <span className="text-2xl font-bold text-slate-800">Testline</span>
            </div>
        </div>
    </header>
);

const ThankYouPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen antialiased">
            <ThankYouHeader />
            <main className="py-12 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl shadow-slate-200/80 text-center">
                        <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
                        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-slate-900">Thank You for Enrolling!</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                            Your journey to cracking NEET has just begun. We're thrilled to have you with us!
                        </p>
                        
                        <div className="mt-10 pt-8 border-t border-slate-200 text-left space-y-8">
                            {/* 1. Email Section */}
                            <div className="bg-slate-50/70 border border-slate-200 rounded-lg p-6 flex items-center gap-6">
                                <EnvelopeIcon className="w-12 h-12 text-blue-500 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">You will receive an email</h3>
                                    <p className="text-slate-600 mt-1">We've sent your login credentials and next steps to your registered email. Please check your inbox (and spam folder).</p>
                                </div>
                            </div>
                            
                            {/* 2. Download App Section */}
                            <div className="bg-slate-50/70 border border-slate-200 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-slate-800 text-center">Download Our App</h3>
                                <p className="text-slate-600 mt-1 mb-6 text-center">Get access to all your study materials on the go.</p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                     <a href="#" className="flex items-center justify-center gap-3 bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                                        <AppleIcon className="w-6 h-6" />
                                        <div>
                                            <span className="block text-xs">Download on the</span>
                                            <span className="text-lg leading-tight">App Store</span>
                                        </div>
                                    </a>
                                     <a href="#" className="flex items-center justify-center gap-3 bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                                        <GooglePlayIcon className="w-6 h-6" />
                                        <div>
                                            <span className="block text-xs">GET IT ON</span>
                                            <span className="text-lg leading-tight">Google Play</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            
                             {/* 3. WhatsApp Community Section */}
                            <div className="bg-slate-50/70 border border-slate-200 rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6">
                                <WhatsAppIcon className="w-12 h-12 text-green-500 flex-shrink-0" />
                                <div className="flex-grow text-center sm:text-left">
                                    <h3 className="text-lg font-bold text-slate-800">Join our WhatsApp Community</h3>
                                    <p className="text-slate-600 mt-1">Connect with fellow aspirants, clear doubts, and get important updates.</p>
                                </div>
                                <div className="flex-shrink-0 w-full sm:w-auto">
                                    <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                                        <WhatsAppIcon className="w-5 h-5" />
                                        Join Now
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ThankYouPage;