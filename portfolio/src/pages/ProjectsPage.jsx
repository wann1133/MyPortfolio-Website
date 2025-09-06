import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Steak Website",
      description: "a website that displays a menu for a steak restaurant .",
      tags: ["Javascript", "HTML", "Tailwind CSS"],
      image: "src/assets/steak.png",
      githubUrl: "https://github.com/wann1133/Steak20Wan"
    },
    {
      id: 2,
      title: "AI Chatbot",
      description: "a chatbot website to answer questions about school children with OpenAI API.",
      tags: ["Javascript", "HTML", "Tailwind CSS"],
      image: "src/assets/chatbot.png",
      githubUrl: "https://github.com/wann1133/chatbot-sederhana"
    },
    {
      id: 3,
      title: "CodingBoy",
      description: "a platform for buying and selling websites and hosting services.",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      image: "src/assets/CodingBoy.png",
      githubUrl: "https://github.com/wann1133/codingboy-platform"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <motion.h2 
            className="fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
        </div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card fade-in-up" 
              key={project.id} 
              style={{animationDelay: `${index * 0.1}s`}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
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
                <motion.a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;