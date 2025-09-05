const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-shooting-stars">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className="hero-floating-elements">
        <div className="hero-floating-element"></div>
        <div className="hero-floating-element"></div>
        <div className="hero-floating-element"></div>
        <div className="hero-floating-element"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>Hello, I'm <span style={{ color: '#8f94fb' }}>M.Alwan Farras</span><br />Web Developer</h1>
          <p>I create beautiful, functional websites and applications with a focus on user experience and modern design principles.</p>
          <div className="hero-btns">
            <a href="https://github.com/wann1133" target="_blank" rel="noopener noreferrer" className="btn">View My GitHub</a>
            <a href="contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;