import { useEffect, useState } from 'react';
import { Calendar, Clock, ExternalLink, MapPin, Music, Star, Ticket } from 'lucide-react';

interface Performance {
  id: number;
  venue: string;
  location: string;
  date: string;
  time: string;
  description: string;
  image: string;
  tag: string;
  featured: boolean;
  status: 'upcoming' | 'announced' | 'past';
  ticketLink: string;
  venueLink: string;
  soldOut: boolean;
  lineup: string[];
  price: string;
  reviewLink?: string;
}

const Performances = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const upcoming: Performance[] = [
    {
      id: 1,
      venue: 'Tamarind Fine Indian Dining',
      location: '20 S Broadway, Nyack NY 10960',
      date: 'Feb 14, 2026',
      time: '7:00 PM - 10:00 PM',
      description: 'Celebrate love with great Indian Food & Live Jazz. Featuring the Towner Galaher Organ Trio.',
      image: '/assets/tamarind-flyer.jpg',
      tag: 'Valentine',
      featured: true,
      status: 'upcoming',
      ticketLink: '#contact',
      venueLink: '',
      soldOut: false,
      lineup: ['Towner Galaher Organ Trio'],
      price: 'Contact for Info',
    },
    {
      id: 2,
      venue: 'The Pieman',
      location: '107 NY-303 Valley Cottage NY 10989',
      date: 'Feb 17, 2026',
      time: '6:00 PM - 9:00 PM',
      description: 'Celebrate MARDI GRAS with LIVE music by TOWNER GALAHER AND FRIENDS! Laissez le bon ton rouler!',
      image: '/assets/pieman-flyer.png',
      tag: 'Mardi Gras',
      featured: false,
      status: 'upcoming',
      ticketLink: '#contact',
      venueLink: '',
      soldOut: false,
      lineup: ['Towner Galaher and Friends'],
      price: 'Free Entry',
    },
  ];

  const past: Performance[] = [];
  const allPerformances = [...upcoming, ...past];
  const visible = filter === 'all' ? allPerformances : filter === 'upcoming' ? upcoming : past;
  const featuredShow = upcoming.filter((p) => p.featured);

  return (
    <section id="performances" className="section performances-section">
      <div className="container">
        <div className="section-title">
          <h2>Performances</h2>
          <span>Live Music Experiences</span>
        </div>

        <div className="performances-header" data-aos="fade-up">
          <div className="header-content">
            <h3>Experience the Music Live</h3>
            <p>
              From intimate club dates to major festival appearances, experience Towner Galaher's dynamic
              performances that showcase decades of musical mastery and spontaneous creativity.
            </p>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <Calendar size={isMobile ? 24 : 32} />
              <div className="stat-content">
                <span className="stat-number">50+</span>
                <span className="stat-label">Annual Shows</span>
              </div>
            </div>
            <div className="stat-item">
              <Star size={isMobile ? 24 : 32} />
              <div className="stat-content">
                <span className="stat-number">25+</span>
                <span className="stat-label">Venues Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="performances-filter" data-aos="fade-up">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All Shows
          </button>
          <button
            className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
          <button className={`filter-btn ${filter === 'past' ? 'active' : ''}`} onClick={() => setFilter('past')}>
            Past Shows
          </button>
        </div>

        {filter === 'upcoming' && featuredShow.length > 0 && (
          <div className="featured-performance" data-aos="fade-up">
            <div className="featured-badge">Featured Performance</div>
            {featuredShow.map((show) => (
              <div className="featured-card" key={show.id}>
                <div className="featured-image">
                  <img
                    src={show.image}
                    alt={`${show.venue} performance`}
                    className="performance-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="image-overlay" />
                  <div className="venue-tag featured-tag">{show.tag}</div>
                </div>
                <div className="featured-content">
                  <div className="performance-date">
                    <Calendar size={isMobile ? 18 : 20} />
                    <span>{show.date}</span>
                  </div>
                  <h3 className="performance-title">{show.venue}</h3>
                  <div className="performance-details">
                    <p className="performance-location">
                      <MapPin size={isMobile ? 18 : 20} />
                      {show.location}
                    </p>
                    <p className="performance-time">
                      <Clock size={isMobile ? 18 : 20} />
                      {show.time}
                    </p>
                  </div>
                  <p className="performance-description">{show.description}</p>
                  {show.lineup.length > 0 && (
                    <div className="performance-lineup">
                      <h4>Featuring:</h4>
                      <ul>
                        {show.lineup.map((member) => (
                          <li key={member}>
                            <Music size={14} />
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="performance-info">
                    <div className="info-item">
                      <span className="info-label">Price:</span>
                      <span className="info-value">{show.price}</span>
                    </div>
                    {show.venueLink && (
                      <a href={show.venueLink} className="venue-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Visit Venue Website
                      </a>
                    )}
                  </div>
                  <div className="performance-actions">
                    <a href={show.ticketLink} className="btn btn-lg">
                      <Ticket size={isMobile ? 18 : 20} style={{ marginRight: '8px' }} />
                      Get Tickets
                    </a>
                    {!show.soldOut && (
                      <a href="#contact" className="btn btn-secondary">
                        VIP Packages
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="performances-container">
          {visible
            .filter((show) => !show.featured || filter !== 'upcoming')
            .map((show) => (
              <div className={`performance-card ${show.status}`} data-aos="fade-up" key={show.id}>
                <div className="performance-photo">
                  <img
                    src={show.image}
                    alt={`${show.venue} performance`}
                    className="performance-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="venue-tag">{show.tag}</div>
                  {show.status === 'announced' && <div className="status-badge coming-soon">Coming Soon</div>}
                  {show.status === 'past' && <div className="status-badge past">Past Show</div>}
                  {show.soldOut && <div className="status-badge sold-out">Sold Out</div>}
                </div>
                <div className="performance-content">
                  <div className="performance-date">
                    <Calendar size={isMobile ? 16 : 18} />
                    <span>{show.date}</span>
                  </div>
                  <h3 className="performance-title">{show.venue}</h3>
                  <div className="performance-details">
                    <p className="performance-location">
                      <MapPin size={isMobile ? 16 : 18} />
                      {show.location}
                    </p>
                    <p className="performance-time">
                      <Clock size={isMobile ? 16 : 18} />
                      {show.time}
                    </p>
                  </div>
                  <p className="performance-description">{show.description}</p>
                  {show.lineup && show.lineup.length > 0 && (
                    <div className="performance-lineup compact">
                      <h4>Featuring:</h4>
                      <p>{show.lineup.slice(0, 2).join(', ')}</p>
                    </div>
                  )}
                  {show.status !== 'past' && show.price && (
                    <div className="performance-price">
                      <span className="price-label">Tickets:</span>
                      <span className="price-value">{show.price}</span>
                    </div>
                  )}
                  <div className="performance-actions">
                    {show.status === 'upcoming' ? (
                      <>
                        <a href={show.ticketLink} className="btn">
                          <Ticket size={isMobile ? 16 : 18} style={{ marginRight: '8px' }} />
                          Get Tickets
                        </a>
                        {show.venueLink && (
                          <a href={show.venueLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            Venue Info
                          </a>
                        )}
                      </>
                    ) : show.status === 'announced' ? (
                      <a href={show.ticketLink} className="btn">
                        Get Notified
                      </a>
                    ) : (
                      <a href={show.reviewLink} className="btn">
                        View Photos
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="performances-cta" data-aos="fade-up">
          <div className="cta-content">
            <div className="cta-icon">
              <Music size={isMobile ? 40 : 48} />
            </div>
            <div className="cta-text">
              <h3>Booking & Inquiries</h3>
              <p>
                Interested in booking Towner Galaher for your venue, festival, or private event? Contact us for
                availability, technical requirements, and booking information.
              </p>
            </div>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-lg">
                Contact for Booking
              </a>
              <a href="#contact" className="btn btn-secondary">
                Download Rider
              </a>
            </div>
          </div>
        </div>

        <div className="performance-highlights" data-aos="fade-up">
          <h3>What to Expect at a Live Show</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">
                <Music size={24} />
              </div>
              <h4>Dynamic Setlists</h4>
              <p>Carefully curated mixes of original compositions, jazz standards, and unique arrangements.</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <Calendar size={24} />
              </div>
              <h4>Musical Conversation</h4>
              <p>Spontaneous interplay and musical dialogue between band members that changes nightly.</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <Star size={24} />
              </div>
              <h4>Masterful Execution</h4>
              <p>Decades of experience showcased through technical precision and emotional depth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performances;
