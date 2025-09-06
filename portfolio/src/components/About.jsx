import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
        </div>
        <div className="about-content">
          <motion.div 
            className="about-img"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src="/src/assets/foto.jpg" alt="Alwan" />
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>I'm Alwan, a passionate Web Developer and AI Engineer</h3>
            <p>I am a professional web developer, building modern websites and applications. As a graduate of Gunadarma University with a Bachelor's degree in Information Systems, I have a strong foundation in bridging business needs with efficient technical solutions.</p>
            <p>My primary specialization is modern front-end development, particularly with React and Next.js, but I also possess solid proficiency in back-end technologies. In my portfolio, I have successfully developed a range of projects, from dynamic web applications using Laravel to highly optimized interfaces with Next.js. Beyond traditional web development, I have also explored and built machine learning models.</p>
            <p>My approach combines deep technical expertise with a keen eye for design, ensuring that every solution I create is not only robust and functional but also visually appealing and user-friendly.</p>
            {/* Update the download link to point to your CV file in the public folder */}
            <motion.a 
              href="/Alwan_Farras_CV.pdf" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download="Alwan_Farras_CV.pdf"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;