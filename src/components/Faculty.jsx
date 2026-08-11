import React from 'react';
import drAbidaImg from '../assets/images/dr abida.jpg';
import drAmnaImg from '../assets/images/dr amna.jpg';
import drFatimaImg from '../assets/images/dr fatima.jpg';
import drNosheenImg from '../assets/images/dr nosheen.jpg';
import drNimraImg from '../assets/images/miss nimra.jpg';

export default function Faculty() {
  const facultyMembers = [
    { 
      name: "Dr. Abida Batool MBBS, MUSP (PAC) , ARDMS ", 
      role: "Instructor", 
      qualification: "Gynecologist / Sonologist",
      img: drAbidaImg 
    },
    { 
      name: "Dr. Amna Meer", 
      role: "Instructor", 
      qualification: "Physiotherapist / DPT",
      img: drAmnaImg 
    },
    { 
      name: "Dr. Fatima Mehboob", 
      role: "Instructor", 
      qualification: "Sonographer / Echo Cardiographer / Aesthetic Skin Care",
      img: drFatimaImg 
    },
    { 
      name: "Dr. Nousheen Asif", 
      role: "Instructor", 
      qualification: "Sonographer",
      img: drNosheenImg 
    },
    { 
      name: "Miss Nimra Khan Nasir", 
      role: "Admin / Instructor Assistant", 
      qualification: "Sonographer",
      img: drNimraImg
    }
  ];

  return (
    <section id="faculty" className="py-5 bg-light text-dark">
      
      <style>{`
        .faculty-card-item {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .faculty-card-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.1) !important;
        }
      `}</style>

      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-primary small d-block mb-2">Our Experts</span>
          <h2 className="display-6 fw-bold text-dark">Meet Our Faculty</h2>
          <p className="text-muted mx-auto mt-2" style={{ maxWidth: '600px' }}>
            Experienced faculty members dedicated to maintaining high standards of education and clinical practice.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {facultyMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border shadow-sm p-4 rounded-4 bg-white faculty-card-item text-center">
                
                <div className="rounded-3 overflow-hidden mb-3 bg-light d-flex align-items-center justify-content-center mx-auto" style={{ height: '260px' }}>
                  {member.img ? (
                    <img src={member.img} alt={member.name} className="w-100 h-100 object-fit-contain" />
                  ) : (
                    <div className="text-muted text-center p-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-2 text-secondary">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <p className="small mb-0">No Image Available</p>
                    </div>
                  )}
                </div>

                <h6 className="fw-bold text-dark mb-1">{member.name}</h6>
                <p className="text-primary small fw-semibold mb-2">{member.role}</p>

                {member.qualification && (
                  <p className="text-muted small mb-0 px-2">
                    {member.qualification}
                  </p>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}