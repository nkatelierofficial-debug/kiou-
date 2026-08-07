import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/images/1st img.jpg';
import img2 from '../assets/images/2nd img.jpg';
import img3 from '../assets/images/3rd img.jpg';
// import img4 from '../assets/images/4th img.jpg';
import img5 from '../assets/images/5th img.jpg';
import img6 from '../assets/images/6th img.jpg';
import img7 from '../assets/images/7th img.jpg';
import img8 from '../assets/images/8th img.jpg';
import img9 from '../assets/images/9th img.jpg';

export default function Hero() {
  const slides = [
    {
      badge: "Professional training since 2002",
      title: "Start Your Healthcare Career with KIOU Today",
      desc: "Join one of Pakistan's trusted institutes for diagnostic imaging and allied health sciences. Gain practical skills through expert-led training and hands-on clinical experience.",
      image: img1
    },
    {
      badge: "2-Years Diploma in Ultrasonography",
      title: "2-Years Diploma in Ultrasonography",
      desc: "Comprehensive curriculum covering advanced ultrasonography, abdominal protocols, obstetrics, pelvic pathologies, color doppler applications, and practical clinical training.",
      image: img2
    },
    {
      badge: "One Year Diploma in Ultrasonography",
      title: "One Year Diploma in Ultrasonography",
      desc: "Learn introduction to ultrasonography, physics, abdominal protocols, female pelvic anatomy, early pregnancy, 1st, 2nd & 3rd trimester biometry, and clinical report writing.",
      image: img3
    },
    // {
    //   badge: "",
    //   title: "",
    //   desc: "",
    //   image: 
    // },
    {
      badge: "Two Year Diploma in Echocardiography",
      title: "Two Year Diploma in Echocardiography",
      desc: "Master cardiac imaging, transthoracic echocardiographic views, color flow mapping, valvular normal function, congenital heart diseases, and advanced cardiac evaluations.",
      image: img5
    },
    {
      badge: "2-Years Diploma in Aesthetic Skin Care",
      title: "2-Years Diploma in Aesthetic Skin Care",
      desc: "Comprehensive practical training in modern dermatology, facial cleansing, chemical peels, microdermabrasion, laser technologies, Botox, HIFU, and PRP therapy.",
      image: img6
    },
    {
      badge: "Aesthetic Skin Care Training",
      title: "Advanced Aesthetic Skin Care & Cosmetology",
      desc: "Equip yourself with hands-on techniques in advanced skin analysis, acne management, micro-needling, laser applications, and aesthetic practice management.",
      image: img7
    },
    {
      badge: "Associate Degree in Physiotherapy",
      title: "2-Year Professional Physiotherapy Program",
      desc: "Transform your passion for healing into a professional career with intensive clinical practice, musculoskeletal anatomy, spinal rehabilitation, and electrotherapy modalities.",
      image: img8
    },
    {
      badge: "Specialized 3-Months Body Color Doppler",
      title: "Specialized 3-Months Body Color Doppler Training",
      desc: "Master advanced vascular scanning, pulsed-wave and continuous-wave doppler, arterial hemodynamics, renal artery assessment, and comprehensive color flow applications.",
      image: img9
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
                <Link 
                  to="/contact" 
                  className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-2 fw-semibold shadow-sm text-decoration-none"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                  Register Now
                </Link>

                <a 
                  href="https://wa.me/923178117227" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-success d-inline-flex align-items-center gap-2 px-4 py-2 fw-semibold shadow-sm" 
                  style={{ backgroundColor: '#198754', borderColor: '#198754' }}
                >
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