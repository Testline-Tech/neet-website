
import React, { useState, useEffect } from 'react';
import { LogoIcon, CheckIcon, EyeIcon } from './Icons';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';

const VslHeader: React.FC = () => (
    <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
            <div className="flex items-center gap-2">
                 <LogoIcon className="h-8 w-8" />
                 <span className="text-2xl font-bold text-slate-800">Testline</span>
            </div>
            <p className="font-semibold text-red-600 animate-pulse hidden sm:block">
                ⚠️ Limited Time Training
            </p>
        </div>
    </header>
);

const OfferSection: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => (
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mt-16 animate-fade-in-up">
        <h3 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            🎉 Your Exclusive One-Time Offer Is Unlocked!
        </h3>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
            Since you committed to learning, we want to give you a special discount on our full program.
        </p>
        <div className="mt-8 border-t border-b border-slate-200 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
                <h4 className="font-bold text-xl text-slate-800">Here's Everything You Get:</h4>
                <ul className="mt-4 space-y-3 text-slate-600">
                    <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" /> <span><b>Weekly Study Plans</b> with Major Tests</span></li>
                    <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" /> <span><b>10,000+ Question Bank</b> with detailed solutions</span></li>
                    <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" /> <span><b>10 Years Topic-wise PYQs</b> &amp; Subject-wise Tests</span></li>
                    <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" /> <span><b>All India Mock Tests</b> with Performance Analysis</span></li>
                    <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>Unlimited Custom Tests &amp; Daily Practice Problems (DPP)</span></li>
                    <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" /> <span><b>Mistake Improvement Plan</b> &amp; Performance Tracking</span></li>
                    <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>Memory Flashcards, Formula Sheets &amp; Short Notes</span></li>
                    <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" /> <span><b>WhatsApp Support</b> &amp; Study Group Access</span></li>
                </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 text-center">
                <p className="text-sm font-semibold text-blue-800">Special One-Time Price</p>
                <div className="my-2 flex justify-center items-baseline gap-3">
                    <span className="text-5xl font-extrabold text-slate-800">₹999</span>
                    <span className="text-xl text-slate-400 line-through">₹4,999</span>
                </div>
                <p className="bg-yellow-300 text-yellow-900 font-bold px-4 py-1 rounded-full inline-block">You Save 80%!</p>
                <button
                    onClick={onCtaClick}
                    className="mt-5 w-full bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold py-3.5 px-4 rounded-lg shadow-lg hover:scale-105 transition-transform text-lg"
                >
                    Enroll Now &amp; Secure My Spot
                </button>
            </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-6">
            This offer is only available on this page. If you leave, it's gone forever.
        </p>
    </div>
);

export const VslPage: React.FC = () => {
    const navigate = useNavigate();
    const [showOffer, setShowOffer] = useState(false);
    const [viewers, setViewers] = useState(0);

    const handleCtaClick = () => {
        navigate('/checkout');
    };

    useEffect(() => {
        // For demonstration, show offer after 10 seconds instead of 5 minutes
        const offerTimer = setTimeout(() => {
            setShowOffer(true);
        }, 10 * 1000); // 5 * 60 * 1000 for 5 minutes

        // Set initial viewer count
        setViewers(Math.floor(Math.random() * (2000 - 800 + 1)) + 800);

        // Set interval to fluctuate viewer count
        const viewersInterval = setInterval(() => {
            setViewers(prev => {
                const change = Math.floor(Math.random() * 11) - 5; // -5 to +5
                const newViewers = prev + change;
                return Math.max(800, Math.min(2000, newViewers)); // Keep within 800-2000 range
            });
        }, 3500); // Update every 3.5 seconds

        return () => {
            clearTimeout(offerTimer);
            clearInterval(viewersInterval);
        };
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen">
            <VslHeader />
            <main className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 text-center leading-tight">
                        <span className="text-blue-600">WAIT!</span> Before You Go... Watch This Important Free Training
                    </h1>
                    <p className="mt-4 text-center text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover the 3 secrets that took students from failing to cracking NEET in record time.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <div className="inline-flex items-center gap-3 bg-red-100 text-red-800 font-semibold px-4 py-2 rounded-full border-2 border-white shadow-md animate-pulse">
                            <EyeIcon className="w-6 h-6" />
                            <span><span className="font-bold">{viewers}</span> people are watching this training right now</span>
                        </div>
                    </div>
                    
                    <div className="mt-8 shadow-2xl rounded-lg overflow-hidden bg-black">
                        <div className="relative" style={{ paddingTop: '56.25%' }}>
                            <iframe 
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=0" 
                                title="NEET Masterclass" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                    
                    <div className="mt-10 text-center">
                        <button 
                            onClick={handleCtaClick}
                            className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:scale-105 transition-transform text-xl animate-pulse">
                            Yes! I Want To Secure My Spot!
                        </button>
                    </div>

                    {showOffer && <OfferSection onCtaClick={handleCtaClick} />}
                </div>
            </main>
            <Footer />
        </div>
    );
};