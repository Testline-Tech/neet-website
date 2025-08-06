import React, { useRef, useState } from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { SignupForm } from './SignupForm';
import { DiscoverySection } from './DiscoverySection';
import { ProofSection } from './ProofSection';
import { TestimonialsSection } from './TestimonialsSection';
import { CtaSection } from './CtaSection';
import { FinalCta } from './FinalCta';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';

interface UserData {
  name: string;
  email: string;
  phone: string;
}

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [highlightForm, setHighlightForm] = useState(false);
  const signupFormRef = useRef<HTMLDivElement>(null);

  const handleSignupSubmit = (data: UserData) => {
    // Store user data in localStorage for cross-page access
    localStorage.setItem('userData', JSON.stringify(data));
    navigate('/vsl');
  };
  
  const scrollToSignupForm = () => {
    signupFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setHighlightForm(true);
    setTimeout(() => {
      setHighlightForm(false);
    }, 1500);
  };

  return (
    <div className="bg-white font-sans antialiased text-slate-800">
      <Header onCtaClick={scrollToSignupForm} />
      <main>
        <div className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-24">
          <HeroSection />
          <div 
            ref={signupFormRef} 
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start rounded-2xl ${highlightForm ? 'highlight-animation' : ''}`}
          >
            <SignupForm onSubmit={handleSignupSubmit} />
            <DiscoverySection />
          </div>
        </div>
        <ProofSection />
        <TestimonialsSection />
        <CtaSection onCtaClick={scrollToSignupForm} />
        <FinalCta onCtaClick={scrollToSignupForm} />
      </main>
      <Footer />
    </div>
  );
}; 