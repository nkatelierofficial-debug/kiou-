import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

export default function ContactPage() {
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
        [level]: { ...prev.education[level], [field]: value }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sirf tab check karega agar user ne type kiya ho, khali hone par submit hone dega
    if (formData.cnic && formData.cnic.length !== 13) {
      alert('Please enter a valid 13-digit CNIC number.');
      return;
    }

    if (formData.phoneNo && formData.phoneNo.length !== 11) {
      alert('Please enter a valid 11-digit Phone number.');
      return;
    }

    setLoading(true);

    const educationSummary = `
Matric/O-Level -> Inst: ${formData.education.matric.inst || 'N/A'}, Year: ${formData.education.matric.year || 'N/A'}, Marks: ${formData.education.matric.marks || 'N/A'}, Grade: ${formData.education.matric.grade || 'N/A'}
Intermediate/A-Level -> Inst: ${formData.education.intermediate.inst || 'N/A'}, Year: ${formData.education.intermediate.year || 'N/A'}, Marks: ${formData.education.intermediate.marks || 'N/A'}, Grade: ${formData.education.intermediate.grade || 'N/A'}
Graduation -> Inst: ${formData.education.graduation.inst || 'N/A'}, Year: ${formData.education.graduation.year || 'N/A'}, Marks: ${formData.education.graduation.marks || 'N/A'}, Grade: ${formData.education.graduation.grade || 'N/A'}
Other -> Inst: ${formData.education.other.inst || 'N/A'}, Year: ${formData.education.other.year || 'N/A'}, Marks: ${formData.education.other.marks || 'N/A'}, Grade: ${formData.education.other.grade || 'N/A'}
    `;

    const templateParams = {
      from_name: formData.fullName || 'N/A',
      father_name: formData.fatherName || 'N/A',
      cnic: formData.cnic || 'N/A',
      passport_no: formData.passportNo || 'N/A',
      dob: formData.dob || 'N/A',
      nationality: formData.nationality || 'N/A',
      gender: formData.gender,
      marital_status: formData.maritalStatus,
      phone_no: formData.phoneNo || 'N/A',
      alt_phone_no: formData.altPhoneNo || 'N/A',
      whatsapp_no: formData.whatsappNo || 'N/A',
      email: formData.email || 'N/A',
      campus_branch: formData.branch,
      address: formData.address || 'N/A',
      course_name: formData.courseName || 'N/A',
      duration: formData.programType || 'N/A',
      class_timing: formData.preferredTiming,
      education_summary: educationSummary
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Registration Form Submitted Successfully!');
      setLoading(false);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Form submission failed.');
      setLoading(false);
    });
  };

  return (
    <div className="bg-light py-5 min-vh-100">
      <div className="container py-4">
        <div className="mb-4">
          <Link to="/" className="btn btn-outline-primary fw-semibold rounded-pill px-4">
            ← Back to Home Page
          </Link>
        </div>

        {/* 3 Info Cards */}
        <div className="row g-4 text-center mb-5">
          <div className="col-lg-4 col-md-6">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column align-items-center">
              <h5 className="fw-bold text-dark text-uppercase mb-4">OUR CAMPUSES</h5>
              <div className="text-start w-100 mb-3 pb-3 border-bottom">
                <span className="badge bg-primary-subtle text-primary mb-2 fw-bold">Gulshan-e-Johar Branch</span>
                <p className="text-secondary small mb-0">B10A, Abdullah Terrace Gulshan-e-Johar Block #16 Karachi, Sindh Pakistan</p>
              </div>
              <div className="text-start w-100">
                <span className="badge bg-success-subtle text-success mb-2 fw-bold">DHA Branch</span>
                <p className="text-secondary small mb-0">17 C, 15th Commercial Street, DHA Phase 2 Extension, Karachi, Sindh Pakistan</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column align-items-center">
              <h5 className="fw-bold text-dark text-uppercase mb-4">PHONE NUMBER</h5>
              <div className="my-auto">
                <p className="text-secondary small mb-2">(+92) 317 8117227</p>
                <p className="text-secondary small mb-0">(+92) 21-34618666</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column align-items-center">
              <h5 className="fw-bold text-dark text-uppercase mb-4">EMAIL</h5>
              <div className="my-auto">
                <p className="text-secondary small mb-2">info@kiou.pk</p>
                <p className="text-secondary small mb-0">admission@kiou.pk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100">
              <h5 className="fw-bold text-dark mb-3">Gulshan-e-Johar Branch</h5>
              <div className="rounded-3 overflow-hidden border" style={{ height: '250px' }}>
                <iframe title="Johar Map" src="https://maps.google.com/maps?q=Block%2016%20Gulshan-e-Johar%2C%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 bg-white rounded-4 border shadow-sm h-100">
              <h5 className="fw-bold text-dark mb-3">DHA Phase 2 Extension Branch</h5>
              <div className="rounded-3 overflow-hidden border" style={{ height: '250px' }}>
                <iframe title="DHA Map" src="https://maps.google.com/maps?q=17%20C%2C%2015th%20commercial%20street%2C%20DHA%20phase%202%20Extension%2C%20Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form Box */}
        <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark mb-1">Registration Form</h3>
            <p className="text-muted small">Fill in the details below to apply for admission</p>
          </div>

          <form onSubmit={handleSubmit}>
            <h6 className="fw-bold text-primary mb-3 text-uppercase">Candidate Information</h6>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Name</label>
                <input type="text" className="form-control" placeholder="Enter candidate's name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Father Name</label>
                <input type="text" className="form-control" placeholder="Enter father's name" value={formData.fatherName} onChange={(e) => setFormData({...formData, fatherName: e.target.value})} />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">CNIC No</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g. 4210112345671" 
                  value={formData.cnic} 
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/\D/g, '');
                    if (onlyNums.length <= 13) {
                      setFormData({...formData, cnic: onlyNums});
                    }
                  }} 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label small fw-semibold">Passport No (If Applicable)</label>
                <input type="text" className="form-control" placeholder="Enter passport number" value={formData.passportNo} onChange={(e) => setFormData({...formData, passportNo: e.target.value})} />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-semibold">Date of Birth</label>
                <input type="date" className="form-control" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-semibold">Nationality</label>
                <input type="text" className="form-control" value={formData.nationality} onChange={(e) => setFormData({...formData, nationality: e.target.value})} />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-semibold">Marital Status</label>
                <select className="form-select" value={formData.maritalStatus} onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})}>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold d-block">Gender</label>
                <div className="d-flex flex-wrap gap-4 mt-1">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="genderOptions" id="genderMale" checked={formData.gender === 'Male'} onChange={() => setFormData({...formData, gender: 'Male'})} />
                    <label className="form-check-label small" htmlFor="genderMale">Male</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="genderOptions" id="genderFemale" checked={formData.gender === 'Female'} onChange={() => setFormData({...formData, gender: 'Female'})} />
                    <label className="form-check-label small" htmlFor="genderFemale">Female</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="genderOptions" id="genderOther" checked={formData.gender === 'Other / Prefer not to say'} onChange={() => setFormData({...formData, gender: 'Other / Prefer not to say'})} />
                    <label className="form-check-label small" htmlFor="genderOther">Other / Prefer not to say</label>
                  </div>
                </div>
              </div>
            </div>

            <h6 className="fw-bold text-primary mb-3 text-uppercase">Contact Information</h6>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label small fw-semibold">Phone No</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="03XXXXXXXXX" 
                  value={formData.phoneNo} 
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/\D/g, '');
                    if (onlyNums.length <= 11) {
                      setFormData({...formData, phoneNo: onlyNums});
                    }
                  }} 
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-semibold">WhatsApp No</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="03XXXXXXXXX" 
                  value={formData.whatsappNo} 
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/\D/g, '');
                    if (onlyNums.length <= 11) {
                      setFormData({...formData, whatsappNo: onlyNums});
                    }
                  }} 
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-semibold">Alternative No</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Optional" 
                  value={formData.altPhoneNo} 
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/\D/g, '');
                    if (onlyNums.length <= 11) {
                      setFormData({...formData, altPhoneNo: onlyNums});
                    }
                  }} 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label small fw-semibold">Email Address</label>
                <input type="email" className="form-control" placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Select Campus Branch</label>
                <select className="form-select" value={formData.branch} onChange={(e) => setFormData({...formData, branch: e.target.value})}>
                  <option value="Gulshan-e-Johar Branch">Gulshan-e-Johar Branch</option>
                  <option value="DHA Branch">DHA Branch (Phase 2 Ext)</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">Address</label>
                <input type="text" className="form-control" placeholder="Enter full address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
              </div>
            </div>

            <h6 className="fw-bold text-primary mb-3 text-uppercase">Course Information</h6>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Name of Course You Are Applying For</label>
                <select className="form-select" value={formData.courseName} onChange={(e) => setFormData({...formData, courseName: e.target.value})}>
                  <option value="">-- Select Course --</option>
                  <option value="Basic Medical Ultrasonography">One year Diploma in Medical Ultrasonography</option>
                  <option value="Advancced Medical Ultrasonography">Two year Diploma in Medical Ultrasonography</option>
                  <option value="Echocardiography (ECHO)">One Year Diploma in Echocardiography (ECHO)</option>
                  <option value="Echocardiography (ECHO)">Two Year Diploma in Echocardiography (ECHO)</option> 
                  <option value="Aesthetic Skin Care">Two year Diploma in Aesthetic Skin Care</option>
                  <option value="Vascular Doppler Ultrasound">Vascular Doppler Ultrasound</option>
                  <option value="Physiotherapy">Two year Diploma in Physiotherapy</option>
                  <option value="Small Parts Ultrasound">Small Parts Ultrasound</option>
                  <option value="Advanced Color Doppler">Advanced Color Doppler</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Select Duration / Program</label>
                <select className="form-select" value={formData.programType} onChange={(e) => setFormData({...formData, programType: e.target.value})}>
                  <option value="">-- Select Duration --</option>
                  <option value="3-Months Diploma (crash programme)">3-Months Diploma (crash Course for 1 year Diploma)</option>
                  <option value="6-Months Diploma">6-Months Diploma (6 Month Crash course for 2 year Diploma) </option>
                  <option value="12-Months Diploma">12-Months Diploma</option>
                  <option value="2-Years Master Diploma">2-Years Master Diploma</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold d-block">Preferred Class Timing</label>
                <div className="d-flex flex-wrap gap-4 mt-1">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="timingOptions" id="timeMorning" checked={formData.preferredTiming === 'Morning Batch'} onChange={() => setFormData({...formData, preferredTiming: 'Morning Batch'})} />
                    <label className="form-check-label small" htmlFor="timeMorning">Morning Batch</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="timingOptions" id="timeAfternoon" checked={formData.preferredTiming === 'Afternoon Batch'} onChange={() => setFormData({...formData, preferredTiming: 'Afternoon Batch'})} />
                    <label className="form-check-label small" htmlFor="timeAfternoon">Afternoon Batch</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="timingOptions" id="timeEvening" checked={formData.preferredTiming === 'Evening Batch'} onChange={() => setFormData({...formData, preferredTiming: 'Evening Batch'})} />
                    <label className="form-check-label small" htmlFor="timeEvening">Evening Batch</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="timingOptions" id="timeWeekend" checked={formData.preferredTiming === 'Weekend Batch'} onChange={() => setFormData({...formData, preferredTiming: 'Weekend Batch'})} />
                    <label className="form-check-label small" htmlFor="timeWeekend">Weekend Batch</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="timingOptions" id="timeOnline" checked={formData.preferredTiming === 'Online Batch'} onChange={() => setFormData({...formData, preferredTiming: 'Online Batch'})} />
                    <label className="form-check-label small" htmlFor="timeOnline">Online Batch</label>
                  </div>
                </div>
              </div>
            </div>

            <h6 className="fw-bold text-primary mb-3 text-uppercase">Educational Information</h6>
            <div className="table-responsive mb-4">
              <table className="table table-bordered align-middle small">
                <thead className="table-light">
                  <tr>
                    <th>Education Level</th>
                    <th>Institution Name</th>
                    <th>Year of Passing</th>
                    <th>Marks/GPA</th>
                    <th>Grade / Division</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-semibold">Matric / O-Level</td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.matric.inst} onChange={(e) => handleEducationChange('matric', 'inst', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.matric.year} onChange={(e) => handleEducationChange('matric', 'year', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.matric.marks} onChange={(e) => handleEducationChange('matric', 'marks', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.matric.grade} onChange={(e) => handleEducationChange('matric', 'grade', e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">Intermediate / A-Level</td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.intermediate.inst} onChange={(e) => handleEducationChange('intermediate', 'inst', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.intermediate.year} onChange={(e) => handleEducationChange('intermediate', 'year', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.intermediate.marks} onChange={(e) => handleEducationChange('intermediate', 'marks', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.intermediate.grade} onChange={(e) => handleEducationChange('intermediate', 'grade', e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">Graduation / Bachelor's</td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.graduation.inst} onChange={(e) => handleEducationChange('graduation', 'inst', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.graduation.year} onChange={(e) => handleEducationChange('graduation', 'year', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.graduation.marks} onChange={(e) => handleEducationChange('graduation', 'marks', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.graduation.grade} onChange={(e) => handleEducationChange('graduation', 'grade', e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">Other<br/><small className="text-muted">(Diploma/Certificate)</small></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.other.inst} onChange={(e) => handleEducationChange('other', 'inst', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.other.year} onChange={(e) => handleEducationChange('other', 'year', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.other.marks} onChange={(e) => handleEducationChange('other', 'marks', e.target.value)} /></td>
                    <td><input type="text" className="form-control form-control-sm" value={formData.education.other.grade} onChange={(e) => handleEducationChange('other', 'grade', e.target.value)} /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="termsCheck" checked={formData.agreeTerms} onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})} />
              <label className="form-check-label small text-muted" htmlFor="termsCheck">
                "I hereby acknowledge that I have read, understood, and agree to be bound by the Terms and Conditions."
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold py-3 shadow-sm" disabled={loading}>
              {loading ? 'Submitting Registration...' : 'Submit Registration'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}