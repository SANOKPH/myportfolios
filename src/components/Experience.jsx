import React from 'react';
import "../css/Experience.css";

// 1. Import your local images here
import xemicolonLogo from '../Icons/Xemicolon.png'; 
// import sambathLogo from '../Icons/laravel.png';
import zinationLogo from '../Icons/Zination.png';

const experienceData = [
  {
    company: "Xemicolon Technology",
    role: "Full Stack Developer",
    period: "2025 - Present",
    location: "Phnom Penh, Cambodia",
    icon: xemicolonLogo, 
    color: "#e74c3c", 
    description: [
    <> 
      Build and maintain RESTful APIs to integrate seamlessly with frontend
      applications and third-party services. Developed customer-defined UI with
      pixel-perfect layouts and consistent design across the application. Built
      complex and deeply nested UI components with a strong focus on
      reusability, maintainability, scalability, and performance optimization.
      Assisted in feature enhancements and system updates while ensuring
      backward compatibility across existing modules.
      Maintained and enhanced e-commerce platforms by fixing bugs, refactoring
      legacy code, and improving overall system stability and performance.
      Developed responsive frontend interfaces optimized for desktop, tablet, and
      mobile devices using JavaScript and Vue.js. Integrated frontend applications
      with REST APIs developed in PHP CodeIgniter and JavaScript.
      Designed and implemented API transactions including deposit, withdrawal,
      wallet management, balance tracking, and transaction history features.
      Developed and integrated RESTful APIs for blockchain-related operations
      and digital wallet systems. Wrote optimized MySQL queries for retrieving,
      inserting, updating, and deleting data while ensuring database performance
      and data integrity. Collaborated with backend and frontend teams to deliver
      secure, scalable, and efficient web applications.
    </>
     
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