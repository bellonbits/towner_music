import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MusicalNotes from './MusicalNotes';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      text: 'An album that, above all, represents a stroke of brilliance from the excellent drummer Towner Galaher, offering a jazz tinged with funk a combination that suits us perfectly, as jazz is never more vibrant than when infused with diverse influences.',
      author: 'Paris Move',
      date: 'December 2024'
    },
    {
      text: 'Panorama is a testament that straightahead jazz can still thrive in modern times. Drummer/composer Towner Galaher, an astute leader and sideman who has performed with names like Wynton Marsalis and in ensembles such as Chico O\'Farrill\'s Afro-Cuban Jazz Big Band, carries the torch of jazz drummers like Art Blakey.',
      author: 'Mark F. Turner',
      date: 'Jazz Review'
    },
    {
      text: 'Jazz drummer Towner Galaher has the ability to re-invent the American Songbook. Just listen to his take on both \'Have You Met Miss Jones\' & \'I\'m All Smiles.\' Both Towner & his group have no qualms about dispensing charm, passion, & sensitive abandon in their song artistry... A veritable burst of musical joy, sonority, & color!',
      author: 'George W. Carroll',
      date: 'The Musicians\' Ombudsman'
    },
    {
      text: 'Yeah, YEAH, THIS is how to make a great jazz album! Courageous Hearts practically explodes with many of the qualities that attracted me to jazz in the first place— swing/pulse/groove; a raw, aching/restless passion, unpredictability, and for the lack of a better term, a \'cry,\' an almost primal, indefinable whatsis that reaches past the frontal lobes down into your soul.',
      author: 'Mark Kerseman',
      date: 'Icon Magazine'
    },
    {
      text: 'What\'s the secret to making a close-to-perfect jazz album? You know, the kind of CD that finds its way into your player more often than others? Well, ask drummer Towner Galaher. He seems to have it figured out with his latest offering, Uptown! This is the kind of album that rewards multiple listenings.',
      author: 'Rob Johnson',
      date: 'Denver Examiner'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="reviews" className="reviews-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Reviews</h2>
          <span>What Critics Are Saying</span>
        </div>
        <div className="reviews-slider">
          <div className="review-item active">
            <div className="review-content">
              <p className="review-text">{reviews[currentSlide].text}</p>
              <div className="review-meta">
                <p className="review-author">{reviews[currentSlide].author}</p>
                <p className="review-date">{reviews[currentSlide].date}</p>
              </div>
            </div>
          </div>

          <div className="slider-navigation">
            <button className="slider-btn slider-prev" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <div className="slider-dots">
              {reviews.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button className="slider-btn slider-next" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
