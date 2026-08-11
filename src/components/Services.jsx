import React, { useState } from 'react';

export default function Services() {
  const [selectedModal, setSelectedModal] = useState(null);
  const courses = [
    {
      title: "Advance Ultrasound Diploma (Advanced)",
      duration: "2 Years",
      desc: "Comprehensive 2-year diploma covering basic to advanced diagnostic ultrasound applications."
    },
    {
      title: "Echocardiography (ECHO)",
      duration: "2 Years",
      desc: "Comprehensive cardiac imaging program focusing on adult echocardiography."
    },
    {
      title: "Physiotherapy Program",
      duration: "2 Years",
      desc: "Professional physical therapy and rehabilitation training curriculum."
    },
    {
      title: "Aesthetic Skin Care",
      duration: "2 Years",
      desc: "Advanced clinical dermatology and cosmetic treatment methodology."
    },
    {
      title: "Basic Ultrasound Diploma",
      duration: "1 Year",
      desc: "Comprehensive introductory diploma designed for medical graduates."
    },
    {
      title: "Echocardiography (ECHO)",
      duration: "1 Year",
      desc: "Focused 1-year training program covering essential cardiac imaging, 2D echo, and color flow mapping."
    },
    {
      title: "Vascular Doppler Course",
      duration: "30 Days",
      desc: "Specialized training focusing on arterial and venous color Doppler imaging."
    },
    {
      title: "Small Parts Ultrasound Course",
      duration: "15 Days",
      desc: "Focused short course on high-frequency imaging for superficial structures."
    },
    {
      title: "Transvaginal Ultrasound Course",
      duration: "10 Days",
      desc: "Intensive practical module covering endovaginal diagnostic scanning."
    },
     {
      title: "Online Live Classes via Zoom",
      duration: "Live",
      desc: "Flexible live online sessions covering theoretical concepts and interactive case reviews."
    }
  ];

  const medicalServices = [
    {
      title: "Pelvic Ultrasound (Gynecology & Obstetrics)",
      category: "Clinical Diagnostic",
      desc: "Complete fetal wellbeing monitoring, anomaly scans, and gynecological pathology assessments.",
      details: [
        "Routine pregnancy checkups and fetal growth monitoring.",
        "Detection of fibroids, ovarian cysts, and pelvic inflammatory conditions.",
        "Follicular tracking for fertility treatments."
      ]
    },
    {
      title: "Abdominal & Renal Ultrasound",
      category: "Clinical Diagnostic",
      desc: "Detailed evaluation of upper abdominal organs and urinary system.",
      details: [
        "Assessment of fatty liver, gallstones, and liver parenchymal changes.",
        "Kidney stone detection, hydronephrosis, and bladder evaluations.",
        "Pancreas and spleen pathology screening."
      ]
    },
    {
      title: "Breast & Thyroid Ultrasound",
      category: "Clinical Diagnostic",
      desc: "High-resolution superficial organ scanning for nodules and masses.",
      details: [
        "Early screening for breast lumps, cysts, and tissue changes.",
        "Thyroid nodule size tracking, goiter, and vascularity checks.",
        "Safe, radiation-free diagnostic imaging."
      ]
    },
    {
      title: "Upper & Lower Limb Vascular Doppler",
      category: "Specialized Diagnostic",
      desc: "Color Doppler assessment for arterial and venous blood circulation.",
      details: [
        "Deep Vein Thrombosis (DVT) screening for leg swelling.",
        "Varicose veins assessment and incompetent valve mapping.",
        "Peripheral arterial disease (PAD) evaluation."
      ]
    },
    {
      title: "Echocardiography (ECHO) & ECG",
      category: "Cardiac Diagnostic",
      desc: "Comprehensive cardiac function assessment and electrical activity recording.",
      details: [
        "Assessment of heart muscle strength and valve movement.",
        "Detection of ischemic heart disease and congenital heart defects.",
        "Instant 12-lead ECG analysis for chest pain and arrhythmia."
      ]
    },
    {
      title: "General Outpatient Department (OPD)",
      category: "General Care",
      desc: "Primary medical consultations, disease management, and preventative health care.",
      details: [
        "Treatment for common acute illnesses and seasonal infections.",
        "Management of chronic conditions like hypertension and diabetes.",
        "Comprehensive family health consultations."
      ]
    },
    {
      title: "Infertility Consultation & Treatment",
      category: "Specialized Care",
      desc: "Dedicated medical guidance and diagnostic monitoring for couples.",
      details: [
        "Hormonal and ultrasound-based ovulation tracking.",
        "Male and female reproductive health evaluation.",
        "Personalized medical treatment plans and specialist counseling."
      ]
    },
    {
      title: "Antenatal & Postnatal Care",
      category: "Maternal Health",
      desc: "Complete mother and child healthcare through pregnancy and recovery.",
      details: [
        "Regular maternal BP, blood sugar, and nutritional tracking.",
        "Post-delivery health assessments and recovery guidance.",
        "Lactation counseling and newborn care basics."
      ]
    },
    {
      title: "Physiotherapy & Rehabilitation",
      category: "Physical Health",
      desc: "Custom physical therapy sessions for pain relief and mobility recovery.",
      details: [
        "Treatment for back pain, sciatica, and joint stiffness.",
        "Post-surgical physical rehabilitation.",
        "Postural correction and therapeutic exercise guidance."
      ]
    },
    {
      title: "Hijama (Cupping Therapy)",
      category: "Alternative Care",
      desc: "Sterile wet and dry cupping therapy for detoxification and pain management.",
      details: [
        "Performed using single-use, 100% sterile disposable cups.",
        "Targeted relief for chronic muscle tension and joint pain.",
        "Promotes blood circulation and natural body detox."
      ]
    }
  ];

  return (
    <section id="services" className="py-5 bg-light text-dark">
      <style>{`
        .service-card-interactive {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .service-card-interactive:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08) !important;
          border-color: #0d6efd !important;
        }
        .details-check-list li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.4rem;
        }
        .details-check-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #0d6efd;
          font-weight: bold;
        }
      `}</style>

      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-primary small d-block mb-2">Academics & Healthcare</span>
          <h2 className="display-5 fw-bold text-dark">Courses Offered & Medical Services</h2><br />
          <h3 className="fw-bold text-dark mb-4  border-4 ps-3">
            In Collaboration with My Health Clinic
          </h3>
          <p className="text-muted mx-auto mt-2" style={{ maxWidth: '650px' }}>
            Comprehensive training programs and diagnostic care managed by professional healthcare specialists.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="fw-bold text-dark mb-4 border-start border-primary border-4 ps-3">
            Course Outlines & Durations
          </h3>
          
          <div className="row g-4">
            {courses.map((c, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                      <span className="badge bg-primary-subtle text-primary fw-bold px-3 py-1 rounded-pill small">
                        {c.duration}
                      </span>
                    </div>
                    <h5 className="fw-bold text-dark mb-2">{c.title}</h5>
                    <p className="text-muted small mb-0">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="fw-bold text-dark mb-4 border-start border-primary border-4 ps-3">
            Medical Services (My Health Clinic)
          </h3>
          
          <div className="row g-3">
            {medicalServices.map((s, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div 
                  className="p-3 bg-white rounded-3 border shadow-sm d-flex align-items-center justify-content-between h-100 service-card-interactive"
                  onClick={() => setSelectedModal(s)}
                >
                  <div className="d-flex align-items-center me-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary me-3 flex-shrink-0">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <span className="fw-semibold text-dark small">{s.title}</span>
                  </div>
                  
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted flex-shrink-0">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      {selectedModal && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={() => setSelectedModal(null)}
        >
          <div 
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content rounded-4 border-0 shadow-lg p-3">
              
              <div className="modal-header border-0 pb-0">
                <div>
                  {selectedModal.category && (
                    <span className="badge bg-primary-subtle text-primary fw-bold mb-2 px-2 py-1 small">
                      {selectedModal.category}
                    </span>
                  )}
                  <h4 className="modal-title fw-bold text-dark">{selectedModal.title}</h4>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedModal(null)}
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body py-3">
                <p className="text-muted small mb-4">{selectedModal.desc}</p>
                
                <h6 className="fw-bold text-primary mb-3">Key Highlights & Clinical Details:</h6>
                
                <ul className="list-unstyled details-check-list text-secondary small mb-0">
                  {selectedModal.details.map((point, idx) => (
                    <li key={idx} className="lh-base">{point}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer border-0 pt-0">
                <button 
                  type="button" 
                  className="btn btn-primary rounded-pill px-4" 
                  onClick={() => setSelectedModal(null)}
                >
                  Close Details
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}