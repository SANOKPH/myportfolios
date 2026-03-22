const educationData = [
  {
    school: "University of Institute of New Khmer",
    degree: "Bachelor of Science in Computer Science",
    year: "2025 - Present"
  },
  {
    school: "Passerellesnumeriques Cambodia(PNC)",
    degree: "Associate Degree in Web Development",
    year: "2023 - 2024" 
  },
  {
    school: "Baccalaureate Exam (Bac II) - Banlung City Dormitory High School",
    degree: "High School Diploma",
    year: "2021 - 2022"
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 data-aos="fade-up">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div
            className="education-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;