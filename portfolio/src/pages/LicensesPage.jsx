import { useState } from 'react';
import { motion } from 'framer-motion';
import './Licenses.css';

const Licenses = () => {
  // Sample data for certifications - you can replace with your actual certifications
  const certifications = [
    {
      id: 1,
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding Indonesia",
      date: "September 2025",
      image: "/src/assets/sertif1.png",
      description: "Kelas ditujukan bagi pemula yang ingin belajar dasar pemrograman Python dengan mengacu pada standar industri."
    },
    {
      id: 2,
      title: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding Indonesia",
      date: "May 2025",
      image: "/src/assets/sertif2.png",
      description: "Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang data analyst atau data scientist dengan mempelajari bahasa Structured Query Language (SQL)."
    },
    {
      id: 3,
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Indonesia",
      date: "May 2025",
      image: "/src/assets/sertif3.png",
      description: "Kelas ini ditujukan untuk seorang Front-End Web Developer yang ingin mengembangkan website yang memiliki fungsionalitas lebih daripada hanya media informasi saja, sesuai dengan standar industri."
    },
    {
      id: 4,
      title: "Belajar Machine Learning Untuk Pemula",
      issuer: "Dicoding Indonesia",
      date: "September 2025",
      image: "/src/assets/sertif4.png",
      description: "Kelas ini dirancang untuk pemula yang ingin memulai karier di bidang Machine Learning dengan mengikuti standar kompetensi industri terkini. Setelah menyelesaikan kelas ini, siswa memiliki kemampuan untuk mengembangkan proyek machine learning yang berfokus pada klasifikasi, regresi, dan clustering pada data tabular."
    },
    {
      id: 5,
      title: "Belajar Dasar Data Science",
      issuer: "Dicoding Indonesia",
      date: "May 2025",
      image: "/src/assets/sertif5.png",
      description: "Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang data scientist dengan mempelajari konsep dasar data science. Setelah mengikuti kelas, siswa diharapkan mampu mengenal, memahami, dan menelaah dasar-dasar data science dengan baik."
    },
    {
      id: 6,
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "May 2025",
      image: "/src/assets/sertif6.png",
      description: "Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang Web Developer/Back-end developer menggunakan teknologi Node.js menggunakan standar kompetensi industri yang divalidasi oleh AWS. Di akhir kelas, siswa dapat menguasai dasar JavaScript untuk pengembangan aplikasi web menggunakan Node.js."
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
          <motion.h2 
            className="fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Licenses & Certifications
          </motion.h2>
        </div>
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <motion.div 
              className="certification-card fade-in-up" 
              key={cert.id}
              onClick={() => openModal(cert)}
              style={{animationDelay: `${index * 0.1}s`}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="certification-img">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for displaying certification image */}
      {isModalOpen && selectedCert && (
        <motion.div 
          className="modal-overlay" 
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <div className="modal-img-container">
              <img src={selectedCert.image} alt={selectedCert.title} className="modal-img" />
            </div>
            <div className="modal-info">
              <h3>{selectedCert.title}</h3>
              <p className="issuer">{selectedCert.issuer}</p>
              <p className="date">{selectedCert.date}</p>
              <p className="description">{selectedCert.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Licenses;