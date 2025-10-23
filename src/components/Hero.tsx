import { Facebook, Instagram, Youtube, Music2 } from 'lucide-react';
import MusicalNotes from './MusicalNotes';

const Hero = () => {
  return (
    <header id="header" className="hero">
      <MusicalNotes />
      <div className="vinyl-record"></div>
      <div className="drumstick"></div>
      <div className="hero-content">
        <h1>TOWNER GALAHER</h1>
        <p>Drummer • Composer • Bandleader • Arranger • Educator</p>
        <a href="#home" className="btn header-btn">DISCOVER MORE</a>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="https://www.youtube.com/@GalaherTheLeftyGrooveLab" aria-label="YouTube"><Youtube size={20} /></a>
          <a href="#" aria-label="Spotify"><Music2 size={20} /></a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
