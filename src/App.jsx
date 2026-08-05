import React from 'react';
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

export default function App() {
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
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}