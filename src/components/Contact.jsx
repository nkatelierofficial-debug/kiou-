import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    cnic: '',
    passportNo: '',
    dob: '',
    nationality: 'Pakistani',
    maritalStatus: 'Single',
    gender: 'Male',
    phoneNo: '',
    altPhoneNo: '',
    whatsappNo: '',
    email: '',
    branch: 'Gulshan-e-Johar Branch',
    address: '',
    courseName: '',
    programType: '',
    preferredTiming: 'Morning Batch',
    education: {
      matric: { inst: '', year: '', marks: '', grade: '' },
      intermediate: { inst: '', year: '', marks: '', grade: '' },
      graduation: { inst: '', year: '', marks: '', grade: '' },
      other: { inst: '', year: '', marks: '', grade: '' }
    },
    agreeTerms: false
  });

  const handleEducationChange = (level, field, value) => {
    setFormData((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [level]: {
          ...prev.education[level],
          [field]: value
        }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert('Please accept the Terms and Conditions.');
      return;
    }

    setLoading(true);

    const educationSummary = `
Matric/O-Level: ${formData.education.matric.inst || 'N/A'} | Year: ${formData.education.matric.year || 'N/A'} | Marks: ${formData.education.matric.marks || 'N/A'} | Grade: ${formData.education.matric.grade || 'N/A'}
Intermediate/A-Level: ${formData.education.intermediate.inst || 'N/A'} | Year: ${formData.education.intermediate.year || 'N/A'} | Marks: ${formData.education.intermediate.marks || 'N/A'} | Grade: ${formData.education.intermediate.grade || 'N/A'}
Graduation: ${formData.education.graduation.inst || 'N/A'} | Year: ${formData.education.graduation.year || 'N/A'} | Marks: ${formData.education.graduation.marks || 'N/A'} | Grade: ${formData.education.graduation.grade || 'N/A'}
Other: ${formData.education.other.inst || 'N/A'} | Year: ${formData.education.other.year || 'N/A'} | Marks: ${formData.education.other.marks || 'N/A'} | Grade: ${formData.education.other.grade || 'N/A'}
    `;

    // Map React state to EmailJS variables
    const templateParams = {
      from_name: formData.fullName,
      father_name: formData.fatherName,
      cnic: formData.cnic,
      passport_no: formData.passportNo || 'N/A',
      dob: formData.dob,
      gender: formData.gender,
      marital_status: formData.maritalStatus,
      phone_no: formData.phoneNo,
      whatsapp_no: formData.whatsappNo,
      email: formData.email,
      campus_branch: formData.branch,
      address: formData.address,
      course_name: formData.courseName,
      duration: formData.programType,
      class_timing: formData.preferredTiming,
      education_summary: educationSummary
    };

    // Send Email via EmailJS (.env Variables)
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Registration Form Submitted Successfully!');
      setLoading(false);
      setFormData({
        fullName: '',
        fatherName: '',
        cnic: '',
        passportNo: '',
        dob: '',
        nationality: 'Pakistani',
        maritalStatus: 'Single',
        gender: 'Male',
        phoneNo: '',
        altPhoneNo: '',
        whatsappNo: '',
        email: '',
        branch: 'Gulshan-e-Johar Branch',
        address: '',
        courseName: '',
        programType: '',
        preferredTiming: 'Morning Batch',
        education: {
          matric: { inst: '', year: '', marks: '', grade: '' },
          intermediate: { inst: '', year: '', marks: '', grade: '' },
          graduation: { inst: '', year: '', marks: '', grade: '' },
          other: { inst: '', year: '', marks: '', grade: '' }
        },
        agreeTerms: false
      });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Form submission failed. Please try again later.');
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-5 bg-light text-dark">
      <div className="container py-4">
        
        {/* 1. Header */}
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-primary small d-block mb-2" style={{ letterSpacing: '0.5px' }}>
            GET IN TOUCH
          </span>
          <h2 className="display-5 fw-bold text-dark mb-3">Contact Us & Admissions</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '650px', fontSize: '1.05rem' }}>
            Reach out to us via email, phone, visit our campuses, or submit an online inquiry below.
          </p>
        </div>

        {/* 2. 3 Columns Info Cards */}
        <div className="row g-4 text-center mb-5">
          {/* Campuses Card */}
          <div className="col-lg-4 col-md-6">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-start align-items-center">
              <div className="text-dark mb-3">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h5 className="fw-bold text-dark text-uppercase mb-4" style={{ fontSize: '0.95rem', letterSpacing: '1px' }}>
                OUR CAMPUSES
              </h5>
              <div className="text-start w-100 mb-3 pb-3 border-bottom">
                <span className="badge bg-primary-subtle text-primary mb-2 fw-bold px-2 py-1" style={{ fontSize: '0.75rem' }}>
                  Gulshan-e-Johar Branch
                </span>
                <p className="text-secondary small mb-0 lh-base">
                  B10A, Abdullah Terrace Gulshan-e-Johar Block #16 Karachi, Sindh Pakistan
                </p>
              </div>
              <div className="text-start w-100">
                <span className="badge bg-success-subtle text-success mb-2 fw-bold px-2 py-1" style={{ fontSize: '0.75rem' }}>
                  DHA Branch
                </span>
                <p className="text-secondary small mb-0 lh-base">
                  17 C, 15th Commercial Street, DHA Phase 2 Extension, Karachi, Sindh Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Phone Number Card */}
          <div className="col-lg-4 col-md-6">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-start align-items-center">
              <div className="text-dark mb-3">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h5 className="fw-bold text-dark text-uppercase mb-4" style={{ fontSize: '0.95rem', letterSpacing: '1px' }}>
                PHONE NUMBER
              </h5>
              <div className="my-auto">
                <p className="text-secondary small mb-2">(+92) 317 8117227</p>
                <p className="text-secondary small mb-0">(+92) 21-34618666</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-start align-items-center">
              <div className="text-dark mb-3">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h5 className="fw-bold text-dark text-uppercase mb-4" style={{ fontSize: '0.95rem', letterSpacing: '1px' }}>
                EMAIL
              </h5>
              <div className="my-auto">
                <p className="text-secondary small mb-2">info@kiou.pk</p>
                <p className="text-secondary small mb-0">admission@kiou.pk</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Registration Form */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm">
              <div className="text-center mb-4 pb-2 border-bottom">
                <h3 className="fw-bold text-dark mb-1">Registration Form</h3>
                <p className="text-muted small">Fill in the details below to apply for admission</p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Candidate Personal Information */}
                <h6 className="fw-bold text-primary mb-3 text-uppercase" style={{ letterSpacing: '0.5px' }}>
                  Candidate Information
                </h6>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Name *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter candidate's name" 
                      required 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Father Name *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter father's name" 
                      required 
                      value={formData.fatherName}
                      onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">CNIC No *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. 42101-XXXXXXX-X" 
                      required 
                      value={formData.cnic}
                      onChange={(e) => setFormData({...formData, cnic: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Passport No (If Applicable)</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter passport number" 
                      value={formData.passportNo}
                      onChange={(e) => setFormData({...formData, passportNo: e.target.value})}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label small fw-semibold">Date of Birth *</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      required 
                      value={formData.dob}
                      onChange={(e) => setFormData({...formData, dob: e.target.value})}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label small fw-semibold">Nationality *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      required 
                      value={formData.nationality}
                      onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label small fw-semibold">Marital Status *</label>
                    <select 
                      className="form-select"
                      value={formData.maritalStatus}
                      onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})}
                    >
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold d-block">Gender *</label>
                    <div className="d-flex gap-4">
                      {['Male', 'Female', 'Other / Prefer not to say'].map((g) => (
                        <div className="form-check" key={g}>
                          <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id={`gender-${g}`}
                            checked={formData.gender === g}
                            onChange={() => setFormData({...formData, gender: g})}
                          />
                          <label className="form-check-label small" htmlFor={`gender-${g}`}>{g}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <h6 className="fw-bold text-primary mb-3 text-uppercase" style={{ letterSpacing: '0.5px' }}>
                  Contact Information
                </h6>
                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <label className="form-label small fw-semibold">Phone No *</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="03XX-XXXXXXX" 
                      required 
                      value={formData.phoneNo}
                      onChange={(e) => setFormData({...formData, phoneNo: e.target.value})}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label small fw-semibold">WhatsApp No *</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="03XX-XXXXXXX" 
                      required 
                      value={formData.whatsappNo}
                      onChange={(e) => setFormData({...formData, whatsappNo: e.target.value})}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label small fw-semibold">Alternative No</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="Optional" 
                      value={formData.altPhoneNo}
                      onChange={(e) => setFormData({...formData, altPhoneNo: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Email Address *</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="name@example.com" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Select Campus Branch *</label>
                    <select 
                      className="form-select"
                      value={formData.branch}
                      onChange={(e) => setFormData({...formData, branch: e.target.value})}
                    >
                      <option value="Gulshan-e-Johar Branch">Gulshan-e-Johar Branch</option>
                      <option value="DHA Branch">DHA Branch (Phase 2 Ext)</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Address *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter full address" 
                      required 
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                </div>
                <h6 className="fw-bold text-primary mb-3 text-uppercase" style={{ letterSpacing: '0.5px' }}>
                  Course Information
                </h6>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Name of Course You Are Applying For *</label>
                    <select 
                      className="form-select" 
                      required 
                      value={formData.courseName}
                      onChange={(e) => setFormData({...formData, courseName: e.target.value})}
                    >
                      <option value="">-- Select Course --</option>
                      <option value="Basic Medical Ultrasonography">Basic Medical Ultrasonography</option>
                      <option value="Echocardiography (ECHO)">Echocardiography (ECHO)</option>
                      <option value="Vascular Doppler Ultrasound">Vascular Doppler Ultrasound</option>
                      <option value="Obstetrics & Gynecology Ultrasound">Obstetrics & Gynecology Ultrasound</option>
                      <option value="Small Parts Ultrasound">Small Parts Ultrasound</option>
                      <option value="Advanced Color Doppler">Advanced Color Doppler</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Select Duration / Program *</label>
                    <select 
                      className="form-select" 
                      required 
                      value={formData.programType}
                      onChange={(e) => setFormData({...formData, programType: e.target.value})}
                    >
                      <option value="">-- Select Duration --</option>
                      <option value="3-Months Diploma (crash programme)">3-Months Diploma (crash programme)</option>
                      <option value="6-Months Diploma">6-Months Diploma</option>
                      <option value="12-Months Diploma">12-Months Diploma</option>
                      <option value="2-Years Master Diploma">2-Years Master Diploma</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-semibold d-block">Preferred Class Timing *</label>
                    <div className="d-flex flex-wrap gap-3">
                      {['Morning Batch', 'Afternoon Batch', 'Evening Batch', 'Weekend Batch', 'Online Batch'].map((t) => (
                        <div className="form-check" key={t}>
                          <input 
                            className="form-check-input" 
                            type="radio" 
                            name="preferredTiming" 
                            id={`time-${t}`}
                            checked={formData.preferredTiming === t}
                            onChange={() => setFormData({...formData, preferredTiming: t})}
                          />
                          <label className="form-check-label small" htmlFor={`time-${t}`}>{t}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <h6 className="fw-bold text-primary mb-3 text-uppercase" style={{ letterSpacing: '0.5px' }}>
                  Educational Information
                </h6>
                <div className="table-responsive mb-4">
                  <table className="table table-bordered align-middle text-center small">
                    <thead className="table-light">
                      <tr>
                        <th>Education Level</th>
                        <th style={{ minWidth: '160px' }}>Institution Name</th>
                        <th style={{ minWidth: '90px' }}>Year of Passing</th>
                        <th style={{ minWidth: '100px' }}>Marks/GPA</th>
                        <th style={{ minWidth: '100px' }}>Grade / Division</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { key: 'matric', label: 'Matric / O-Level' },
                        { key: 'intermediate', label: 'Intermediate / A-Level' },
                        { key: 'graduation', label: "Graduation / Bachelor's" },
                        { key: 'other', label: 'Other (Diploma/Certificate)' }
                      ].map((row) => (
                        <tr key={row.key}>
                          <td className="fw-semibold text-start">{row.label}</td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control form-control-sm" 
                              value={formData.education[row.key].inst}
                              onChange={(e) => handleEducationChange(row.key, 'inst', e.target.value)}
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control form-control-sm" 
                              value={formData.education[row.key].year}
                              onChange={(e) => handleEducationChange(row.key, 'year', e.target.value)}
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control form-control-sm" 
                              value={formData.education[row.key].marks}
                              onChange={(e) => handleEducationChange(row.key, 'marks', e.target.value)}
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control form-control-sm" 
                              value={formData.education[row.key].grade}
                              onChange={(e) => handleEducationChange(row.key, 'grade', e.target.value)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border-top pt-4">
                  <div className="form-check mb-3">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="termsCheck"
                      required
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                    />
                    <label className="form-check-label small text-muted" htmlFor="termsCheck">
                      "I hereby acknowledge that I have read, understood, and agree to be bound by the Terms and Conditions."
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 fw-bold py-2 shadow-sm"
                    disabled={loading}
                  >
                    {loading ? 'Submitting Registration...' : 'Submit Registration'}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

        {/* 4. Google Maps Section */}
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100">
              <h5 className="fw-bold text-dark mb-3">Gulshan-e-Johar Branch</h5>
              <div className="rounded-3 overflow-hidden border" style={{ height: '280px' }}>
                <iframe 
                  title="Johar Map"
                  src="https://maps.google.com/maps?q=Block%2016%20Gulshan-e-Johar%2C%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100">
              <h5 className="fw-bold text-dark mb-3">DHA Phase 2 Extension Branch</h5>
              <div className="rounded-3 overflow-hidden border" style={{ height: '280px' }}>
                <iframe 
                  title="DHA Map"
                  src="https://maps.google.com/maps?q=17%20C%2C%2015th%20commercial%20street%2C%20DHA%20phase%202%20Extension%2C%20Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}