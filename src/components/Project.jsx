const projects = [
  {
    title: "Todo App",
    description: "Todo App using Vue 3",
    link: "https://portfolios-delta-eight.vercel.app/"
  },
  {
    title: "Web Design Website",
    description: "HTML CSS Bootstrap",
    link: "https://web-design-nine-dun.vercel.app/index.html"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;