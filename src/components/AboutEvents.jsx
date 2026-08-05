import React from 'react';

export default function AboutEvents() {
  return (
    <section id="about" className="py-5 bg-white text-dark">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="text-uppercase fw-bold text-primary small d-block mb-2">About KIOU</span>
            <h2 className="display-6 fw-bold text-dark mb-3">History & Vision of the Institute</h2>
            <p className="text-secondary lh-lg mb-3">
              Karachi Institute of Ultrasonography (KIOU), established in 2002, is one of Pakistan’s pioneering institutions dedicated to excellence in medical education, professional training, and clinical services.
            </p>
            <p className="text-secondary lh-lg mb-4">
              Proudly affiliated with the <strong>Sindh Board of Technical Education (SBTE)</strong>.
            </p>
            <div className="p-4 bg-light rounded-4 border-start border-primary border-4">
              <h5 className="fw-bold text-primary mb-2">Our Vision</h5>
              <p className="text-secondary small fst-italic mb-0">
                "To become Pakistan’s leading institute in diagnostic imaging and allied healthcare education by providing affordable, accessible, and internationally inspired training."
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 bg-light rounded-4 border shadow-sm">
              <h4 className="fw-bold text-dark mb-3">Why Choose KIOU?</h4>
              <ul className="list-unstyled text-secondary small d-flex flex-column gap-3 mb-0">
                <li className="d-flex align-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary me-2 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  20+ Years of Excellence
                </li>
                <li className="d-flex align-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary me-2 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Government Recognized Programs (SBTE)
                </li>
                <li className="d-flex align-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary me-2 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Experienced Faculty & Modern Ultrasound Equipment
                </li>
                <li className="d-flex align-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary me-2 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Hands-on Clinical Training & Internship Opportunities
                </li>
                <li className="d-flex align-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary me-2 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Affordable Fee Structure & Career Guidance
                </li>
                <li className="d-flex align-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary me-2 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Small Class Sizes for Focused Learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}