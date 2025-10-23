import { Play } from 'lucide-react';

const Recordings = () => {
  const albums = [
    { 
      title: 'Brothers', 
      year: '2025', 
      artist: 'Towner Galaher',
      cover: '/assets/images/recordings/brothers.jpg'
    },
    { 
      title: 'Towner Galaher Organ Trio "Live"', 
      year: '2023', 
      artist: 'Towner Galaher Organ Trio',
      cover: '/assets/images/recordings/organ-trio-live.jpg'
    },
    { 
      title: 'Uptown!', 
      year: '2012', 
      artist: 'Towner Galaher',
      cover: '/assets/images/recordings/uptown.jpg'
    },
    { 
      title: 'Courageous Hearts', 
      year: '2009', 
      artist: 'Towner Galaher',
      cover: '/assets/images/recordings/courageous-hearts.jpg'
    },
    { 
      title: 'Panorama', 
      year: '2007', 
      artist: 'Towner Galaher',
      cover: '/assets/images/recordings/panorama.jpg'
    },
    { 
      title: 'Transport "Way Back When"', 
      year: '1980', 
      artist: 'Towner Galaher Quartet',
      cover: '/assets/images/recordings/transport-way-back.jpg'
    },
    { 
      title: 'Transport', 
      year: '1979', 
      artist: 'Towner Galaher Quartet',
      cover: '/assets/images/recordings/transport.jpg'
    },
  ];

  return (
    <section id="recordings" className="recordings-section">
      <div className="container">
        <div className="section-title">
          <h2>Recordings</h2>
          <span>Musical Journey Through Sound</span>
        </div>
        <div className="recordings-grid">
          {albums.map((album, index) => (
            <div
              key={index}
              className="recording-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="recording-cover">
                <img 
                  src={album.cover} 
                  alt={`${album.title} - ${album.artist}`}
                  className="recording-image"
                />
                <div className="recording-overlay">
                  <Play size={48} />
                </div>
              </div>
              <div className="recording-details">
                <h3>{album.title}</h3>
                <p className="recording-artist">{album.artist}</p>
                <p className="recording-year">{album.year}</p>
                <div className="recording-links">
                  <a href="#" className="btn-small">Listen</a>
                  <a href="#" className="btn-small">Download</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recordings;