const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React",
    link: "https://portfolios-delta-eight.vercel.app/"
  },
  {
    title: "Todo App",
    description: "Todo app using Vue3",
    link: "https://portfolios-delta-eight.vercel.app/product"
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