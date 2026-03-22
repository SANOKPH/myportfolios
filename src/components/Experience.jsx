import React from 'react';
import "../css/Experience.css";

// 1. Import your local images here
import xemicolonLogo from '../Icons/javascript.png'; 
import sambathLogo from '../Icons/laravel.png';
import zinationLogo from '../Icons/Zination.png';

const experienceData = [
  {
    company: "Xemicolon Technology",
    role: "Full Stack Developer",
    period: "Jun 2025 - Present",
    location: "Phnom Penh, Cambodia",
    icon: xemicolonLogo, 
    color: "#e74c3c", 
    description: [
      "Developed responsive web applications using React and improved website performance by 30%.",
      "E-commerce project: using CodeIgniter4, PHP, Javascript, VueJs.",
      "Built the API for a mobile app and web using CodeIgniter4.",
      "QA: Testing for projects, backend, frontend, and mobile app.",
      "Joined the team to develop the Admin system using CodeIgniter4 framework."
    ]
  },
  {
    company: "SAMBATHYEUNG",
    role: "Web Developer",
    period: "Dec 2024 - May 2025",
    location: "Phnom Penh, Cambodia",
    icon: sambathLogo, 
    color: "#3ce794", 
    description: [
      "Built the company’s portfolio and E-commerce websites.",
      "Developed and optimized frontend interfaces, ensuring responsiveness across devices by 30%.",
      "Admin system integrated with a REST API developed in C# and Vue.js.",
      "Maintain and monitor websites to ensure smooth user experience and high availability.",
      "Integrate backend APIs to handle logic and fix performance/compatibility issues."
    ]
  },
  {
    company: "Zination Cambodia",
    role: "Software Developer Intern",
    period: "Aug 2024 - Nov 2024",
    location: "Phnom Penh, Cambodia",
    icon: zinationLogo, 
    color: "#e74c3c", 
    description: [
      <>
        Trained in Full-Stack Development, including frontend and backend technologies.<br/>
        Maintain, monitor, and optimize web applications to ensure high availability <br/>
        performance, and smooth user experience. <br/>
        setup a SAAS a reusable boilerplate for Full-Stack Development",Django Rest-API. Django with <br/>
        PostgreSQL, API Integration with frontend React Js, React Expo, React Native.",Startup build <br/>
        website static frontend React Js, React Expo, React Native.QA: Testing for projects, backend, <br/>
        frontend, and mobile app. Joined the team to develop the Admin system using CodeIgniter4 <br/>
        Self-learning: Trained in JavaScript, Node.js, React.js, React Native.
      </>,
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title" data-aos="fade-left">Work Experience</h2>
      <div className="experience-container">
        <div className="vertical-line"></div>
        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <div className="experience-item" key={index} data-aos="fade-left">
              
              {/* 3. Render the image instead of text */}
              <div className="timeline-marker" style={{ border: `2px solid ${exp.color}`, backgroundColor: '#fff' }}>
                <img src={exp.icon} alt={exp.company} className="timeline-icon-img" />
              </div>

              <div className="experience-content">
                <span className="experience-period">{exp.period}</span>
                <h3 className="experience-title">{exp.company} | {exp.role}</h3>
                <p className="experience-location">{exp.location}</p>
                <ul className="experience-description">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;