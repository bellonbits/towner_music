import { useState } from 'react';
import { BookOpen, Calendar, Clock, Download, ExternalLink, FileText, GraduationCap, Globe2, Music, Sparkles, TrendingUp } from 'lucide-react';
import MusicalNotes from './MusicalNotes';

interface Essay {
  id: number;
  title: string;
  period: string;
  excerpt: string;
  category: string;
  topics: string[];
  length: string;
  downloadCount: string;
  publicationDate: string;
  featured: boolean;
  pdfUrl: string;
  readOnline: string;
}

const essays: Essay[] = [
  {
    id: 1,
    title: 'Parallel Developments and Cross-cultural Exchange in the music of Cuban and New Orleans',
    period: '1900-1920',
    excerpt:
      'An exploration of the musical connections between Cuba and New Orleans during the early 20th century, examining the rhythmic similarities, cultural exchanges, and mutual influences that shaped both musical traditions. This essay delves into the Afro-Caribbean roots, migration patterns, and key figures who bridged these two vibrant musical worlds.',
    category: 'historical',
    topics: ['Cuban Music', 'New Orleans Jazz', 'Cultural Exchange', 'Afro-Caribbean'],
    length: '25 min read',
    downloadCount: '2.4K',
    publicationDate: '2024-02-15',
    featured: true,
    pdfUrl: '/essays/cuban-new-orleans-exchange.pdf',
    readOnline: '/essays/cuban-new-orleans',
  },
  {
    id: 2,
    title: 'New Orleans R&B: The Evolution from Brass Bands to Funk',
    period: '1945-1970',
    excerpt:
      'A comprehensive analysis of Rhythm and Blues evolution in New Orleans, tracing its transformation from traditional brass band sounds to the birth of funk. This piece examines key artists, recording techniques, and the socio-economic factors that influenced this golden era of New Orleans music.',
    category: 'evolutionary',
    topics: ['R&B History', 'Funk Origins', 'Brass Bands', 'Recording History'],
    length: '18 min read',
    downloadCount: '1.8K',
    publicationDate: '2023-11-22',
    featured: false,
    pdfUrl: '/essays/new-orleans-rb-evolution.pdf',
    readOnline: '/essays/new-orleans-rb',
  },
  {
    id: 3,
    title: 'History of Latin Music in New York City: From Mambo to Salsa',
    period: '1950s-Present',
    excerpt:
      'Chronicling the vibrant history and influence of Latin music in the cultural melting pot of New York City. This essay explores the migration waves, club scenes, recording innovations, and cultural fusion that created the distinctive New York Latin sound that continues to evolve today.',
    category: 'cultural',
    topics: ['Latin Music', 'NYC History', 'Salsa', 'Cultural Fusion'],
    length: '32 min read',
    downloadCount: '3.1K',
    publicationDate: '2024-01-10',
    featured: true,
    pdfUrl: '/essays/nyc-latin-music.pdf',
    readOnline: '/essays/nyc-latin-music',
  },
  {
    id: 4,
    title: 'The Drumset in Afro-Cuban Music: Evolution and Techniques',
    period: '1930-1960',
    excerpt:
      'An in-depth study of how the drumset was adapted and integrated into Afro-Cuban music, examining the technical innovations, influential drummers, and rhythmic concepts that shaped this fusion. Includes analysis of clave-based coordination and traditional patterns adapted for modern drumset.',
    category: 'technical',
    topics: ['Afro-Cuban', 'Drumset Techniques', 'Clave', 'Rhythm'],
    length: '22 min read',
    downloadCount: '1.5K',
    publicationDate: '2023-09-30',
    featured: false,
    pdfUrl: '/essays/afro-cuban-drumset.pdf',
    readOnline: '/essays/afro-cuban-drumset',
  },
  {
    id: 5,
    title: 'Jazz Education Pedagogy: Methods and Approaches Through the Decades',
    period: '1920s-Present',
    excerpt:
      'Analyzing the evolution of jazz education methods from informal mentorship to formal academic programs. This essay compares different pedagogical approaches, influential educators, and the impact of institutionalization on jazz learning and preservation.',
    category: 'educational',
    topics: ['Jazz Education', 'Pedagogy', 'Music Education', 'Teaching Methods'],
    length: '28 min read',
    downloadCount: '2.7K',
    publicationDate: '2023-12-05',
    featured: false,
    pdfUrl: '/essays/jazz-education-pedagogy.pdf',
    readOnline: '/essays/jazz-education',
  },
  {
    id: 6,
    title: 'Transcription as a Learning Tool: Analysis of Iconic Drum Solos',
    period: 'Modern Era',
    excerpt:
      'Exploring the art and science of transcription in drum education, with detailed analysis of iconic drum solos from masters like Max Roach, Elvin Jones, and Tony Williams. This essay provides methodologies for effective transcription and application in practice.',
    category: 'analytical',
    topics: ['Transcription', 'Drum Solos', 'Music Analysis', 'Learning Tools'],
    length: '20 min read',
    downloadCount: '2.1K',
    publicationDate: '2024-03-01',
    featured: true,
    pdfUrl: '/essays/transcription-analysis.pdf',
    readOnline: '/essays/transcription-tools',
  },
];

const filters = [
  { id: 'all', label: 'All Essays', icon: <BookOpen size={16} /> },
  { id: 'historical', label: 'Historical', icon: <Clock size={16} /> },
  { id: 'cultural', label: 'Cultural', icon: <Globe2 size={16} /> },
  { id: 'technical', label: 'Technical', icon: <Music size={16} /> },
  { id: 'educational', label: 'Educational', icon: <GraduationCap size={16} /> },
  { id: 'analytical', label: 'Analytical', icon: <TrendingUp size={16} /> },
  { id: 'evolutionary', label: 'Evolutionary', icon: <TrendingUp size={16} /> },
];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const formatCount = (value: string) => {
  const num = parseInt(value.replace('K', '000'), 10);
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toString();
};

const Essays = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filterCounts = filters.map((f) => ({
    ...f,
    count: f.id === 'all' ? essays.length : essays.filter((e) => e.category === f.id).length,
  }));

  const filtered = activeFilter === 'all' ? essays : essays.filter((e) => e.category === activeFilter);

  const toggleExpanded = (id: number) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section id="essays" className="section essays-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Essays</h2>
          <p className="text-gray-300 text-lg md:text-xl mt-2">Academic Writings & Musical Analysis</p>
        </div>

        <div
          className="bg-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 md:p-8 mb-10 md:mb-12"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/20 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-gold" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">In-depth Musical Analysis</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Explore comprehensive essays on music history, cultural exchange, technical analysis, and
                educational pedagogy. Each piece represents years of research and practical experience in the field
                of music.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-12" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h4 className="text-xl md:text-2xl font-bold text-white">Browse by Category</h4>
            <span className="text-gold font-semibold text-sm md:text-base bg-gold/10 px-3 py-1.5 rounded-full">
              {filtered.length} essays found
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {filterCounts.map((f) => (
              <button
                key={f.id}
                className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                  activeFilter === f.id
                    ? 'bg-gold text-black transform -translate-y-1 shadow-lg'
                    : 'bg-gray-900/50 hover:bg-gray-800/70 text-gray-300 hover:text-white border border-gray-700/50'
                }`}
                onClick={() => setActiveFilter(f.id)}
                aria-label={`Filter essays by ${f.label}`}
              >
                <div className={`mb-2 ${activeFilter === f.id ? 'text-black' : 'text-gold'}`}>{f.icon}</div>
                <span className="text-xs md:text-sm font-medium text-center leading-tight">{f.label}</span>
                <span
                  className={`mt-1.5 text-xs px-2 py-0.5 rounded-full ${
                    activeFilter === f.id ? 'bg-black/20 text-black/90' : 'bg-gray-800/70 text-gray-400'
                  }`}
                >
                  {f.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {filtered.map((essay, index) => (
            <article
              key={essay.id}
              className={`relative group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                essay.featured ? 'border-gold shadow-lg shadow-gold/10' : 'border-gray-700/50 hover:border-gold'
              }`}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              {essay.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gold text-black px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={12} />
                  <span>Featured</span>
                </div>
              )}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-gold/20 text-gold px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {essay.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-gray-400 text-sm">
                      <Calendar size={14} />
                      {essay.period}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-4 cursor-pointer hover:text-gold transition-colors flex justify-between items-start gap-4"
                    onClick={() => toggleExpanded(essay.id)}
                  >
                    <span className="flex-1">{essay.title}</span>
                    <button
                      className="text-gold hover:text-white transition-colors text-2xl font-light min-w-6 h-6 flex items-center justify-center"
                      aria-label={expandedId === essay.id ? 'Collapse essay' : 'Expand essay'}
                    >
                      {expandedId === essay.id ? '−' : '+'}
                    </button>
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedId === essay.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock size={14} />
                        <span>{essay.length}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Download size={14} />
                        <span>{formatCount(essay.downloadCount)} downloads</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Calendar size={14} />
                        <span>Published {formatDate(essay.publicationDate)}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{essay.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {essay.topics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-block bg-gray-800/70 text-gold px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700/50">
                  <a
                    href={essay.pdfUrl}
                    className="flex-1 flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    download
                    aria-label={`Download ${essay.title} as PDF`}
                  >
                    <Download size={18} />
                    <span className="whitespace-nowrap">Download PDF</span>
                  </a>
                  <a
                    href={essay.readOnline}
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent hover:bg-gray-800 border border-gold text-gold hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    aria-label={`Read ${essay.title} online`}
                  >
                    <FileText size={18} />
                    <span className="whitespace-nowrap">Read Online</span>
                  </a>
                  <button
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-gold text-gray-300 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => toggleExpanded(essay.id)}
                    aria-expanded={expandedId === essay.id}
                  >
                    {expandedId === essay.id ? 'Show Less' : 'Read Excerpt'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-12 mb-12"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gold/20 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-gold" />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">Academic Publications & Research</h3>
              <p className="text-gray-300 text-lg mb-6 max-w-3xl">
                Interested in collaborating on research or featuring these essays in academic settings? Contact for
                speaking engagements, workshop materials, or custom academic content.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{essays.length}+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Published Essays</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15K+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Total Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Academic Journals</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <GraduationCap size={20} />
                  Request Full Archive
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-gray-800 border border-gold text-gold hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ExternalLink size={20} />
                  Academic Inquiries
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8" data-aos="fade-up">
          <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Citation Information</h4>
          <p className="text-gray-300 mb-6">
            All essays are available for academic citation. Please use the following format for reference:
          </p>
          <div className="bg-black/50 border border-gray-800 rounded-xl p-6 mb-6">
            <code className="text-gray-300 text-sm md:text-base font-mono leading-relaxed">
              Galaher, Towner. "{essays[0].title}." <em>Musical Writings Archive</em>, {formatDate(essays[0].publicationDate)}. Web.
            </code>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <Download size={16} />
              BibTeX Format
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essays;
