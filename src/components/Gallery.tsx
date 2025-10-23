import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import MusicalNotes from './MusicalNotes';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = Array(12).fill(null).map((_, i) => ({
    src: `/assets/images/gallery/gallery-${i + 1}.jpg`,
    alt: `Gallery image ${i + 1} - Towner Galaher performing`
  }));

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="gallery-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Photo Gallery</h2>
          <span>Moments in Music</span>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={((index % 3) + 1) * 100}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className="lightbox active" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={32} />
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img 
                src={images[currentImage].src} 
                alt={images[currentImage].alt}
                className="lightbox-image"
              />
            </div>
            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
              <ChevronLeft size={32} />
            </button>
            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;