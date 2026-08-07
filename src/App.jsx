import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Faculty from './components/Faculty';
import AboutEvents from './components/AboutEvents';
import Services from './components/Services';
import ClinicalTraining from './components/ClinicalTraining';
import Gallery from './components/Gallery';
import FAQs from './components/FAQs';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Founder />
      <Faculty />
      <AboutEvents />
      <Services />
      <ClinicalTraining />
      <Gallery />
      <FAQs />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}