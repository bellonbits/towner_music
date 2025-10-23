import MusicalNotes from './MusicalNotes';
import { BookOpen, Download, Eye } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Coordination Development for the Drumset',
      date: '2009',
      description: 'A comprehensive method for developing limb independence and coordination skills essential for modern drumming.',
      cover: '/assets/images/publications/coordination-development.jpg',
      previewPdf: '/assets/pdf/coordination-development-preview.pdf',
      fullPdf: '/assets/pdf/coordination-development-full.pdf'
    },
    {
      title: 'Jazz Rhythms and Patterns',
      date: '2015',
      description: 'Essential rhythmic vocabulary for jazz drummers with exercises and play-along tracks.',
      cover: '/assets/images/publications/jazz-rhythms-patterns.jpg',
      previewPdf: '/assets/pdf/jazz-rhythms-patterns-preview.pdf',
      fullPdf: '/assets/pdf/jazz-rhythms-patterns-full.pdf'
    },
    {
      title: 'Advanced Rhythmic Concepts',
      date: '2025',
      description: 'New educational materials exploring complex rhythmic structures and polyrhythmic applications.',
      cover: '/assets/images/publications/advanced-rhythmic-concepts.jpg',
      previewPdf: '/assets/pdf/advanced-rhythmic-concepts-preview.pdf',
      fullPdf: null
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Books & Publications</h2>
          <span>Educational Materials</span>
        </div>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="publication-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="publication-cover">
                <img 
                  src={pub.cover} 
                  alt={`${pub.title} cover`}
                  className="publication-image"
                />
                <div className="publication-overlay">
                  <BookOpen size={48} />
                </div>
              </div>
              <div className="publication-details">
                <h3>{pub.title}</h3>
                <p className="publication-date">Released: {pub.date}</p>
                <p className="publication-desc">{pub.description}</p>
                <div className="publication-links">
                  {pub.fullPdf ? (
                    <>
                      <a 
                        href={pub.fullPdf} 
                        className="btn-small"
                        download={`${pub.title.replace(/\s+/g, '-').toLowerCase()}.pdf`}
                      >
                        <Download size={16} />
                        Download PDF
                      </a>
                      <a 
                        href={pub.previewPdf} 
                        className="btn-small btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye size={16} />
                        Preview
                      </a>
                    </>
                  ) : (
                    <a href="#contact" className="btn-small">
                      Notify When Available
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional resources section */}
        <div className="publications-resources" data-aos="fade-up">
          <h3>Additional Resources</h3>
          <div className="resources-grid">
            <div className="resource-item">
              <div className="resource-icon">
                <Download size={24} />
              </div>
              <div className="resource-content">
                <h4>Free Exercises</h4>
                <p>Download complimentary drum exercises and practice routines</p>
                <a 
                  href="/assets/pdf/free-drum-exercises.pdf" 
                  className="btn-small"
                  download="free-drum-exercises.pdf"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="resource-item">
              <div className="resource-icon">
                <BookOpen size={24} />
              </div>
              <div className="resource-content">
                <h4>Study Guides</h4>
                <p>Comprehensive study guides for each publication</p>
                <a 
                  href="/assets/pdf/publications-study-guides.pdf" 
                  className="btn-small"
                  download="publications-study-guides.pdf"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;