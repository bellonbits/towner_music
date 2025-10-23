import MusicalNotes from './MusicalNotes';

const Essays = () => {
  const essays = [
    {
      title: 'Parallel Developments and Cross-cultural Exchange in the music of Cuban and New Orleans',
      period: '1900-1920',
      excerpt: 'An exploration of the musical connections between Cuba and New Orleans during the early 20th century...'
    },
    {
      title: 'New Orleans R&B',
      period: '1945-1970',
      excerpt: 'The evolution of rhythm and blues in New Orleans and its impact on modern music...'
    },
    {
      title: 'History of Latin Music in New York City',
      period: '1950s-Present',
      excerpt: 'The vibrant history and influence of Latin music in the cultural melting pot of New York...'
    }
  ];

  return (
    <section id="essays" className="essays-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Essays</h2>
          <span>Musical Writings</span>
        </div>
        <div className="essays-list">
          {essays.map((essay, index) => (
            <div
              key={index}
              className="essay-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="essay-info">
                <h3>{essay.title}</h3>
                <p className="essay-date">{essay.period}</p>
                <p className="essay-excerpt">{essay.excerpt}</p>
                <a href="#contact" className="btn">Read Essay</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essays;
