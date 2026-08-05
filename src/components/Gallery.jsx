import React, { useState, useEffect } from 'react';
// Practical Training Images
import practice1Img from '../assets/images/practice 1.jpg';
import practice2Img from '../assets/images/practice 2.jpg';
import practice3Img from '../assets/images/practice 3.jpg';
import practice4Img from '../assets/images/practice 4.jpg';
import practice5Img from '../assets/images/practice 5.jpg';
import practice6Img from '../assets/images/practice 6.jpg';
import practice7Img from '../assets/images/practice 7.jpg';
import practice8Img from '../assets/images/practice 8.jpg';
// Group & Ceremony Images
import drGroupImg from '../assets/images/dr group pics.jpg';
import drNosheenCeremonyImg from '../assets/images/dr nosheen cermony pic.jpg';
import ceremonyImg from '../assets/images/cermony.jpg';
// Awards & Recognition Images
import awards1Img from '../assets/images/awards 1.jpg';
import awards2Img from '../assets/images/awards 2.jpg';
import awardsImg from '../assets/images/awards.jpg';
// Certificate / Event Images
import cer1Img from '../assets/images/cer1.jpg';
import cer2Img from '../assets/images/cer2.jpg';
import cer3Img from '../assets/images/cer3.jpg';
import cer4Img from '../assets/images/cer 4.jpg';
import cer5Img from '../assets/images/cer 5.jpg';
import campingImg from '../assets/images/campinig.jpg';
const items = [
  // 1-8 Practical Training
  { img: practice1Img, category: "Practical Training", title: "Hands-on Live Scanning", desc: "Supervised clinical practice on live patients using diagnostic ultrasound." },
  { img: practice2Img, category: "Practical Training", title: "Clinical Guidance Session", desc: "Interactive guidance on patient positioning and diagnostic techniques." },
  { img: practice3Img, category: "Practical Training", title: "Diagnostic Skill Workshop", desc: "Mastering probe handling and image acquisition in modern lab settings." },
  { img: practice4Img, category: "Practical Training", title: "Real-time Patient Observation", desc: "Direct instructor supervision during live diagnostic scanning procedures." },
  { img: practice5Img, category: "Practical Training", title: "Supervised Lab Practice", desc: "Enhancing diagnostic accuracy through hands-on practical sessions." },
  { img: practice6Img, category: "Practical Training", title: "Clinical Skills Training", desc: "In-depth practical training for ultrasound student doctors." },
  { img: practice7Img, category: "Practical Training", title: "Ultrasound Protocol Demo", desc: "Learning standard diagnostic protocols and scan interpretation." },
  { img: practice8Img, category: "Practical Training", title: "Advanced Practical Scanning", desc: "Building core clinical confidence for independent diagnostic scanning." },
  // Ceremonies & Group Photos
  { img: ceremonyImg, category: "Convocation & Events", title: "Annual Convocation Ceremony", desc: "Celebrating academic milestones, student success, and graduations." },
  { img: drNosheenCeremonyImg, category: "Convocation & Events", title: "Dr. Nosheen Ceremony Event", desc: "Special event honoring leadership, guest speakers, and faculty contributions." },
  { img: drGroupImg, category: "Faculty & Mentorship", title: "Senior Faculty & Doctors Team", desc: "KIOU expert sonologists and senior medical faculty members." },
  // Awards & Trophies
  { img: awards1Img, category: "Awards & Honors", title: "Excellence Awards Distribution", desc: "Recognizing high performance and clinical skills during institutional events." },
  { img: awards2Img, category: "Awards & Honors", title: "Institutional Merit Shields", desc: "Honoring top achieving students in diagnostic ultrasound programs." },
  { img: awardsImg, category: "Awards & Honors", title: "KIOU Academic Honor Shields", desc: "Crystal shields awarded for dedication and clinical excellence." },
  // Events & Delegations
  { img: cer1Img, category: "Certifications & Events", title: "Official Certification Award", desc: "Presenting official diplomas and course certificates to graduates." },
  { img: cer2Img, category: "Certifications & Events", title: "Academic Qualification Ceremony", desc: "Awarding certified ultrasound qualifications to completing doctors." },
  { img: cer3Img, category: "Certifications & Events", title: "International Educational Collaboration", desc: "KIOU delegation meeting with international educational representatives." },
  { img: cer4Img, category: "Certifications & Events", title: "Foreign Educational Delegation", desc: "Faculty interaction with international education and trust partners." },
  { img: cer5Img, category: "Certifications & Events", title: "Faculty & Foreign Delegates", desc: "KIOU representative meeting with international academic partners." },
  // Community Service
  { img: campingImg, category: "Community Outreach", title: "Free Medical Screening Camp", desc: "Community healthcare outreach providing free diagnostic ultrasound screenings." }
];
export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);
  const activeItem = items[currentIndex];
  return (
    <section id="gallery" className="py-5 bg-white text-dark">
      <style>{`
        .gallery-img-box {
          overflow: hidden;
          cursor: pointer;
        }
        .gallery-img-zoom {
          transition: transform 0.4s ease-in-out;
        }
        .gallery-img-box:hover .gallery-img-zoom {
          transform: scale(1.08);
        }
      `}</style>

      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-primary small d-block mb-2">Campus & Facilities</span>
          <h2 className="display-6 fw-bold text-dark">Interactive Gallery Showcase</h2>
          <p className="text-muted mx-auto mt-2" style={{ maxWidth: '600px' }}>
            Karachi Institute of Ultrasonography (KIOU) provides top-notch facilities and practical training since 2002.
          </p>
        </div>
        <div className="row align-items-center g-4 p-4 p-lg-5 bg-light rounded-4 border shadow-sm">
          <div className="col-lg-5">
            <div>
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="badge bg-primary text-white fw-bold px-3 py-2 rounded-pill">
                  {activeItem.category}
                </span>
                <span className="badge bg-primary-subtle text-primary fw-semibold px-2 py-1 rounded-pill small">
                  {currentIndex + 1} of {items.length}
                </span>
              </div>

              <h3 className="fw-bold text-dark display-6 mb-3" style={{ minHeight: '65px' }}>
                {activeItem.title}
              </h3>
              
              <p className="text-secondary fs-6 lh-lg mb-4" style={{ minHeight: '70px' }}>
                {activeItem.desc}
              </p>
              <div 
                className="d-flex gap-2 align-items-center overflow-x-auto py-2" 
                style={{ maxWidth: '100%', scrollbarWidth: 'none' }}
              >
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded-pill border-0 flex-shrink-0 ${currentIndex === idx ? 'bg-primary' : 'bg-secondary bg-opacity-25'}`}
                    style={{ 
                      width: currentIndex === idx ? '28px' : '8px', 
                      height: '8px', 
                      transition: 'all 0.3s ease' 
                    }}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div 
              className="gallery-img-box position-relative rounded-4 border bg-white d-flex align-items-center justify-content-center p-2 shadow-sm" 
              style={{ height: '420px' }}
            >
              <img 
                key={currentIndex}
                src={activeItem.img} 
                alt={activeItem.title} 
                className="gallery-img-zoom w-100 h-100 object-fit-contain rounded-3"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}