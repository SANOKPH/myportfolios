const projects = [
  {
    title: "Keno webiste",
    description: "Build the webiste Game",
    // link: "https://portfolios-delta-eight.vercel.app/"
  },
  {
    title: "Lotto8888 Website",
    description: "Build the Lotto8888 Website" ,
    // link: "https://portfolios-delta-eight.vercel.app/product"
  },
  {
    title: "Admin System",
    description: "Join the team to build the Admin System" ,
    // link: "https://portfolios-delta-eight.vercel.app/product"
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
            {/* <a href={project.link}>View</a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;