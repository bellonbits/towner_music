import MusicalNotes from './MusicalNotes';

const Bio = () => {
  return (
    <section id="bio" className="bio-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Biography</h2>
          <span>Jazz Traditions & Modern Explorations</span>
        </div>
        <div className="bio-content">
          <div className="bio-image" data-aos="fade-right">
            <img 
              src="/assets/images/bio/professional-photo.jpg" 
              alt="Towner Galaher - Professional Photo"
              className="bio-photo"
            />
          </div>
          <div className="bio-text" data-aos="fade-left">
            <h3>Master of Rhythm & Composition</h3>
            <p>Towner Galaher is an accomplished jazz drummer, composer, bandleader, arranger, and educator based in New York. With decades of performance experience and a deep knowledge of jazz traditions, Towner has established himself as a versatile musician who bridges classic organ trio sounds with contemporary jazz expressions.</p>
            <p>His musical journey began with mentors like Mel Brown, who introduced him to jazz and inspired his appreciation for legends like John Coltrane and Miles Davis. Under the guidance of Mike Clark, Towner developed his skills as both a professional drummer and a dedicated music educator.</p>
            <p>Towner leads several ensembles including the acclaimed Towner Galaher Organ Trio, which has performed at prominent venues across the United States. His recordings showcase his technical prowess and musical sensitivity, earning him recognition in the jazz community.</p>
            <p>Beyond his performance career, Towner is passionate about music education, working with students around the world and developing innovative teaching methods. His book "Coordination Development for the Drum Set" represents his commitment to passing on his knowledge to the next generation of musicians.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;