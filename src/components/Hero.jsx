import React, { useState, useEffect } from 'react';
import heroBanner from '../assets/images/kiou banner.jpg';
import admissionUltrasound from '../assets/images/admission open ultrasound.jpg';
import dopplerImg from '../assets/images/body color doppler 3 months.jpg';
import admissionHeart from '../assets/images/admission open heart.jpg';
import physioImg from '../assets/images/physio 2 year.jpg';

export default function Hero() {
  const slides = [
    {
      badge: "Professional training since 2002",
      title: "Start Your Healthcare Career with KIOU Today",
      desc: "Join one of Pakistan's trusted institutes for diagnostic imaging and allied health sciences. Gain practical skills through expert-led training and hands-on clinical experience.",
      image: heroBanner
    },
    {
      badge: "Diploma in Ultrasound & Sonography",
      title: "Master Advanced Ultrasound Diagnostic Techniques",
      desc: "Learn comprehensive ultrasound scanning, obstetrics, gynecology, and radiology from expert sonologists with live clinical practice.",
      image: admissionUltrasound
    },
    {
      badge: "Vascular Doppler Diploma",
      title: "Specialized Vascular Doppler Training Program",
      desc: "Gain deep technical expertise in assessing blood flow dynamics, peripheral vascular systems, and color doppler imaging applications.",
      image: dopplerImg
    },
    {
      badge: "Echocardiography (ECHO)",
      title: "Advance Your Skills in Cardiac Imaging & ECHO",
      desc: "Comprehensive practical training focusing on structural heart disease evaluation, 2D echo, and color flow mapping.",
      image: admissionHeart
    },
    {
      badge: "Physiotherapy & Allied Health",
      title: "Build a Rewarding Future in Physical Therapy",
      desc: "Professional training programs designed to equip students with rehabilitation techniques, patient care, and clinical therapy skills.",
      image: physioImg
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="py-5 bg-white text-dark overflow-hidden">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div style={{ transition: 'all 0.5s ease-in-out' }}>
              <span className="badge bg-primary-subtle text-primary fw-bold px-3 py-2 rounded-pill mb-3">
                {slides[currentSlide].badge}
              </span>
              
              <h1 className="display-5 fw-bold text-dark mb-3 lh-sm">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-secondary fs-6 lh-lg mb-4">
                {slides[currentSlide].desc}
              </p>
              
              <div className="text-muted small mb-4 d-flex align-items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Affiliated with Sindh Board of Technical Education (SBTE) 
              </div>
              <div className="d-flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-2 fw-semibold shadow-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                  Register Now
                </a>
                <a href="https://wa.me/923178117227" target="_blank" rel="noopener noreferrer" className="btn btn-success d-inline-flex align-items-center gap-2 px-4 py-2 fw-semibold shadow-sm" style={{ backgroundColor: '#198754', borderColor: '#198754' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
              <div className="d-flex gap-2 mt-4">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`rounded-pill border-0 transition-all ${currentSlide === idx ? 'bg-primary' : 'bg-secondary bg-opacity-25'}`}
                    style={{ width: currentSlide === idx ? '30px' : '10px', height: '8px', transition: 'width 0.3s ease' }}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative p-2 bg-white rounded-4 shadow-sm border">
              <div className="overflow-hidden rounded-3 d-flex align-items-center justify-content-center bg-light" style={{ height: '420px' }}>
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-100 h-100 object-fit-contain p-2"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}