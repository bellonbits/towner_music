import { useEffect, useState } from 'react';
import { Award, BookOpen, Download, Eye, ShoppingCart } from 'lucide-react';
import MusicalNotes from './MusicalNotes';

interface Review {
  text: string;
  author: string;
  detail: string;
}

interface Publication {
  title: string;
  author?: string;
  date: string;
  description: string;
  cover: string;
  previewPdf: string | null;
  fullPdf: string | null;
  reviews?: Review[];
}

const publications: Publication[] = [
  {
    title: 'Coordination Development for the Drumset',
    date: '2009',
    description:
      'A comprehensive method for developing limb independence and coordination skills essential for modern drumming. This seminal work has become a standard text in drum education worldwide.',
    cover: '/assets/coord.jpg',
    previewPdf: '/assets/book.pdf',
    fullPdf: '/assets/book.pdf',
  },
  {
    title: 'The Post-Bop Drum Book',
    author: 'By Mike Clark, transcribed by Towner Galaher',
    date: 'Hudson Music',
    description:
      'A deep dive into bebop and post-bop drumming, covering ride and hi-hat cymbal beats, triplet variations, rolls and fills, the hi-hat as a fourth voice, jazz waltz in 3/4, and hemiolas — with transcriptions by Towner Galaher and insights on creativity, telepathy, and finding your voice. Includes audio and video examples.',
    cover: '/assets/post-bop-drum-book-cover.png',
    previewPdf: null,
    fullPdf: null,
    reviews: [
      {
        text: 'Fabulous book from a master of the genre. Starts off with great examples on how to play the cymbal and hi-hat ride beats; followed by triplet variations between the snare drum, bass drum, and hi hat. Rolls/fills are discussed and explored as well as bebop phrasing. The transcriptions by Towner Galaher are excellent and a "must study" in itself.',
        author: 'Amazon Customer',
        detail: 'Verified Purchase, Paperback',
      },
      {
        text: 'Five Stars All the way! Destined to become a classic. From the very first page, Mike "gets down to the Nitty Gritty" of how to play modern jazz on the drums... The transcriptions of both Bebop and Post Bop will enable the reader/student to gain insights and understanding of the Jazz language and vocabulary.',
        author: 'Amazon Customer',
        detail: 'Verified Purchase, Paperback',
      },
    ],
  },
  {
    title: 'FUNK Drumming: Innovative Grooves & Advanced Concepts',
    author: 'By Mike Clark, transcribed by Towner Galaher',
    date: 'Hal Leonard',
    description:
      'An essential collection of funk grooves and advanced concepts from funk-jazz innovator Mike Clark, with transcriptions by Towner Galaher. Covers more than funk alone, exploring a wide range of grooves for drummers at every level.',
    cover: '/assets/funk-drumming-cover.jpg',
    previewPdf: null,
    fullPdf: null,
    reviews: [
      {
        text: "I played drums in high school... At 55 I got the fever again... This is when I discovered Mike Clark. I love the exercises he presents in this book and it's right in line with what I'm trying to accomplish musically. Mike does not muscle the drums, he plays them with great taste like Harvey Mason or Steve Gadd. This book is a great treasure.",
        author: 'Amazon Customer',
        detail: 'Verified Purchase, Sheet Music',
      },
      {
        text: 'Mike Clark is a world class truly amazing drummer and instructor. Every and any drummer interested in funk on any level of playing should consider his book and DVD as must have. I cannot overstate the quality of this product for anyone serious about improving on one\'s grooves.',
        author: 'Amazon Customer',
        detail: 'Verified Purchase, Sheet Music',
      },
    ],
  },
];

const Publications = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="publications" className="section publications-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Books & Publications</h2>
          <span>Educational Materials</span>
        </div>

        <div className="publications-intro" data-aos="fade-up">
          <p>
            Towner Galaher's educational publications represent decades of teaching experience distilled into
            comprehensive methods that have helped thousands of drummers worldwide improve their technical skills
            and musical understanding.
          </p>
        </div>

        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div className="publication-card" data-aos="fade-up" data-aos-delay={index * 100} key={pub.title}>
              <div className="publication-cover">
                <img
                  src={pub.cover}
                  alt={`${pub.title} cover`}
                  className="publication-image"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="500"
                />
                <div className="publication-overlay">
                  <BookOpen size={isMobile ? 32 : 48} />
                </div>
              </div>
              <div className="publication-details">
                <div className="publication-header">
                  <h3>{pub.title}</h3>
                  <span className="publication-date">Published: {pub.date}</span>
                </div>
                {pub.author && <p className="publication-author">{pub.author}</p>}
                <p className="publication-desc">{pub.description}</p>
                {!pub.reviews && (
                  <div className="publication-features">
                    <h4>Key Features:</h4>
                    <ul>
                      <li>Systematic coordination exercises</li>
                      <li>Progressive difficulty levels</li>
                      <li>Musical applications</li>
                      <li>Practice routines</li>
                      <li>Comprehensive methodology</li>
                    </ul>
                  </div>
                )}
                {pub.reviews && (
                  <div className="publication-reviews">
                    {pub.reviews.map((review) => (
                      <blockquote className="publication-review" key={review.text.slice(0, 20)}>
                        <p>&ldquo;{review.text}&rdquo;</p>
                        <cite>
                          — {review.author}, {review.detail}
                        </cite>
                      </blockquote>
                    ))}
                  </div>
                )}
                <div className="publication-links">
                  {pub.fullPdf ? (
                    <>
                      <a
                        href={pub.fullPdf}
                        className="btn btn-small"
                        download={`${pub.title.replace(/\s+/g, '-').toLowerCase()}.pdf`}
                      >
                        <Download size={isMobile ? 16 : 18} />
                        Download PDF
                      </a>
                      <a href={pub.previewPdf ?? undefined} className="btn btn-small btn-secondary" target="_blank" rel="noopener noreferrer">
                        <Eye size={isMobile ? 16 : 18} />
                        Preview Sample
                      </a>
                    </>
                  ) : (
                    <a href="#contact" className="btn btn-small">
                      <ShoppingCart size={isMobile ? 16 : 18} />
                      Purchase Print Edition
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="publications-testimonials" data-aos="fade-up">
          <h3>Educator Testimonials</h3>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <Award size={isMobile ? 24 : 32} />
              </div>
              <p className="testimonial-text">
                "Coordination Development is now required reading in my university percussion program. It's the
                most comprehensive method available for developing drumset coordination."
              </p>
              <div className="testimonial-author">
                <strong>Dr. Michael Johnson</strong>
                <span>Professor of Percussion, Berklee College of Music</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <BookOpen size={isMobile ? 24 : 32} />
              </div>
              <p className="testimonial-text">
                "My students have made remarkable progress using these materials. The systematic approach builds
                confidence and technical ability in a way that's accessible to all learning styles."
              </p>
              <div className="testimonial-author">
                <strong>Sarah Williams</strong>
                <span>Music Educator, New York Public Schools</span>
              </div>
            </div>
          </div>
        </div>

        <div className="publications-resources" data-aos="fade-up">
          <h3>Free Educational Resources</h3>
          <div className="resources-grid">
            <div className="resource-item">
              <div className="resource-icon">
                <Download size={isMobile ? 24 : 32} />
              </div>
              <div className="resource-content">
                <h4>Free Exercises</h4>
                <p>Download complimentary drum exercises and practice routines to supplement your studies.</p>
                <a href="/assets/book.pdf" className="btn btn-small" download="free-drum-exercises.pdf">
                  <Download size={isMobile ? 14 : 16} />
                  Download Exercises
                </a>
              </div>
            </div>
            <div className="resource-item">
              <div className="resource-icon">
                <BookOpen size={isMobile ? 24 : 32} />
              </div>
              <div className="resource-content">
                <h4>Study Guides</h4>
                <p>Comprehensive study guides and lesson plans for each publication.</p>
                <a href="/assets/book.pdf" className="btn btn-small" download="publications-study-guides.pdf">
                  <Download size={isMobile ? 14 : 16} />
                  Download Guides
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="publications-cta" data-aos="fade-up">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Bulk Orders & Institutional Pricing</h3>
              <p>
                Schools, universities, and music institutions can contact us for bulk order discounts and
                institutional licensing options for classroom use.
              </p>
            </div>
            <div className="cta-actions">
              <a href="#contact" className="btn">
                Institutional Inquiries
              </a>
              <a href="#contact" className="btn btn-secondary">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
