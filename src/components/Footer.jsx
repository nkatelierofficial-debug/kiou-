import React, { useState } from 'react';
import logoImg from '../assets/logo1.jpg';

export default function Footer() {
  const [isWaOpen, setIsWaOpen] = useState(false);

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=923178117227&text=Hello%2C%20I%20need%20help!&type=phone_number&app_absent=0";

  return (
    <footer className="text-white pt-5 pb-3 border-top border-secondary position-relative" style={{ backgroundColor: '#000000' }}>
      <style>{`
        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease-in-out;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #adb5bd;
          text-decoration: none;
        }
        .social-icon-btn.fb:hover {
          background-color: #3b82f6;
          border-color: #3b82f6;
          color: #ffffff;
        }
        .social-icon-btn.wa:hover {
          background-color: #22c55e;
          border-color: #22c55e;
          color: #ffffff;
        }
        .social-icon-btn.web:hover {
          background-color: #10b981;
          border-color: #10b981;
          color: #ffffff;
        }

        /* Single Floating WhatsApp Widget Wrapper */
        .wa-floating-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        /* Popup Chat Box */
        .wa-chat-box {
          width: 320px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          margin-bottom: 12px;
          animation: fadeInUp 0.25s ease-in-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .wa-chat-header {
          background: #22c55e;
          color: #ffffff;
          padding: 18px 16px;
        }

        .wa-chat-body {
          padding: 16px;
          background: #f8fafc;
        }

        .wa-contact-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-left: 4px solid #22c55e;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          text-decoration: none !important;
          transition: all 0.2s ease;
        }

        .wa-contact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        /* Main Single Floating Toggle Button */
        .wa-toggle-btn {
          width: 56px;
          height: 56px;
          background-color: #22c55e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          border: none;
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .wa-toggle-btn:hover {
          transform: scale(1.06);
          background-color: #16a34a;
        }
      `}</style>

      <div className="container">
        <div className="row g-4 justify-content-between mb-5">
          <div className="col-lg-4 col-md-6">
            <h6 className="text-white fw-bold mb-3" style={{ fontSize: '1rem' }}>kiou.com.pk</h6>
            <div className="d-block">
              <img 
                src={logoImg} 
                alt="KIOU Logo" 
                style={{ 
                  height: '200px', 
                  width: '100%', 
                  maxHeight: '220px',
                  objectFit: 'contain',
                  objectPosition: 'left center'
                }} 
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-3 text-uppercase tracking-wider" style={{ fontSize: '0.9rem' }}>Find Us</h6>
            <p className="text-white-50 small mb-2">Karachi, Pakistan</p>
            <p className="text-white-50 small mb-2">info@kiou.pk</p>
             <div className="d-flex align-items-center gap-2 mb-3">
              <a 
                href="https://web.facebook.com/KarachiInstituteofultrasonography" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn fb"
                title="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn wa"
                title="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a 
                href="https://kiou.com.pk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn web"
                title="Website"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                </svg>
              </a>
            </div>

            <p className="text-white-50 small mb-0">0317-8117227</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-bold mb-3 text-uppercase tracking-wider" style={{ fontSize: '0.9rem' }}>Links</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li><a href="#hero" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="#contact" className="text-white-50 text-decoration-none">Contact Us</a></li>
              <li><a href="#about" className="text-white-50 text-decoration-none">About Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-3 text-uppercase tracking-wider" style={{ fontSize: '0.9rem' }}>NEWSLETTER</h6>
            <p className="text-white-50 small mb-3">Enjoy our newsletter to stay updated with the latest news.</p>
            <div className="input-group">
              <input type="email" className="form-control form-control-sm text-white border-secondary" style={{ backgroundColor: '#111111' }} placeholder="Enter your email" />
              <button className="btn btn-primary btn-sm px-3" type="button">Subscribe</button>
            </div>
          </div>

        </div>
        <div className="pt-4 border-top border-secondary d-flex flex-wrap justify-content-between align-items-center gap-3">
          <p className="text-white-50 small mb-0">
            © Karachi Institute of Ultrasonography . All Rights Reserved.
          </p>
          <div className="d-flex align-items-center gap-3 text-white-50 small fw-semibold" style={{ fontSize: '0.75rem' }}>
            <span>VISA</span>
            <span>AMERICAN EXPRESS</span>
            <span>DISCOVER</span>
            <span>MASTERCARD</span>
            <span>PayPal</span>
          </div>
        </div>

      </div>
      <div className="wa-floating-container">
        {isWaOpen && (
          <div className="wa-chat-box">
            <div className="wa-chat-header">
              <div className="d-flex align-items-center gap-2 mb-1">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <h6 className="fw-bold mb-0 text-white" style={{ fontSize: '1.05rem' }}>Start a Conversation</h6>
              </div>
              <p className="mb-0 text-white-50" style={{ fontSize: '0.78rem' }}>
                Hi! Click one of our member below to chat on <strong>WhatsApp</strong>
              </p>
            </div>

            <div className="wa-chat-body">
              <p className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>The team typically replies in a few minutes.</p>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="wa-contact-card"
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.88rem' }}>KIOU</h6>
                  <p className="mb-0 text-secondary" style={{ fontSize: '0.73rem' }}>Karachi Institute of Ultrasonography</p>
                </div>
                <div className="text-success ms-auto">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
              </a>
            </div>

          </div>
        )}
        <button 
          className="wa-toggle-btn"
          onClick={() => setIsWaOpen(!isWaOpen)}
          aria-label="Toggle WhatsApp Chat"
        >
          {isWaOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          )}
        </button>

      </div>

    </footer>
  );
}