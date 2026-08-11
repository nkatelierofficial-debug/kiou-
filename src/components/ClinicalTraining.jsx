import React, { useState } from 'react';

export default function ClinicalTraining() {
  const [activeModalItem, setActiveModalItem] = useState(null);

  const trainingItems = [
    {
      title: "Live Patient Scanning",
      desc: "Real-world exposure with actual patients under supervision.",
      details: [
        "Direct observation and patient interaction in real clinical environments.",
        "Hands-on probe handling across abdominal, pelvic, and vascular protocols.",
        "Real-time diagnostic interpretation supervised by expert sonologists.",
        "Understanding patient positioning, ergonomics, and safety procedures."
      ]
    },
    {
      title: "Case Discussions",
      desc: "Analyzing complex diagnostic cases with expert instructors.",
      details: [
        "In-depth analysis of rare and challenging clinical ultrasound cases.",
        "Interactive group discussions on differential diagnostic findings.",
        "Comparative evaluation of normal vs. pathological ultrasound images.",
        "Evidence-based clinical reasoning and diagnostic decision-making."
      ]
    },
    {
      title: "Report Writing",
      desc: "Learning professional medical report drafting and documentation.",
      details: [
        "Standardized medical terminology and diagnostic measurement documentation.",
        "Drafting clear, accurate, and professional ultrasound report summaries.",
        "Identifying critical findings that require urgent surgical or clinical review.",
        "Legal considerations and record-keeping standards in diagnostic imaging."
      ]
    },
    {
      title: "Supervised Hands-on Practice",
      desc: "Direct guidance on modern ultrasound machinery.",
      details: [
        "Optimizing machine parameters: Gain, Depth, Focal Zones, and Frequency settings.",
        "Mastering Doppler imaging, Color Flow, and Pulsed Wave modes.",
        "One-on-one instructor feedback during practical scanning drills.",
        "Equipment maintenance, transducer hygiene, and safety protocols."
      ]
    },
    {
      title: "Internship Opportunities",
      desc: "Career-launching placement options in partner clinics and hospitals.",
      details: [
        "Structured clinical placement options in accredited partner diagnostic centers.",
        "Networking with practicing sonologists and healthcare administrators.",
        "Real-world clinical workflow integration and professional experience.",
        "Post-training career guidance, resume building, and job recommendation support."
      ]
    }
  ];

  const getIcon = (index) => {
    switch (index) {
      case 0:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case 1:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        );
      case 2:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
        );
      case 3:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        );
      case 4:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="clinical-training" className="py-5 bg-white text-dark">
            <style>{`
        .training-card {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer;
        }
        .training-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important;
          border-color: #0d6efd !important;
        }
        .details-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .details-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #0d6efd;
          font-weight: bold;
        }
      `}</style>

      <div className="container py-4">
        
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-primary small d-block mb-2">Practical Experience</span>
          <h2 className="display-6 fw-bold text-dark">Clinical Training Program</h2>
          <p className="text-muted mx-auto mt-2" style={{ maxWidth: '600px' }}>
            Bridging theory and practice through intense hands-on clinical sessions. Click or hover any card to view detailed learning modules.
          </p>
        </div>

        <div className="row g-4">
          {trainingItems.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div 
                className="p-4 bg-light rounded-4 border h-100 shadow-sm training-card d-flex flex-column justify-content-between"
                onClick={() => setActiveModalItem(item)}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="text-primary">{getIcon(index)}</div>
                    <span className="badge bg-white text-primary border rounded-pill px-2 py-1 small fw-normal">
                      Click for details
                    </span>
                  </div>

                  <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                  <p className="text-muted small mb-3">{item.desc}</p>
                </div>

                <div className="pt-3 border-top mt-2">
                  <div className="text-primary small fw-semibold d-flex align-items-center gap-1">
                    View Module Breakdown
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {activeModalItem && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content rounded-4 border-0 shadow-lg p-3">
              <div className="modal-header border-0 pb-0">
                <h4 className="modal-title fw-bold text-dark">{activeModalItem.title}</h4>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setActiveModalItem(null)}
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body py-3">
                <p className="text-muted mb-4">{activeModalItem.desc}</p>
                <h6 className="fw-bold text-primary mb-3">Key Learning Objectives & Skills:</h6>
                
                <ul className="list-unstyled details-list text-secondary small mb-0">
                  {activeModalItem.details.map((point, idx) => (
                    <li key={idx} className="lh-base">{point}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer border-0 pt-0">
                <button 
                  type="button" 
                  className="btn btn-primary rounded-pill px-4" 
                  onClick={() => setActiveModalItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

