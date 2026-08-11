import React, { useState } from 'react';
import ownerImg from '../assets/images/owner.jpg';

export default function Founder() {
  const [showFull, setShowFull] = useState(false);

  return (
    <section id="founder" className="py-5 bg-white text-dark">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="p-3 bg-white rounded-4 shadow-sm border text-center">
              <div className="overflow-hidden rounded-3 d-flex align-items-center justify-content-center bg-light" style={{ height: '480px' }}>
                <img 
                  src={ownerImg} 
                  alt="Musarrat Jehan - Managing Director KIOU" 
                  className="w-100 h-100 object-fit-contain p-2"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="ps-lg-4">
               <span className="text-xl text-primary fw-bold small mb-4 text-uppercase" style={{ letterSpacing: '0.5px' }}>
                       Chief Executive Officer (CEO)
                        </span>
              
              <h2 className="display-5 fw-bold text-dark mb-1">
                Musarrat Jehan
              </h2>
              
              <p className="text-primary fw-bold small mb-4 text-uppercase" style={{ letterSpacing: '0.5px' }}>
                CEO — Karachi Institute of Ultrasonography (KIOU)
              </p>
              
              <p className="text-dark fs-6 lh-lg mb-3">
                <strong>Musarrat Jehan</strong> is a highly respected development specialist, healthcare management professional, and entrepreneur with more than 25 years of distinguished experience in healthcare management, institutional development, capacity building, and professional education. Throughout her career, she has been dedicated to strengthening healthcare systems, developing human resources, and expanding access to quality health services across Pakistan.
              </p>

              <p className="text-dark fs-6 lh-lg mb-3">
                Before assuming the role of Managing Director of Karachi Institute of Ultrasonography (KIOU), Musarrat Jehan served as one of the pioneering members of Marie Stopes Society Pakistan, where she devoted over two decades to the organization’s growth and development. Through her visionary leadership, strategic planning, and operational excellence, she played a key role in expanding the organization’s healthcare network from a single clinic to more than forty high-quality clinics nationwide, significantly improving access to reproductive, maternal, and family healthcare services.
              </p>
              {showFull && (
                <div className="mt-3">
                  <p className="text-dark fs-6 lh-lg mb-3">
                    She holds a Master’s degree in Economics and has completed extensive professional training in leadership, strategic management, organizational development, financial management, communication, monitoring and evaluation, data management, and statistical analysis. Her commitment to continuous learning has taken her to several Marie Stopes International country programmes, where she gained valuable international exposure to healthcare management, quality assurance, clinical governance, and the establishment of world-class healthcare facilities.
                  </p>

                  <p className="text-dark fs-6 lh-lg mb-3">
                    Driven by a passion for education and professional development, Musarrat Jehan founded the Institute of Health Management (IHM), an organization dedicated to strengthening healthcare institutions through management consultancy, leadership development, and capacity-building programmes. Under her leadership, IHM has contributed to the professional growth of numerous healthcare organizations and professionals.
                  </p>

                  <p className="text-dark fs-6 lh-lg mb-3">
                    Since taking the leadership of KIOU, Musarrat Jehan has led a remarkable transformation of the institute. She has modernized its academic and clinical training systems, enhanced educational standards, expanded institutional capacity, introduced innovative teaching methodologies, and strengthened partnerships with healthcare organizations, NGOs, and development partners. Today, KIOU is recognized as one of Pakistan’s leading institutions for diagnostic ultrasound and allied healthcare education, providing high-quality training alongside practical clinical experience.
                  </p>

                  <p className="text-dark fs-6 lh-lg mb-3">
                    Her leadership philosophy is built on integrity, excellence, innovation, and service. She firmly believes that investing in education is the foundation of quality healthcare, and she remains committed to preparing competent, ethical, and compassionate healthcare professionals capable of meeting the evolving needs of the medical profession.
                  </p>

                  <p className="text-dark fs-6 lh-lg mb-3">
                    Through her vision and dedication, Musarrat Jehan continues to inspire excellence in healthcare education while advancing KIOU’s mission to provide affordable, accessible, and internationally recognized training and healthcare services for the benefit of communities across Pakistan.
                  </p>
                </div>
              )}
              <button 
                onClick={() => setShowFull(!showFull)} 
                className="btn btn-outline-primary fw-bold mt-2 px-4 py-2 rounded-pill shadow-sm"
              >
                {showFull ? 'Show Less' : 'Read Full Biography'}
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}