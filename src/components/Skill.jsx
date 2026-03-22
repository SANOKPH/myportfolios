const skillsData = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "HTML & CSS", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 data-aos="zoom-in">Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            
          >
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;