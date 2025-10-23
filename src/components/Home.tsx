import { Music, Headphones, Radio } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-hero" data-aos="fade-up">
          <div className="hero-content">
            <h1 className="hero-title">Experience the Rhythm</h1>
            <p className="hero-subtitle">Innovative Jazz Expression Through Percussion</p>
            <div className="hero-buttons">
              <a href="#performances" className="btn btn-lg">Upcoming Shows</a>
              <a href="#recordings" className="btn btn-lg btn-secondary">Listen Now</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-icon" style={{ top: '20%', left: '0%' }}>
              <Radio size={40} />
            </div>
            <div className="floating-icon" style={{ top: '60%', right: '10%' }}>
              <Music size={40} />
            </div>
            <div className="floating-icon" style={{ bottom: '10%', left: '15%' }}>
              <Headphones size={40} />
            </div>
          </div>
        </div>

        <div className="home-stats" data-aos="fade-up">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-text">Years of Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7</span>
            <span className="stat-text">Albums Released</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8000+</span>
            <span className="stat-text">Students Mentored</span>
          </div>
        </div>

        <div className="home-quote" data-aos="fade-up">
          <blockquote>
            <p>"Rhythm is not just about keeping time; it's about creating a conversation through the language of music."</p>
            <cite>— Towner Galaher</cite>
          </blockquote>
        </div>

        <div className="home-news" data-aos="fade-up">
          <h2 className="section-subtitle">Latest News</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-date">
                <span className="news-month">MAY</span>
                <span className="news-day">15</span>
              </div>
              <div className="news-content">
                <h3>New Album Announcement</h3>
                <p>Excited to announce that the recording sessions for the new album will take place on August 5th and 6th at Anjuna recording studio Portland Oregon.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-date">
                <span className="news-month">APR</span>
                <span className="news-day">27</span>
              </div>
              <div className="news-content">
                <h3>Summer Workshop Series</h3>
                <p>Registration now open for the summer workshop series focusing on advanced rhythmic concepts and improvisational techniques.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-date">
                <span className="news-month">APR</span>
                <span className="news-day">12</span>
              </div>
              <div className="news-content">
                <h3>Tour Dates</h3>
                <p>Coming soon, concert and club venues this fall. Check the performance schedule for cities and dates.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-cta" data-aos="fade-up">
          <div className="cta-content">
            <h2>Join the Rhythm Community</h2>
            <p>Subscribe to receive updates on performances, new releases, and educational opportunities.</p>
            <form className="cta-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
