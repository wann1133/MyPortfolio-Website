const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-featured online shopping platform with payment integration and inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for teams to manage projects and collaborate in real-time.",
      tags: ["React", "Firebase", "Material UI"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      title: "Travel Blog",
      description: "A responsive blog platform for travelers to share their experiences and photos.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1234&q=80"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="fade-in-up">My Projects</h2>
        </div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card fade-in-up" key={project.id} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#" className="btn btn-outline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;