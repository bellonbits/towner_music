const Performances = () => {
  const performances = [
    {
      venue: 'UPDATES COMING SOON',
      location: 'New York, NY',
      date: '2025',
      time: '8:00 PM - 11:00 PM',
      description: 'UPDATES COMING SOON.',
      tag: 'Iconic Venue'
    },
    {
      venue: 'UPDATES COMING SOON',
      location: 'Portland, OR',
      date: '2025',
      time: '7:30 PM - 10:30 PM',
      description: 'Full band performance with new arrangements from the "Brothers" album.',
      tag: 'Festival'
    },
    {
      venue: 'UPDATES COMING SOON',
      location: 'Chicago, IL',
      date: '2025',
      time: '6:00 PM - 9:00 PM',
      description: 'Special duo performance featuring intimate arrangements and spontaneous musical dialogue.',
      tag: 'Duo Performance'
    },
    {
      venue: 'UPDATES COMING SOON',
      location: 'Los Angeles, CA',
      date: '2025',
      time: '8:30 PM - 11:30 PM',
      description: 'Classic organ trio performance featuring soul jazz and blues-influenced compositions.',
      tag: 'Trio Performance'
    },
  ];

  return (
    <section id="performances" className="performances-section">
      <div className="container">
        <div className="section-title">
          <h2>Performances</h2>
          <span>Upcoming Shows</span>
        </div>
        <div className="performances-container">
          {performances.map((performance, index) => (
            <div key={index} className="performance-card">
              <div className="performance-photo">
                <div className="performance-placeholder"></div>
                <div className="venue-tag">{performance.tag}</div>
              </div>
              <div className="performance-content">
                <div className="performance-date">{performance.date}</div>
                <h3 className="performance-title">{performance.venue}</h3>
                <p className="performance-location">{performance.location}</p>
                <p className="performance-time">{performance.time}</p>
                <p className="performance-description">{performance.description}</p>
                <a href="#contact" className="btn">
                  <span>Get Tickets</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performances;
