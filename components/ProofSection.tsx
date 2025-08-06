
import React from 'react';
import { UserGroupIcon, ChartBarIcon, ClockIcon, StarIcon } from './Icons';

const stats = [
    { value: '50,000+', label: 'Students Saw the Difference', icon: UserGroupIcon, color: 'bg-blue-500' },
    { value: '98%', label: 'Got Visible Rank Improvement', icon: ChartBarIcon, color: 'bg-green-500' },
    { value: '85%', label: 'Improved Within 4 Weeks', icon: ClockIcon, color: 'bg-purple-500' },
    { value: '96%', label: 'Student Satisfaction', icon: StarIcon, color: 'bg-orange-400' },
];

const StatCard: React.FC<{ stat: typeof stats[0] }> = ({ stat }) => (
    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center flex flex-col items-center justify-center transform hover:scale-105 hover:bg-white/10 transition-all duration-300">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg ${stat.color}`}>
            <stat.icon className="w-9 h-9 text-white" />
        </div>
        <p className="text-5xl font-extrabold text-white">{stat.value}</p>
        <p className="mt-2 text-slate-300">{stat.label}</p>
    </div>
);

export const ProofSection: React.FC = () => {
    return (
        <section className="bg-slate-900 bg-gradient-to-br from-slate-900 to-indigo-900 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Proof That the Right Strategy Changes Everything</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
                    Here's what happened when students stopped relying on motivation and started using the right methods.
                </p>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};
