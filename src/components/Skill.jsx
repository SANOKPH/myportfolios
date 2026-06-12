const skillsData = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "HTML5 & CSS3", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Vue.js", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  {name: "PHP",level: "Advanced"},
  {name: "Laravel",level: "Advanced"},
  {name: "CodeIgniter4",level: "Advanced"},
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