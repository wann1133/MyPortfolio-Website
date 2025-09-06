import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // EmailJS configuration
    const serviceId = 'service_rad5wne';
    const templateId = 'template_p3cm0rn';
    const publicKey = '8izJsFnIy-BDmHdL3';
    
    // Send email using EmailJS
    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'alwanfarras711@gmail.com'
      },
      publicKey
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setShowNotification(true); // Show the cool notification
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <motion.h2
            className="fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact Me
          </motion.h2>
        </div>
        <div className="contact-container">
          <motion.div 
            className="contact-info fade-in-up"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
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
          </motion.div>
          <motion.div 
            className="contact-form fade-in-up"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
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
              
              <motion.button 
                type="submit" 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Cool Success Notification Overlay */}
      <div className={`notification-overlay ${showNotification ? 'show' : ''}`}>
        <div className="notification-content">
          <div className="notification-icon">✓</div>
          <h2 className="notification-title">MESSAGE SENT!</h2>
          <p className="notification-message">
            Thank you for reaching out! Your message has been successfully sent. 
            I'll get back to you as soon as possible.
          </p>
          <button className="notification-close" onClick={closeNotification}>
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;