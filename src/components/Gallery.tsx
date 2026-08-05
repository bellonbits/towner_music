import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Eye, Share2, X } from 'lucide-react';
import MusicalNotes from './MusicalNotes';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  date: string;
  description: string;
}

const images: GalleryImage[] = [
  { id: 1, src: '/assets/g1.jpg', alt: 'Towner Galaher performing live with organ trio', category: 'performance', title: 'Live Performance', date: '2024', description: 'Towner Galaher performing with his acclaimed organ trio' },
  { id: 2, src: '/assets/g2.jpg', alt: 'Close-up drumming technique demonstration', category: 'performance', title: 'Drumming Technique', date: '2024', description: 'Close-up view of advanced drumming techniques' },
  { id: 3, src: '/assets/g3.jpg', alt: 'Recording studio session', category: 'studio', title: 'Studio Session', date: '2024', description: 'Working on new recordings in the studio' },
  { id: 4, src: '/assets/g4.jpg', alt: 'Teaching masterclass to students', category: 'education', title: 'Masterclass Teaching', date: '2024', description: 'Teaching advanced drum techniques to students' },
  { id: 5, src: '/assets/g5.jpg', alt: 'Concert performance with full band', category: 'performance', title: 'Band Performance', date: '2023', description: 'Performing with full ensemble at jazz festival' },
  { id: 6, src: '/assets/g6.jpg', alt: 'Backstage preparation before show', category: 'behind-scenes', title: 'Backstage Moments', date: '2024', description: 'Preparing for a performance backstage' },
  { id: 7, src: '/assets/g7.jpg', alt: 'Artist portrait in studio', category: 'portrait', title: 'Artist Portrait', date: '2024', description: 'Professional portrait session' },
  { id: 8, src: '/assets/g8.jpg', alt: 'Teaching workshop with students', category: 'education', title: 'Group Workshop', date: '2023', description: 'Teaching coordination exercises to students' },
  { id: 9, src: '/assets/g9.jpg', alt: 'Solo performance on stage', category: 'performance', title: 'Solo Performance', date: '2024', description: 'Intimate solo performance at jazz club' },
  { id: 10, src: '/assets/g10.jpg', alt: 'Rehearsal with band members', category: 'behind-scenes', title: 'Band Rehearsal', date: '2024', description: 'Working on arrangements with band members' },
];

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'performance', label: 'Performances' },
  { id: 'studio', label: 'Studio Sessions' },
  { id: 'education', label: 'Education' },
  { id: 'behind-scenes', label: 'Behind the Scenes' },
  { id: 'portrait', label: 'Portraits' },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all' ? images : images.filter((img) => img.category === activeCategory);
  const filterCounts = categories.map((cat) => ({
    ...cat,
    count: cat.id === 'all' ? images.length : images.filter((img) => img.category === cat.id).length,
  }));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const markLoaded = useCallback((id: number) => {
    setLoaded((prev) => new Set(prev).add(id));
  }, []);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % filtered.length);
    },
    [filtered.length],
  );

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    },
    [filtered.length],
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, prevImage, nextImage, closeLightbox]);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextImage();
    if (distance < -50) prevImage();
  };

  const downloadImage = (src: string, title: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `towner-galaher-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareImage = async (image: GalleryImage) => {
    if (navigator.share) {
      try {
        await navigator.share({ title: `${image.title} - Towner Galaher`, text: image.description, url: window.location.href });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(`${image.title} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  const current = filtered[currentIndex];

  return (
    <section id="gallery" className="section gallery-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Photo Gallery</h2>
          <span>Moments in Music</span>
        </div>

        <div className="gallery-intro" data-aos="fade-up">
          <p>
            A visual journey through performances, studio sessions, teaching moments, and behind-the-scenes
            glimpses of Towner Galaher's musical career.
          </p>
        </div>

        <div className="gallery-filters" data-aos="fade-up">
          <div className="filters-container">
            {filterCounts.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setCurrentIndex(0);
                }}
              >
                {cat.label}
                <span className="filter-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {filtered.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item ${image.category} ${loaded.has(image.id) ? 'loaded' : ''}`}
              data-aos="zoom-in"
              data-aos-delay={(index % 4) * 100}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.title}`}
            >
              <div className="gallery-image-container">
                <div className="image-loader">
                  <div className="loader-spinner" />
                </div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                  onLoad={() => markLoaded(image.id)}
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <Eye size={isMobile ? 24 : 32} />
                    <span className="view-text">View</span>
                  </div>
                </div>
                <div className="image-info">
                  <span className="image-category">{image.category}</span>
                  <h4 className="image-title">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && current && (
          <div
            className="lightbox active"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-label="Image gallery lightbox"
            aria-modal="true"
          >
            <div className="lightbox-header">
              <div className="lightbox-info">
                <h3 className="lightbox-title">{current.title}</h3>
                <p className="lightbox-description">{current.description}</p>
                <div className="lightbox-meta">
                  <span className="lightbox-category">{current.category}</span>
                  <span className="lightbox-date">{current.date}</span>
                </div>
              </div>
              <div className="lightbox-controls">
                <button
                  className="lightbox-control-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadImage(current.src, current.title);
                  }}
                  aria-label="Download image"
                >
                  <Download size={isMobile ? 20 : 24} />
                </button>
                <button
                  className="lightbox-control-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    shareImage(current);
                  }}
                  aria-label="Share image"
                >
                  <Share2 size={isMobile ? 20 : 24} />
                </button>
                <button
                  className="lightbox-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  aria-label="Close lightbox"
                >
                  <X size={isMobile ? 24 : 32} />
                </button>
              </div>
            </div>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={current.src} alt={current.alt} className="lightbox-image" loading="eager" decoding="sync" />
            </div>

            <button className="lightbox-prev" onClick={prevImage} aria-label="Previous image">
              <ChevronLeft size={isMobile ? 24 : 32} />
            </button>
            <button className="lightbox-next" onClick={nextImage} aria-label="Next image">
              <ChevronRight size={isMobile ? 24 : 32} />
            </button>

            <div className="lightbox-footer">
              <div className="lightbox-counter">
                {currentIndex + 1} / {filtered.length}
              </div>
              <div className="lightbox-thumbnails">
                {filtered.slice(0, 5).map((image, index) => (
                  <button
                    key={image.id}
                    className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <img src={image.src} alt={`Thumbnail ${index + 1}`} loading="lazy" width="40" height="40" />
                  </button>
                ))}
                {filtered.length > 5 && <span className="more-thumbnails">+{filtered.length - 5}</span>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
