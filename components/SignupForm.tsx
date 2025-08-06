import React, { useState } from 'react';
import { FilmIcon, UserCircleIcon, EnvelopeIcon, PhoneIcon, LockClosedIcon, CheckIcon } from './Icons';

interface SignupFormProps {
  onSubmit: (data: { name: string; email: string; phone: string }) => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        onSubmit({ name, email, phone: `${countryCode}${phone}` });
    };

    const isFormValid = name.trim() !== '' && email.trim() !== '' && phone.trim() !== '';

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-slate-200">
            <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full text-sm">
                    <span className="animate-pulse h-2 w-2 bg-blue-500 rounded-full"></span>
                    INSTANT ACCESS
                </div>
            </div>

            <div className="flex items-center gap-4 mb-2">
                <FilmIcon className="w-10 h-10 text-slate-800" />
                <h2 className="text-2xl font-bold text-slate-900">Watch Free Masterclass Now</h2>
            </div>
            <p className="text-slate-600 mb-8">
                Join <span className="font-bold text-green-600">50,000+ students</span> who've already discovered these game-changing strategies
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                        <UserCircleIcon className="w-5 h-5 text-slate-400" /> Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                        <EnvelopeIcon className="w-5 h-5 text-slate-400" /> Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                        <PhoneIcon className="w-5 h-5 text-slate-400" /> Phone Number
                    </label>
                    <div className="flex">
                        <select 
                            id="country-code" 
                            value={countryCode} 
                            onChange={e => setCountryCode(e.target.value)}
                            className="bg-slate-50 border border-r-0 border-slate-200 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:z-10 focus:border-blue-500 outline-none transition px-3"
                        >
                            <option value="+91">IND +91</option>
                            <option value="+1">USA +1</option>
                            <option value="+44">UK +44</option>
                            <option value="+61">AUS +61</option>
                        </select>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="98765 43210"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:z-10 focus:border-blue-500 outline-none transition"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-bold py-4 px-4 rounded-lg shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <FilmIcon className="w-6 h-6" />
                    Watch Free Masterclass Now &rarr;
                </button>
            </form>
            <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                    <LockClosedIcon className="w-4 h-4 text-green-600" />
                    <span>Your information is 100% secure and will never be shared</span>
                </div>
                <div className="mt-4 flex justify-center flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><CheckIcon className="w-4 h-4 text-green-500" /> Instant Access</span>
                    <span className="flex items-center gap-1"><CheckIcon className="w-4 h-4 text-green-500" /> 100% Free</span>
                    <span className="flex items-center gap-1"><CheckIcon className="w-4 h-4 text-green-500" /> 20 Minutes Only</span>
                </div>
            </div>
        </div>
    );
};