import { useState } from 'react';
import './Licenses.css';

const Licenses = () => {
  // Sample data for certifications - you can replace with your actual certifications
  const certifications = [
    {
      id: 1,
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding Indonesia",
      date: "Sept 2025",
      image: "",
      description: "Validates technical expertise in designing and deploying scalable systems on AWS."
    },
    {
      id: 2,
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "November 2022",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Demonstrates proficiency in developing, deploying, and debugging cloud applications using Google Cloud."
    },
    {
      id: 3,
      title: "Certified ScrumMaster",
      issuer: "Scrum Alliance",
      date: "July 2021",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Validates expertise in Scrum framework and agile project management."
    },
    {
      id: 4,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "January 2022",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Demonstrates foundational level knowledge of cloud services and how they are provided with Microsoft Azure."
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
          <h2>Licenses & Certifications</h2>
        </div>
        <div className="certifications-container">
          {certifications.map(cert => (
            <div 
              className="certification-card" 
              key={cert.id}
              onClick={() => openModal(cert)}
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