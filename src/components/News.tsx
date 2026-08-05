import MusicalNotes from './MusicalNotes';

interface NewsItem {
  month: string;
  day: string;
  year: string;
  title: string;
  description: string;
}

const newsItems: NewsItem[] = [
  {
    month: 'MAY',
    day: '15',
    year: '2026',
    title: 'New Album Announcement',
    description:
      'Excited to announce that the recording sessions for the new album will take place on August 5th and 6th at Anjuna recording studio Portland Oregon.',
  },
  {
    month: 'APR',
    day: '27',
    year: '2026',
    title: 'Summer Workshop Series',
    description:
      'Registration now open for the summer workshop series focusing on advanced rhythmic concepts and improvisational techniques.',
  },
  {
    month: 'APR',
    day: '12',
    year: '2026',
    title: 'Tour Dates',
    description: 'Coming soon, concert and club venues this fall. Check the performance schedule for cities and dates.',
  },
  {
    month: 'FEB',
    day: '14',
    year: '2026',
    title: 'Valentine’s Jazz Night at Tamarind',
    description:
      'Celebrate love with great Indian food and live jazz featuring the Towner Galaher Organ Trio at Tamarind Fine Indian Dining in Nyack, NY.',
  },
  {
    month: 'FEB',
    day: '17',
    year: '2026',
    title: 'Mardi Gras with Towner Galaher and Friends',
    description: 'Laissez le bon ton rouler! Live music celebrating Mardi Gras at The Pieman in Valley Cottage, NY.',
  },
];

const News = () => {
  return (
    <section id="news" className="section news-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>News</h2>
          <span>Latest Updates</span>
        </div>
        <div className="news-grid">
          {newsItems.map((item) => (
            <div className="news-card" key={`${item.title}-${item.day}`} data-aos="fade-up">
              <div className="news-date">
                <span className="news-month">{item.month}</span>
                <span className="news-day">{item.day}</span>
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
