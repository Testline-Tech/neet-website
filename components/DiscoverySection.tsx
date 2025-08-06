
import React from 'react';
import { BrainIcon, SmartphoneIcon, CalendarDaysIcon, LightningIcon } from './Icons';

const discoveryItems = [
    {
        icon: BrainIcon,
        bgColor: 'bg-blue-500',
        title: 'Why Theory Alone Fails',
        description: 'Just reading books isn’t enough—learn how smart practice builds NEET-level problem-solving skills.',
        tag: 'Master concepts that stick',
    },
    {
        icon: SmartphoneIcon,
        bgColor: 'bg-purple-500',
        title: 'How to Beat Procrastination (For Real)',
        description: 'Get hacks to study when you don’t feel like it. Learn how to fight phone distraction + laziness.',
        tag: 'Study consistently without motivation',
    },
    {
        icon: CalendarDaysIcon,
        bgColor: 'bg-green-500',
        title: 'Time Management That Works',
        description: 'Plan better without burnout. Never fall behind syllabus or revision.',
        tag: 'Stay ahead without stress',
    },
];

const DiscoveryItem: React.FC<{ item: typeof discoveryItems[0] }> = ({ item }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex gap-5 items-start">
            <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${item.bgColor}`}>
                <item.icon className="w-8 h-8 text-white" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
                 <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 font-semibold px-3 py-1 rounded-full text-sm">
                    <LightningIcon className="w-4 h-4 text-green-500"/>
                    {item.tag}
                </div>
            </div>
        </div>
    </div>
);


export const DiscoverySection: React.FC = () => {
    return (
        <div className="lg:mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">What You'll Discover Inside:</h2>
            <div className="space-y-6">
                {discoveryItems.map((item, index) => (
                    <DiscoveryItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};
