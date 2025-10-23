import MusicalNotes from './MusicalNotes';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <span>Inspiring the Next Generation</span>
        </div>
        <div className="education-content">
          <div className="education-text" data-aos="fade-right">
            <h3>Empowering Young Musicians</h3>
            <p>Towner Galaher is passionately committed to music education across cultures and continents. His innovative teaching approach combines technical fundamentals with cultural context and creative expression, making drumming accessible to students of all backgrounds.</p>
            <p>Through his "Coordination Development for the Drum Set" method, Towner has created a systematized approach to building drumming proficiency that has helped countless students advance their skills.</p>
            <p>In recent years, Towner has extended his teaching to international programs in Kenya, working with children to develop their musical abilities while fostering cultural exchange through the universal language of music.</p>
            <p>Whether teaching private lessons, workshops, masterclasses, or community programs, Towner approaches education with the same dedication and artistry that characterizes his performance career.</p>
            <a href="#contact" className="btn">Explore Programs</a>
          </div>
          <div className="education-image" data-aos="fade-left">
            <div className="education-gallery">
              <div className="education-placeholder"></div>
              <div className="education-placeholder"></div>
              <div className="education-placeholder"></div>
              <div className="education-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
