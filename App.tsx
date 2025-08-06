import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { VslPage } from './components/VslPage';
import CheckoutPage from './components/CheckoutPage';
import ThankYouPage from './components/ThankYouPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vsl" element={<VslPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;