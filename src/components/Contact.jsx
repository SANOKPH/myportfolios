import React from 'react';
// import './Contact.css'; //

const Contact = () => {
  return (
    <section id="contact" className="section" data-aos="fade-up">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="contact-container">
        <p className="contact-item">
          <strong>Telegram:</strong> 
          <a 
            href="https://t.me/vannok_p" 
            target="_blank" 
            rel="noopener noreferrer"
            className="Telegram-link"
          >
            t.me/vannok_p
          </a>
        </p>
        <p className="contact-item">
          <strong>Email:</strong> 
          <a href="mailto:payangsanok@email.com"> payangsanok@email.com</a>
        </p>
        
        <p className="contact-item">
          <strong>LinkedIn:</strong> 
          <a 
            href="https://www.com.com/in/your-profile-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            linkedin.com/in/your-profile-username
          </a>
        </p>

      </div>
    </section>
  );
};

export default Contact;