import { Facebook, Instagram, Youtube, Music2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navItems = [
    'Home', 'Bio', 'Recordings', 'Performances', 'Reviews',
    'Education', 'Gallery', 'Videos', 'Essays', 'Contact'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3>About Towner</h3>
            <p>Towner Galaher is a jazz drummer, composer, bandleader, arranger, and educator based in New York, known for his versatility, technical prowess, and commitment to both jazz traditions and contemporary expressions.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@GalaherTheLeftyGrooveLab" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="#" aria-label="Spotify"><Music2 size={20} /></a>
            </div>
          </div>
          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li><Mail size={16} /> inrhythmnyc@yahoo.com</li>
              <li><Phone size={16} /> +1 (917) 640-8029</li>
              <li><MapPin size={16} /> New York, NY</li>
            </ul>
          </div>
          <div className="footer-section footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on performances, new releases, and educational programs.</p>
            <form className="newsletter-form">
              <input type="email" className="newsletter-input" placeholder="Your Email" required />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Towner Galaher Music. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
