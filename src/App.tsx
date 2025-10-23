import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Home from './components/Home';
import Bio from './components/Bio';
import Recordings from './components/Recordings';
import Performances from './components/Performances';
import Reviews from './components/Reviews';
import Education from './components/Education';
import Publications from './components/Publications';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Essays from './components/Essays';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Home />
      <Bio />
      <Recordings />
      <Performances />
      <Reviews />
      <Education />
      <Publications />
      <Gallery />
      <Videos />
      <Essays />
      <Contact />
      <Footer />
      <BackToTop show={showBackToTop} onClick={scrollToTop} />
    </div>
  );
}

export default App;
