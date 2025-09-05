import { useState } from 'react';
import './Licenses.css';

const Licenses = () => {
  // Sample data for certifications - you can replace with your actual certifications
  const certifications = [
    {
      id: 1,
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding Indonesia",
      date: "September 2025",
      image: "src/assets/sertif1.png",
      description: "Validates technical expertise in designing and deploying scalable systems on AWS."
    },
    {
      id: 2,
      title: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding Indonesia",
      date: "May 2025",
      image: "src/assets/sertif2.png",
      description: "Demonstrates proficiency in developing, deploying, and debugging cloud applications using Google Cloud."
    },
    {
      id: 3,
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Indonesia",
      date: "May 2025",
      image: "src/assets/sertif3.png",
      description: "Validates expertise in Scrum framework and agile project management."
    },
    {
      id: 4,
      title: "Belajar Machine Learning Untuk Pemula",
      issuer: "Dicoding Indonesia",
      date: "September 2025",
      image: "src/assets/sertif4.png",
      description: "Demonstrates foundational level knowledge of cloud services and how they are provided with Microsoft Azure."
    },
    {
      id: 5,
      title: "Belajar Dasar Data Science",
      issuer: "Dicoding Indonesia",
      date: "May 2025",
      image: "src/assets/sertif5.png",
      description: "Validates expertise in Scrum framework and agile project management."
    },
    {
      id: 6,
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "May 2025",
      image: "src/assets/sertif6.png",
      description: "Validates expertise in Scrum framework and agile project management."
    }
    
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="licenses" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="fade-in-up">Licenses & Certifications</h2>
        </div>
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <div 
              className="certification-card fade-in-up" 
              key={cert.id}
              onClick={() => openModal(cert)}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="certification-img">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying certification image */}
      {isModalOpen && selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <div className="modal-img">
              <img src={selectedCert.image} alt={selectedCert.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedCert.title}</h3>
              <p className="issuer">{selectedCert.issuer}</p>
              <p className="date">{selectedCert.date}</p>
              <p className="description">{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Licenses;