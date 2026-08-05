import React, { useState } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 9999 }}>
      {isOpen && (
        <div 
          className="bg-white shadow-lg rounded-4 overflow-hidden border mb-3"
          style={{ width: '320px', animation: 'fadeIn 0.3s ease-in-out' }}
        >
          <div className="bg-success text-white p-4 position-relative">
            <div className="d-flex align-items-center gap-3 mb-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <h5 className="fw-bold mb-0">Start a Conversation</h5>
            </div>
            <p className="small mb-0 text-white-50" style={{ fontSize: '0.85rem' }}>
              Hi! Click one of our members below to chat on WhatsApp
            </p>
          </div>
          <div className="p-3 bg-light">
            <p className="text-muted text-center small mb-3" style={{ fontSize: '0.75rem' }}>
              The team typically replies in a few minutes.
            </p>
            <a 
              href="https://wa.me/923178117227" 
              target="_blank" 
              rel="noopener noreferrer"
              className="d-flex align-items-center justify-content-between p-3 bg-white rounded-3 text-decoration-none shadow-sm border-start border-success border-4 transition-hover"
            >
              <div className="d-flex align-items-center gap-3">
                <div className="text-success">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '0.9rem' }}>KIOU</h6>
                  <p className="text-muted small mb-0" style={{ fontSize: '0.75rem' }}>Karachi Institute of Ultrasonography</p>
                </div>
              </div>
              <div className="text-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-end">
        <button 
          onClick={toggleChat}
          className="d-flex align-items-center justify-content-center text-white shadow-lg rounded-circle border-0"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#25D366',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
        >
          {isOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          )}
        </button>
      </div>

    </div>
  );
}