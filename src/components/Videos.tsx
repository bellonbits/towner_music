import MusicalNotes from './MusicalNotes';
import { Play, Youtube, ExternalLink } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      title: 'Drumset Coordination Masterclass',
      description: 'Performance highlights featuring classic organ trio repertoire and original compositions that showcase the ensemble\'s dynamic interplay and rhythmic mastery.',
      thumbnail: '/assets/images/videos/drumset-coordination.jpg',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
      duration: '24:35',
      category: 'Performance',
      views: '15.2K'
    },
    {
      title: 'Left Handed Guitar Techniques',
      description: 'Selected solo performances showcasing rhythmic creativity and technical virtuosity across various venues and musical contexts.',
      thumbnail: '/assets/images/videos/left-handed-guitar.jpg',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
      duration: '18:42',
      category: 'Tutorial',
      views: '8.7K'
    },
    {
      title: 'Teaching Music in Kenya',
      description: 'Documentary about music education initiatives bringing rhythm and musical expression to young students across cultural boundaries.',
      thumbnail: '/assets/images/videos/kenya-teaching.jpg',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
      duration: '32:15',
      category: 'Documentary',
      views: '23.1K'
    },
    {
      title: 'Jazz Rhythms Workshop',
      description: 'Live workshop demonstrating essential jazz rhythms and their applications in modern drumming contexts.',
      thumbnail: '/assets/images/videos/jazz-rhythms-workshop.jpg',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
      duration: '28:50',
      category: 'Workshop',
      views: '12.4K'
    },
    {
      title: 'Organ Trio Live Session',
      description: 'Complete live performance of the Towner Galaher Organ Trio featuring special guest musicians.',
      thumbnail: '/assets/images/videos/organ-trio-live.jpg',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
      duration: '45:20',
      category: 'Live Performance',
      views: '31.8K'
    },
    {
      title: 'Advanced Coordination Exercises',
      description: 'In-depth tutorial on developing four-way coordination for advanced drumset techniques.',
      thumbnail: '/assets/images/videos/advanced-coordination.jpg',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
      duration: '36:45',
      category: 'Educational',
      views: '19.3K'
    }
  ];

  const openVideo = (youtubeId: string) => {
    // You can implement a lightbox or modal for video playback
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return (
    <section id="videos" className="videos-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Videos</h2>
          <span>Performance Highlights & Educational Content</span>
        </div>
        
        <div className="videos-grid">
          {videos.map((video, index) => (
            <div
              key={index}
              className="video-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="video-container" onClick={() => openVideo(video.youtubeId)}>
                <img 
                  src={video.thumbnail} 
                  alt={`${video.title} thumbnail`}
                  className="video-thumbnail"
                />
                <div className="video-overlay">
                  <div className="play-button">
                    <Play size={48} fill="currentColor" />
                  </div>
                  <div className="video-duration">
                    {video.duration}
                  </div>
                </div>
                <div className="video-badge">
                  <Youtube size={16} />
                  YouTube
                </div>
              </div>
              <div className="video-info">
                <div className="video-meta">
                  <span className="video-category">{video.category}</span>
                  <span className="video-views">{video.views} views</span>
                </div>
                <h3>{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-actions">
                  <button 
                    className="btn btn-small"
                    onClick={() => openVideo(video.youtubeId)}
                  >
                    <Play size={16} />
                    Watch Now
                  </button>
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    className="btn btn-small btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Channels Section */}
        <div className="video-channels" data-aos="fade-up">
          <h3>More Video Content</h3>
          <div className="channels-grid">
            <div className="channel-card">
              <div className="channel-icon">
                <Youtube size={40} />
              </div>
              <h4>YouTube Channel</h4>
              <p>Subscribe to my YouTube channel for regular updates, performances, and educational content.</p>
              <a 
                href="https://youtube.com/c/TownerGalaher" 
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={18} />
                Visit Channel
              </a>
            </div>
            <div className="channel-card">
              <div className="channel-icon">
                <Play size={40} />
              </div>
              <h4>Educational Series</h4>
              <p>Access exclusive educational content, masterclasses, and behind-the-scenes footage.</p>
              <a 
                href="#contact" 
                className="btn btn-secondary"
              >
                <Play size={18} />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;