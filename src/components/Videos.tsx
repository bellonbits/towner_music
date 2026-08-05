import { useEffect, useState } from 'react';
import { Calendar, Clock, ExternalLink, Eye, Play, ThumbsUp, Youtube } from 'lucide-react';
import MusicalNotes from './MusicalNotes';

interface Video {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  views: string;
  likes: string;
  date: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Drumset Coordination Masterclass',
    description:
      'In-depth masterclass on advanced coordination techniques and limb independence for drummers. Features demonstrations of exercises from "Coordination Development for the Drumset."',
    category: 'education',
    duration: '24:35',
    views: '15.2K',
    likes: '1.2K',
    date: '2024-03-15',
    thumbnail: '/assets/e1.jpg',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Organ Trio Live Performance - Full Set',
    description:
      'Complete live performance of the Towner Galaher Organ Trio at the Blue Note Jazz Club. Features original compositions and jazz standards.',
    category: 'performance',
    duration: '58:42',
    views: '8.7K',
    likes: '845',
    date: '2024-02-28',
    thumbnail: '/assets/organorio.jpg',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Teaching Music in Kenya Documentary',
    description:
      'Documentary about music education initiatives bringing rhythm and musical expression to young students across cultural boundaries in Kenya.',
    category: 'documentary',
    duration: '32:15',
    views: '23.1K',
    likes: '2.1K',
    date: '2023-11-10',
    thumbnail: '/assets/e2.png',
  },
];

const filterOptions = [
  { id: 'all', label: 'All Videos' },
  { id: 'performance', label: 'Live Performances' },
  { id: 'education', label: 'Education' },
  { id: 'tutorial', label: 'Tutorials' },
  { id: 'documentary', label: 'Documentaries' },
  { id: 'behind-scenes', label: 'Behind the Scenes' },
  { id: 'workshop', label: 'Workshops' },
];

const formatCount = (value: string) => {
  const num = parseInt(value.replace('K', '000'), 10);
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toString();
};

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const Videos = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const filtered = activeFilter === 'all' ? videos : videos.filter((v) => v.category === activeFilter);

  const openVideo = (id: string) => {
    setActiveVideoId(id);
    setModalOpen(true);
  };

  const closeVideo = () => {
    setModalOpen(false);
    setActiveVideoId(null);
  };

  return (
    <section id="videos" className="section videos-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Videos</h2>
          <span>Performance Highlights & Educational Content</span>
        </div>

        <div className="videos-header" data-aos="fade-up">
          <div className="header-content">
            <h3>Visual & Educational Content</h3>
            <p>
              Explore performances, educational tutorials, documentaries, and behind-the-scenes content from
              Towner Galaher's YouTube channel and other video projects.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@GalaherTheLeftyGrooveLab"
            className="youtube-channel-btn"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            <Youtube size={isMobile ? 18 : 20} />
            <span>Visit YouTube Channel</span>
          </a>
        </div>

        <div className="video-filters" data-aos="fade-up">
          <div className="filters-container">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                className={`filter-btn ${activeFilter === opt.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="videos-grid">
          {filtered.map((video, index) => (
            <div className="video-card" data-aos="fade-up" data-aos-delay={(index % 3) * 100} key={`${video.id}-${index}`}>
              <div
                className="video-thumbnail-container"
                onClick={() => openVideo(video.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openVideo(video.id)}
                aria-label={`Play ${video.title}`}
              >
                <div className="thumbnail-wrapper">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumbnail"
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="360"
                  />
                  <div className="thumbnail-overlay">
                    <div className="play-button">
                      <Play size={isMobile ? 32 : 48} fill="currentColor" />
                    </div>
                  </div>
                  <div className="video-badge">
                    <Youtube size={isMobile ? 14 : 16} />
                    <span>YouTube</span>
                  </div>
                  <div className="video-duration">
                    <Clock size={12} />
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
              <div className="video-content">
                <div className="video-meta">
                  <span className="video-category">{video.category}</span>
                  <div className="video-stats">
                    <span className="video-stat">
                      <Eye size={14} />
                      {formatCount(video.views)}
                    </span>
                    <span className="video-stat">
                      <ThumbsUp size={14} />
                      {formatCount(video.likes)}
                    </span>
                    <span className="video-stat">
                      <Calendar size={14} />
                      {formatDate(video.date)}
                    </span>
                  </div>
                </div>
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-actions">
                  <button className="btn btn-small watch-btn" onClick={() => openVideo(video.id)} aria-label={`Watch ${video.title}`}>
                    <Play size={isMobile ? 16 : 18} />
                    <span>Watch Now</span>
                  </button>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    className="btn btn-small btn-secondary youtube-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${video.title} on YouTube`}
                  >
                    <ExternalLink size={isMobile ? 16 : 18} />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="video-channels" data-aos="fade-up">
          <h3>Video Channels & Platforms</h3>
          <div className="channels-grid">
            <div className="channel-card">
              <div className="channel-icon">
                <Youtube size={isMobile ? 32 : 40} />
              </div>
              <div className="channel-content">
                <h4>YouTube Channel</h4>
                <p>Subscribe to my YouTube channel for regular updates, performances, educational content, and behind-the-scenes footage.</p>
                <div className="channel-stats">
                  <div className="channel-stat">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Videos</span>
                  </div>
                  <div className="channel-stat">
                    <span className="stat-number">50K+</span>
                    <span className="stat-label">Subscribers</span>
                  </div>
                </div>
                <a href="https://www.youtube.com/@GalaherTheLeftyGrooveLab" className="btn youtube-btn" target="_blank" rel="noopener noreferrer">
                  <Youtube size={18} />
                  <span>Subscribe Now</span>
                </a>
              </div>
            </div>
            <div className="channel-card">
              <div className="channel-icon">
                <Play size={isMobile ? 32 : 40} />
              </div>
              <div className="channel-content">
                <h4>Educational Series</h4>
                <p>Access exclusive educational content, masterclasses, and in-depth tutorials available on various learning platforms.</p>
                <div className="channel-features">
                  <span className="feature">Premium Content</span>
                  <span className="feature">Downloadable Resources</span>
                  <span className="feature">Interactive Lessons</span>
                </div>
                <a href="#contact" className="btn btn-secondary">
                  <Play size={18} />
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="videos-cta" data-aos="fade-up">
          <div className="cta-content">
            <div className="cta-icon">
              <Youtube size={isMobile ? 32 : 40} />
            </div>
            <div className="cta-text">
              <h3>Stay Updated with New Content</h3>
              <p>Turn on notifications for the YouTube channel to never miss a new video. New content uploaded regularly including performances, tutorials, and more.</p>
            </div>
            <div className="cta-actions">
              <a href="https://www.youtube.com/@GalaherTheLeftyGrooveLab" className="btn btn-lg youtube-btn" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} />
                <span>Subscribe & Notify</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Content Suggestions
              </a>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && activeVideoId && (
        <div className="video-modal active" onClick={closeVideo} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeVideo} aria-label="Close video">
              <span>&times;</span>
            </button>
            <div className="video-player-container">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;
