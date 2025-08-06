
import React from 'react';
import { StarIcon, QuoteIcon } from './Icons';

const testimonials = [
    {
        name: 'Priya Sharma',
        rank: 'NEET AIR 247',
        avatar: 'P',
        avatarBg: 'bg-indigo-500',
        quote: "I was just memorizing theory but couldn't solve problems. These smart practice techniques helped me understand concepts deeply and my NEET score jumped from 350 to 580 in just 3 months!",
        result: '+230',
        resultLabel: 'Score Improvement',
        resultBg: 'bg-green-50 text-green-800'
    },
    {
        name: 'Rahul Gupta',
        rank: 'NEET AIR 156',
        avatar: 'R',
        avatarBg: 'bg-teal-500',
        quote: "I used to waste hours on phone and procrastinate. The anti-procrastination hacks changed everything! Now I study 6 hours daily without forcing myself and cracked NEET in my second attempt.",
        result: '6 Hrs',
        resultLabel: 'Daily Study (Effortless)',
        resultBg: 'bg-blue-50 text-blue-800'
    },
    {
        name: 'Ananya Patel',
        rank: 'NEET AIR 89',
        avatar: 'A',
        avatarBg: 'bg-pink-500',
        quote: "I was always behind in syllabus and stressed about revision. The time management system helped me complete entire syllabus 2 months before NEET with time for proper revision!",
        result: '2 months',
        resultLabel: 'Early Completion',
        resultBg: 'bg-orange-50 text-orange-800'
    },
];

const Rating: React.FC = () => (
    <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
    </div>
);

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
    <div className="flex flex-col h-full">
        <div className="bg-white p-8 rounded-t-2xl shadow-xl shadow-slate-200/70 flex-grow">
            <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${testimonial.avatarBg}`}>
                    {testimonial.avatar}
                </div>
                <div>
                    <p className="font-bold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.rank}</p>
                </div>
            </div>
            <Rating />
            <div className="relative mt-5">
                <QuoteIcon className="absolute -top-1 -left-2 w-8 h-6 text-slate-100" />
                <p className="text-slate-600 relative z-10 italic">
                    {testimonial.quote.split(/(\smy NEET score jumped from 350 to 580 in just 3 months!|\sNow I study 6 hours daily without forcing myself|\scomplete entire syllabus 2 months before NEET)/g).map((part, i) =>
                        i % 2 === 1 ? <span key={i} className="font-bold text-blue-600">{part}</span> : part
                    )}
                </p>
            </div>
        </div>
        <div className={`p-5 rounded-b-2xl text-center ${testimonial.resultBg} shadow-xl shadow-slate-200/70`}>
            <p className="text-3xl font-bold">{testimonial.result}</p>
            <p className="text-sm font-medium">{testimonial.resultLabel}</p>
        </div>
    </div>
);

export const TestimonialsSection: React.FC = () => {
    return (
        <section className="bg-slate-50 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Real NEET Success Stories</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        See how these strategies helped ordinary students achieve extraordinary NEET ranks
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};
