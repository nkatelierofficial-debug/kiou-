# 🎓 KIOU - Website & Admission Portal

A modern, responsive, and scalable web application built for **Karachi Institute of Ultrasonography (KIOU)**. The platform provides detailed information about courses, campuses, and allows prospective students to submit online admission forms seamlessly.

---

## 🚀 Features

* **Responsive Design:** Optimized for Mobile, Tablet, and Desktop screens using **Bootstrap 5**.
* **Online Admission Form:** Multi-section registration form for candidates including personal details, contact info, course selection, and educational background.
* **EmailJS Integration:** Instant email notifications sent upon admission form submission without needing a backend server.
* **Campus Information & Maps:** Embedded Google Maps for both **Gulshan-e-Johar** and **DHA Phase 2 Ext** branches.
* **Secure Environment Variables:** Sensitive credentials (like EmailJS keys) are hidden using `.env` files.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Bootstrap 5 & Custom CSS
* **Email Service:** EmailJS (`@emailjs/browser`)
* **Icons & UI Elements:** SVG / Bootstrap Components
* **Version Control:** Git & GitHub

---

## 📦 Project Structure

```text
KIOU_WEB/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── assets/          # Project specific images/icons
│   ├── components/      # React Components (Contact.jsx, Navbar, Footer, etc.)
│   ├── App.jsx          # Main App Component
│   └── main.jsx         # Vite Entry Point
├── .env                 # Local Environment Variables (Git Ignored)
├── .gitignore           # Git Ignored Files
├── index.html           # HTML Template
├── package.json         # Project Dependencies
└── vite.config.js       # Vite Configuration

## ⚙️ Local Setup & Installation

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository
```bash
git clone [https://github.com/nkatelierofficial-debug/kiou-.git](https://github.com/nkatelierofficial-debug/kiou-.git)
cd KIOU_WEB

npm install

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

npm run dev

Contact & Support
For official inquiries regarding KIOU:

Email: info@kiou.pk | admission@kiou.pk

Phone: (+92) 317 8117227 | (+92) 21-34618666

---

## 💻 Developed By

Designed & Developed with ❤️ by **[Khandev Labs](https://portfolio-rc1e.vercel.app)**