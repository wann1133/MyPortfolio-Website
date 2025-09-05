import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="fade-in-up">Contact Me</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info fade-in-up">
            <h3>Get In Touch</h3>
            <div className="contact-detail">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Jakarta, JKT, Indonesia</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>alwanfarras711@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">📱</div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+62 881025751054</p>
              </div>
            </div>
          </div>
          <div className="contact-form fade-in-up">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;