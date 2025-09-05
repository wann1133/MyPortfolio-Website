const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Frontend Development",
      icon: "💻",
      description: "Creating responsive and interactive user interfaces using modern frameworks like React and Vue."
    },
    {
      id: 2,
      title: "Backend Development",
      icon: "⚙️",
      description: "Building robust server-side applications with Node.js, Express, and databases like MongoDB."
    },
    {
      id: 3,
      title: "Machine Learning",
      icon: "🎨",
      description: "Making machine learning models such as classification, regression, clustering, and more."
    },
    {
      id: 4,
      title: "Natural Language Processing",
      icon: "📱",
      description: "Making natural language processing models and chatbots with python."
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        <div className="skills-container">
          {skills.map(skill => (
            <div className="skill-card" key={skill.id}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;