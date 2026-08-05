import React from 'react';

export default function FAQs() {
  const faqs = [
    { q: "Who can apply?", a: "MBBS doctors, Pharm.D graduates, Homeopathic Doctors, Nurses, Midwives, LHVs, B.Sc. graduates, F.Sc. students, and allied health professionals can apply." },
    { q: "Is the diploma recognized?", a: "Yes, all programs are approved and affiliated with the Sindh Board of Technical Education (SBTE) and Sindh Medical Faculty (SMF)." },
    { q: "Are practical classes included?", a: "Yes, extensive hands-on live patient scanning and practical sessions are a core part of our curriculum." },
    { q: "Is there an internship?", a: "Yes, we provide structured internship opportunities across partner healthcare organizations and clinics." },
    { q: "What are the class timings?", a: "Flexible morning and evening batches are available to accommodate working professionals and regular students." },
    { q: "Is there job assistance?", a: "Yes, our dedicated career guidance cell assists graduates in securing placements across Pakistan." }
  ];

  return (
    <section id="faqs" className="py-5 bg-white text-dark">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-primary small d-block mb-2">Got Questions?</span>
          <h2 className="display-6 fw-bold text-dark">Frequently Asked Questions</h2>
          <p className="text-muted mx-auto mt-2" style={{ maxWidth: '600px' }}>
            Find clear answers regarding admissions, certifications, and training structures.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item border rounded-3 mb-3 shadow-sm overflow-hidden" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button 
                      className={`accordion-button fw-bold text-dark ${index !== 0 ? 'collapsed' : ''}`} 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#collapse${index}`} 
                    >
                      {faq.q}
                    </button>
                  </h2>
                  <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-secondary lh-lg">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}