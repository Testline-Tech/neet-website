import React, { useState, useEffect } from 'react';
import { LogoIcon, CheckIcon, UserCircleIcon, EnvelopeIcon, ShieldCheckIcon, LockClosedIcon, StarIcon, PhoneIcon } from './Icons';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';

interface UserData {
  name: string;
  email: string;
  phone: string;
}

const CheckoutHeader: React.FC = () => (
    <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
                 <LogoIcon className="h-8 w-8" />
                 <span className="text-2xl font-bold text-slate-800">Testline</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-semibold">
                <ShieldCheckIcon className="w-6 h-6 text-green-600"/>
                <span>Secure SSL Checkout</span>
            </div>
        </div>
    </header>
);

const CheckoutPage: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        // Get user data from localStorage
        const userDataString = localStorage.getItem('userData');
        if (userDataString) {
            const userData: UserData = JSON.parse(userDataString);
            setName(userData.name);
            setEmail(userData.email);
            
            const supportedCodes = ['+91', '+1', '+44', '+61'];
            let foundCode = false;

            for (const code of supportedCodes) {
                if (userData.phone.startsWith(code)) {
                    setCountryCode(code);
                    setPhone(userData.phone.substring(code.length));
                    foundCode = true;
                    break;
                }
            }

            if (!foundCode) {
                if (userData.phone.startsWith('+')) {
                    const match = userData.phone.match(/^(\+\d{1,3})(.*)/);
                    if (match) {
                        setCountryCode(match[1]);
                        setPhone(match[2]);
                    } else {
                        setPhone(userData.phone);
                    }
                } else {
                    setPhone(userData.phone);
                }
            }
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the payment processing
        navigate('/thankyou');
    };

    return (
        <div className="bg-slate-50 min-h-screen antialiased">
            <CheckoutHeader />
            <main className="py-12 sm:py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-200/80">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8 text-center">Complete Your Enrollment</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Step 1: User Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-4">1. Your Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="checkout-name" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                                            <UserCircleIcon className="w-5 h-5 text-slate-400" /> Full Name
                                        </label>
                                        <input type="text" id="checkout-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" required />
                                    </div>
                                    <div>
                                        <label htmlFor="checkout-email" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                                            <EnvelopeIcon className="w-5 h-5 text-slate-400" /> Email Address
                                        </label>
                                        <input type="email" id="checkout-email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" required />
                                    </div>
                                     <div>
                                        <label htmlFor="checkout-phone" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                                            <PhoneIcon className="w-5 h-5 text-slate-400" /> Phone Number
                                        </label>
                                        <div className="flex">
                                            <select 
                                                value={countryCode} 
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="px-3 py-3 bg-slate-50 border border-r-0 border-slate-200 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            >
                                                <option value="+91">🇮🇳 +91</option>
                                                <option value="+1">🇺🇸 +1</option>
                                                <option value="+44">🇬🇧 +44</option>
                                                <option value="+61">🇦🇺 +61</option>
                                            </select>
                                            <input 
                                                type="tel" 
                                                id="checkout-phone" 
                                                value={phone} 
                                                onChange={(e) => setPhone(e.target.value)} 
                                                placeholder="Enter your phone number" 
                                                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Payment Method */}
                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-4">2. Payment Method</h3>
                                <div className="space-y-4">
                                    <div className="border border-slate-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">VISA</span>
                                                </div>
                                                <span className="font-medium text-slate-700">Credit/Debit Card</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <LockClosedIcon className="w-5 h-5 text-green-600" />
                                                <span className="text-sm text-slate-500">Secure</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="card-number" className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                                            <input type="text" id="card-number" placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" required />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="expiry" className="block text-sm font-medium text-slate-700 mb-1">Expiry Date</label>
                                                <input type="text" id="expiry" placeholder="MM/YY" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" required />
                                            </div>
                                            <div>
                                                <label htmlFor="cvv" className="block text-sm font-medium text-slate-700 mb-1">CVV</label>
                                                <input type="text" id="cvv" placeholder="123" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Order Summary */}
                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-4">3. Order Summary</h3>
                                <div className="bg-slate-50 rounded-lg p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-slate-800">NEET Masterclass Complete Program</h4>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-slate-800">₹999</div>
                                            <div className="text-sm text-slate-500 line-through">₹4,999</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-sm text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-green-500" />
                                            <span>10,000+ Question Bank</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-green-500" />
                                            <span>All India Mock Tests</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-green-500" />
                                            <span>WhatsApp Support</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-green-500" />
                                            <span>Performance Tracking</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-200">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-slate-800">Total</span>
                                            <span className="text-2xl font-bold text-green-600">₹999</span>
                                        </div>
                                        <div className="text-sm text-green-600 font-medium">You save ₹4,000 (80% off!)</div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Notice */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <ShieldCheckIcon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-800 mb-1">Secure Payment</h4>
                                        <p className="text-sm text-blue-700">Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-lg"
                            >
                                Complete Payment & Enroll Now
                            </button>

                            {/* Trust Indicators */}
                            <div className="text-center space-y-3">
                                <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <span>4.9/5 Rating</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <UserCircleIcon className="w-4 h-4 text-blue-500" />
                                        <span>50k+ Students</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                                        <span>30-Day Guarantee</span>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400">By completing this purchase, you agree to our Terms of Service and Privacy Policy.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage;