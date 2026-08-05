import { useCallback, useEffect, useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Quote, Star, ThumbsUp, User } from 'lucide-react';
import MusicalNotes from './MusicalNotes';

interface Review {
  id: number;
  text: string;
  author: string;
  publication: string;
  date: string;
  rating: number;
  category: string;
  highlight: string;
  link: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: 'An album that, above all, represents a stroke of brilliance from the excellent drummer Towner Galaher, offering a jazz tinged with funk—a combination that suits us perfectly, as jazz is never more vibrant than when infused with diverse influences.',
    author: 'Paris Move',
    publication: 'Paris Move Magazine',
    date: 'December 2024',
    rating: 5,
    category: 'Album Review',
    highlight: 'Album of the Month',
    link: '#',
  },
  {
    id: 2,
    text: "Panorama is a testament that straightahead jazz can still thrive in modern times. Drummer/composer Towner Galaher, an astute leader and sideman who has performed with names like Wynton Marsalis and in ensembles such as Chico O'Farrill's Afro-Cuban Jazz Big Band, carries the torch of jazz drummers like Art Blakey.",
    author: 'Mark F. Turner',
    publication: 'All About Jazz',
    date: 'Jazz Review',
    rating: 5,
    category: 'Feature Review',
    highlight: "Editor's Choice",
    link: '#',
  },
  {
    id: 3,
    text: "Jazz drummer Towner Galaher has the ability to re-invent the American Songbook. Just listen to his take on both 'Have You Met Miss Jones' & 'I'm All Smiles.' Both Towner & his group have no qualms about dispensing charm, passion, & sensitive abandon in their song artistry... A veritable burst of musical joy, sonority, & color!",
    author: 'George W. Carroll',
    publication: "The Musicians' Ombudsman",
    date: "The Musicians' Ombudsman",
    rating: 5,
    category: 'Critic Review',
    highlight: 'Featured Artist',
    link: '#',
  },
  {
    id: 4,
    text: "Yeah, YEAH, THIS is how to make a great jazz album! Courageous Hearts practically explodes with many of the qualities that attracted me to jazz in the first place— swing/pulse/groove; a raw, aching/restless passion, unpredictability, and for the lack of a better term, a 'cry,' an almost primal, indefinable whatsis that reaches past the frontal lobes down into your soul.",
    author: 'Mark Kerseman',
    publication: 'Icon Magazine',
    date: 'Icon Magazine',
    rating: 5,
    category: 'Album Review',
    highlight: 'Must Listen',
    link: '#',
  },
  {
    id: 5,
    text: "What's the secret to making a close-to-perfect jazz album? You know, the kind of CD that finds its way into your player more often than others? Well, ask drummer Towner Galaher. He seems to have it figured out with his latest offering, Uptown! This is the kind of album that rewards multiple listenings.",
    author: 'Rob Johnson',
    publication: 'Denver Examiner',
    date: 'Denver Examiner',
    rating: 5,
    category: 'Music Review',
    highlight: "Critic's Pick",
    link: '#',
  },
  {
    id: 6,
    text: "Towner Galaher's drumming is a masterclass in rhythmic sophistication. His sense of time is impeccable, his touch is sensitive, and his musicality elevates every ensemble he plays with. A true artist who understands that drumming is not just about keeping time, but about telling a story.",
    author: 'Jazz Times',
    publication: 'Jazz Times Magazine',
    date: 'Feature Article',
    rating: 5,
    category: 'Artist Profile',
    highlight: 'Featured in Jazz Times',
    link: '#',
  },
  {
    id: 7,
    text: `The Organ Trio "Live" recording captures the raw energy and musical conversation that can only happen in a club setting. Galaher's drumming provides the perfect foundation for LeDonne and Bernstein to soar. This is jazz at its most authentic and exciting.`,
    author: 'DownBeat Magazine',
    publication: 'DownBeat',
    date: 'Live Review',
    rating: 4.5,
    category: 'Live Review',
    highlight: '4.5 Stars',
    link: '#',
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    let interval: ReturnType<typeof setInterval> | undefined;
    if (!isTransitioning) {
      interval = setInterval(() => next(), 5000);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTransitioning]);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, current],
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    if (distance < -50) prev();
  };

  const renderStars = (rating: number) => (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={isMobile ? 14 : 16}
          className={i < Math.floor(rating) ? 'star-filled' : 'star-empty'}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
      {rating % 1 !== 0 && (
        <div className="star-half" style={{ width: `${(rating % 1) * 100}%` }}>
          <Star size={isMobile ? 14 : 16} className="star-filled" fill="currentColor" />
        </div>
      )}
      <span className="rating-text">{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <section id="reviews" className="section reviews-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Reviews & Press</h2>
          <span>What Critics & Publications Are Saying</span>
        </div>

        <div className="reviews-stats" data-aos="fade-up">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-icon">
                <Quote size={isMobile ? 24 : 32} />
              </div>
              <div className="stat-content">
                <span className="stat-number">50+</span>
                <span className="stat-label">Publications Featured</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <Award size={isMobile ? 24 : 32} />
              </div>
              <div className="stat-content">
                <span className="stat-number">25+</span>
                <span className="stat-label">Awards & Honors</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <ThumbsUp size={isMobile ? 24 : 32} />
              </div>
              <div className="stat-content">
                <span className="stat-number">100%</span>
                <span className="stat-label">Positive Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-container">
          <div
            className="reviews-slider-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`reviews-slider ${isTransitioning ? 'transitioning' : ''}`}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="review-slide"
                  role="tabpanel"
                  aria-hidden={current !== index}
                  id={`slide-${index}`}
                >
                  <div className="review-card">
                    <div className="review-header">
                      <div className="publication-info">
                        <div className="publication-logo">
                          <div className="publication-icon">
                            <Quote size={isMobile ? 32 : 40} />
                          </div>
                        </div>
                        <div className="publication-details">
                          <span className="review-category">{review.category}</span>
                          <h3 className="publication-name">{review.publication}</h3>
                          {review.highlight && (
                            <div className="review-highlight">
                              <Award size={12} />
                              <span>{review.highlight}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="review-rating">{renderStars(review.rating)}</div>
                    </div>
                    <div className="review-content">
                      <div className="quote-icon">
                        <Quote size={isMobile ? 32 : 40} />
                      </div>
                      <blockquote className="review-text">
                        <p>{review.text}</p>
                      </blockquote>
                    </div>
                    <div className="review-footer">
                      <div className="review-author">
                        <div className="author-avatar">
                          <User size={20} />
                        </div>
                        <div className="author-info">
                          <span className="author-name">{review.author}</span>
                          <span className="review-date">{review.date}</span>
                        </div>
                      </div>
                      <a
                        href={review.link}
                        className="read-full-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read full review on ${review.publication}`}
                      >
                        Read Full Review
                        <ChevronRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button
              className="slider-btn slider-prev"
              onClick={prev}
              aria-label="Previous review"
              aria-controls={`slide-${current}`}
            >
              <ChevronLeft size={isMobile ? 20 : 24} />
            </button>
            <div className="slider-dots">
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  className={`dot ${index === current ? 'active' : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={`Go to review ${index + 1}`}
                  aria-current={index === current}
                />
              ))}
            </div>
            <button
              className="slider-btn slider-next"
              onClick={next}
              aria-label="Next review"
              aria-controls={`slide-${current}`}
            >
              <ChevronRight size={isMobile ? 20 : 24} />
            </button>
          </div>

          <div className="slider-progress">
            <div className="progress-bar" style={{ width: `${((current + 1) / reviews.length) * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
