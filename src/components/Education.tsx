import MusicalNotes from './MusicalNotes';

const galleryItems = [
  { src: '/assets/e1.jpg', alt: 'Towner teaching students in workshop', caption: 'Workshop Instruction' },
  { src: '/assets/e2.png', alt: 'Group drumming class', caption: 'Group Classes' },
  { src: '/assets/e3.png', alt: 'International program in Kenya', caption: 'Kenya Program' },
  { src: '/assets/e4.png', alt: 'Masterclass performance', caption: 'Masterclass' },
];

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  console.error('Failed to load image:', e.currentTarget.src);
  e.currentTarget.style.border = '2px dashed red';
  e.currentTarget.alt = 'Image failed to load: ' + e.currentTarget.alt;
};

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <span>Inspiring the Next Generation</span>
        </div>
        <div className="education-content">
          <div className="education-text" data-aos="fade-right">
            <div className="education-header">
              <h3>Empowering Young Musicians</h3>
              <div className="education-stats">
                <div className="stat-item">
                  <span className="stat-number">40+</span>
                  <span className="stat-label">Years Teaching</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">8,000+</span>
                  <span className="stat-label">Students</span>
                </div>
              </div>
            </div>
            <div className="education-paragraphs">
              <p>
                Towner Galaher is passionately committed to music education across cultures and continents. His
                innovative teaching approach combines technical fundamentals with cultural context and creative
                expression, making drumming accessible to students of all backgrounds.
              </p>
              <p>
                Through his "Coordination Development for the Drum Set" method, Towner has created a systematized
                approach to building drumming proficiency that has helped countless students advance their skills.
              </p>
              <p>
                In recent years, Towner has extended his teaching to international programs in Kenya, working with
                children to develop their musical abilities while fostering cultural exchange through the universal
                language of music.
              </p>
              <p>
                Whether teaching private lessons, workshops, masterclasses, or community programs, Towner approaches
                education with the same dedication and artistry that characterizes his performance career.
              </p>
            </div>
            <div className="education-actions">
              <a href="#contact" className="btn">
                Explore Programs
              </a>
              <a href="#contact" className="btn btn-secondary">
                Download Brochure
              </a>
            </div>
          </div>
          <div className="education-gallery" data-aos="fade-left">
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <div className={`gallery-item item-${index + 1}`} key={item.src}>
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" onError={handleImageError} />
                  <div className="gallery-caption">
                    <span>{item.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
