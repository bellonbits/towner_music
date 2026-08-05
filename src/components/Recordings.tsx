import { Play } from 'lucide-react';

interface Album {
  title: string;
  year: string;
  artist: string;
  cover: string;
  formats: string[];
  tracks: number;
  platforms: string[];
  description: string;
}

const Recordings = () => {
  const rhythmRoyaleAlbums: Album[] = [
    {
      title: 'Panorama',
      year: '2007',
      artist: 'Towner Galaher',
      cover: '/assets/panorama.jpg',
      formats: ['CD'],
      tracks: 8,
      platforms: ['Spotify'],
      description: 'A journey through sophisticated jazz compositions and arrangements.',
    },
    {
      title: 'Courageous Hearts',
      year: '2009',
      artist: 'Towner Galaher',
      cover: '/assets/cour.png',
      formats: ['CD'],
      tracks: 9,
      platforms: ['Spotify', 'Apple Music'],
      description: 'An exploration of emotional depth and musical bravery.',
    },
    {
      title: 'Uptown!',
      year: '2012',
      artist: 'Towner Galaher',
      cover: '/assets/uptown.jpg',
      formats: ['CD'],
      tracks: 11,
      platforms: ['Spotify', 'Apple Music'],
      description: 'Uptempo jazz with urban sophistication and swing.',
    },
    {
      title: 'Towner Galaher Organ Trio "Live"',
      year: '2023',
      artist: 'Towner Galaher Organ Trio',
      cover: '/assets/organ.jpg',
      formats: ['CD', 'Vinyl'],
      tracks: 14,
      platforms: ['Spotify', 'Apple Music'],
      description: 'Captivating live performance featuring the acclaimed organ trio.',
    },
    {
      title: 'Brothers',
      year: '2025',
      artist: 'Towner Galaher',
      cover: '/assets/brothers.jpg',
      formats: ['CD', 'Digital'],
      tracks: 8,
      platforms: ['Spotify', 'Apple Music', 'Bandcamp'],
      description: 'Latest release exploring musical kinship and collaboration.',
    },
  ];

  const albinaAlbums: Album[] = [
    {
      title: 'Transport',
      year: '1979',
      artist: 'Towner Galaher Quartet',
      cover: '/assets/transport.jpg',
      formats: ['Vinyl', 'Digital'],
      tracks: 5,
      platforms: ['Bandcamp', 'YouTube'],
      description: 'Early quartet work showcasing jazz innovation and exploration.',
    },
    {
      title: 'Transport "Way Back When"',
      year: '1980',
      artist: 'Towner Galaher',
      cover: '/assets/Way_back_when.jpg',
      formats: ['CD'],
      tracks: 6,
      platforms: ['Bandcamp', 'YouTube'],
      description: 'Classic jazz sounds and nostalgic compositions from the early years.',
    },
  ];

  const renderCard = (album: Album, index: number) => (
    <div
      key={`${album.title}-${index}`}
      className="recording-card"
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
    >
      <div className="recording-cover">
        <img
          src={album.cover}
          alt={`${album.title} album cover`}
          className="recording-image"
          loading="lazy"
          decoding="async"
          width="400"
          height="400"
        />
        <div className="recording-overlay">
          <Play size={48} />
          <span className="sr-only">Play {album.title}</span>
        </div>
      </div>
      <div className="recording-details">
        <div className="recording-meta">
          <span className="recording-format">{album.formats.join(', ')}</span>
          <span className="recording-tracks">{album.tracks} tracks</span>
        </div>
        <h3>{album.title}</h3>
        <p className="recording-artist">{album.artist}</p>
        <p className="recording-year">{album.year}</p>
        <p className="recording-description">{album.description}</p>
        <div className="recording-platforms">
          {album.platforms.map((platform) => (
            <a
              key={platform}
              href="#"
              className="platform-link"
              aria-label={`Listen to ${album.title} on ${platform}`}
            >
              {platform}
            </a>
          ))}
        </div>
        <div className="recording-links">
          <a href="#" className="btn-small" aria-label={`Listen to ${album.title}`}>
            Listen
          </a>
          <a href="#" className="btn-small btn-secondary" aria-label={`Download ${album.title}`}>
            Download
          </a>
        </div>
      </div>
    </div>
  );

  const totalAlbums = rhythmRoyaleAlbums.length + albinaAlbums.length;

  return (
    <section id="recordings" className="section recordings-section">
      <div className="container">
        <div className="section-title">
          <h2>Recordings</h2>
          <span>Musical Journey Through Sound</span>
        </div>

        <div className="recordings-section-group" data-aos="fade-up">
          <div className="recordings-group-header">
            <h3 className="recordings-group-title">Rhythm Royale Records</h3>
            <p className="recordings-group-subtitle">
              Contemporary jazz releases featuring original compositions and modern arrangements
            </p>
          </div>
          <div className="recordings-grid">
            {rhythmRoyaleAlbums.map((album, index) => renderCard(album, index))}
          </div>
        </div>

        <div className="recordings-section-group" data-aos="fade-up" data-aos-delay="100">
          <div className="recordings-group-header">
            <div className="recordings-group-logo">
              <img src="/assets/albina.png" alt="Albina Music Trust Logo" className="albina-logo-image" />
            </div>
            <p className="recordings-group-subtitle">
              Early career releases showcasing foundational jazz works and historical recordings
            </p>
          </div>
          <div className="recordings-grid">
            {albinaAlbums.map((album, index) => renderCard(album, index))}
          </div>
        </div>

        <div className="recording-stats" data-aos="fade-up" data-aos-delay="200">
          <div className="stat-item">
            <span className="stat-number">{totalAlbums}</span>
            <span className="stat-label">Total Albums</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{new Date().getFullYear() - 1979}+</span>
            <span className="stat-label">Years Recording</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Music Platforms</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Global</span>
            <span className="stat-label">Distribution</span>
          </div>
        </div>

        <div className="recording-studio-photo" data-aos="fade-up">
          <img
            src="/assets/drum-kit-mics.jpg"
            alt="Towner Galaher's drum kit mic'd up in the studio"
            loading="lazy"
            decoding="async"
          />
          <p className="recording-studio-caption">Mic'd up and ready to record</p>
        </div>

        <div className="publications-testimonials" data-aos="fade-up">
          <h3>What Fellow Drummers Say</h3>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "A triple threat," is how drum master Lenny White characterizes Towner's versatile outreach. "Great
                drummer, composer and band-leader — the tradition is alive in Towner Galaher."
              </p>
              <div className="testimonial-author">
                <strong>Lenny White</strong>
                <span>Drummer, Return to Forever</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                Modern jazz-funk innovator Mike Clark high-fives Galaher for his "unquenchable desire to know all
                there is about music and to play the kind of jazz that is informed by the masters of the past while
                pointing towards the future."
              </p>
              <div className="testimonial-author">
                <strong>Mike Clark</strong>
                <span>Drummer, Herbie Hancock's Headhunters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recordings;
