const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="fade-in-up">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-img fade-in-up">
            <img src="src/assets/foto.jpg" />
          </div>
          <div className="about-text fade-in-up">
            <h3>I'm Alwan, a passionate Web Developer</h3>
            <p>Hello! I'm Alwan, a professional web developer with over 5 years of experience creating modern, responsive websites and applications. I specialize in front-end development with React, but I'm also proficient in back-end technologies.</p>
            <p>My approach combines technical expertise with an eye for design, ensuring that every project I work on is not only functional but also visually appealing and user-friendly.</p>
            <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.</p>
            <a href="#" className="btn">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;