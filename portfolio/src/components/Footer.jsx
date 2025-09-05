import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Alwan Farras</h4>
            <p>A passionate web developer creating modern and responsive websites with great user experiences.</p>
            <div className="social-links">
              <a href="https://github.com/wann1133" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/muhammad-alwan-farras-76829728b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/licenses">Licenses</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p><FaEnvelope /> alwanfarras711@gmail.com</p>
            <p><FaPhone /> +62 881025751054</p>
            <p><FaMapMarkerAlt /> Jakarta, JKT, Indonesia</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Alwan Farras. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;