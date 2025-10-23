import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';
import MusicalNotes from './MusicalNotes';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <span>Get in Touch</span>
        </div>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Let's Connect</h3>
            <div className="contact-details">
              <p><Mail size={20} /> inrhythmnyc@yahoo.com</p>
              <p><Phone size={20} /> +1 (917) 640-8029</p>
              <p><MapPin size={20} /> New York, NY</p>
            </div>
            <p>For booking inquiries, educational programs, or general questions, please use the contact form or reach out directly via email or phone. I'm always interested in new performance opportunities, collaborations, and teaching engagements.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@GalaherTheLeftyGrooveLab" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="#" aria-label="Spotify"><Music2 size={20} /></a>
            </div>
          </div>
          <div className="contact-form" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
