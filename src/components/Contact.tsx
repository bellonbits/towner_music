import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Newspaper,
  Phone,
  Send,
  Users,
  Youtube,
} from 'lucide-react';
import MusicalNotes from './MusicalNotes';

type SubmitStatus = 'idle' | 'success' | 'error';

const inquiryTypes = [
  { id: 'general', label: 'General Inquiry', icon: <MessageCircle size={16} /> },
  { id: 'booking', label: 'Performance Booking', icon: <Calendar size={16} /> },
  { id: 'education', label: 'Educational Program', icon: <BookOpen size={16} /> },
  { id: 'collaboration', label: 'Collaboration', icon: <Users size={16} /> },
  { id: 'media', label: 'Media/Press', icon: <Newspaper size={16} /> },
  { id: 'workshop', label: 'Workshop', icon: <Award size={16} /> },
];

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'inrhythmnyc@yahoo.com',
    link: 'mailto:inrhythmnyc@yahoo.com',
    description: 'Best for formal inquiries',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+1 (917) 640-8029',
    link: 'tel:+19176408029',
    description: 'Available 10AM-6PM EST',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'New York, NY',
    link: '#',
    description: 'Based in NYC, available worldwide',
  },
  {
    icon: <Clock size={20} />,
    label: 'Response Time',
    value: '24-48 hours',
    link: '#',
    description: 'Typically respond within 2 business days',
  },
];

const socialLinks = [
  {
    platform: 'YouTube',
    icon: <Youtube size={20} />,
    url: 'https://www.youtube.com/@GalaherTheLeftyGrooveLab',
    color: 'bg-red-600 hover:bg-red-700',
    followers: '50K+',
  },
  {
    platform: 'Instagram',
    icon: <Instagram size={20} />,
    url: '#',
    color: 'bg-pink-600 hover:bg-pink-700',
    followers: '10K+',
  },
  {
    platform: 'Facebook',
    icon: <Facebook size={20} />,
    url: '#',
    color: 'bg-blue-600 hover:bg-blue-700',
    followers: '5K+',
  },
  {
    platform: 'Spotify',
    icon: <Music2 size={20} />,
    url: '#',
    color: 'bg-green-600 hover:bg-green-700',
    followers: '25K+',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    try {
      if (formRef.current) {
        await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', inquiryType: 'general' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <MusicalNotes />
      <div className="container">
        <div className="section-title mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold">Get in Touch</h2>
          <p className="text-gray-300 text-lg md:text-xl mt-3">
            Let's discuss performances, education, or collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 md:p-8" data-aos="fade-right">
            <div className="mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent rounded-full blur-lg" />
                <img
                  src="/assets/contact.png"
                  alt="Towner Galaher performing live"
                  className="relative w-full h-full object-cover rounded-full border-4 border-gold shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Towner Galaher</h3>
              <p className="text-gold text-center text-lg font-medium mb-6">Professional Drummer & Educator</p>
              <div className="flex justify-center">
                <img
                  src="/assets/inrhythm-plate.jpg"
                  alt="Towner's INRHYTHM New York license plate"
                  className="w-full max-w-[280px] h-auto rounded-lg border-2 border-gold shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <span className="text-gold">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm text-gray-400 font-medium">{item.label}</span>
                      {item.label === 'Response Time' && (
                        <span className="text-xs text-gold bg-gold/10 px-2 py-1 rounded-full">Quick Reply</span>
                      )}
                    </div>
                    <a href={item.link} className="text-white font-medium hover:text-gold transition-colors duration-300 block truncate">
                      {item.value}
                    </a>
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users size={20} className="text-gold" />
                Connect on Social Media
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95`}
                    aria-label={`Follow on ${social.platform}`}
                  >
                    {social.icon}
                    <span className="text-sm font-semibold">{social.platform}</span>
                    <span className="text-xs opacity-90">{social.followers}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-5 border border-gray-700/50">
              <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                <MessageCircle size={18} className="text-gold" />
                Quick Notes
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-gold mt-1">•</span>
                  Include performance dates in booking requests
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-gold mt-1">•</span>
                  Educational program inquiries: specify age group and goals
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-gold mt-1">•</span>
                  Response typically within 24-48 business hours
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 md:p-8" data-aos="fade-left">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-300">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Type of Inquiry</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                      className={`flex items-center gap-2 justify-center p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        formData.inquiryType === type.id
                          ? 'bg-gold text-black'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700/50'
                      }`}
                    >
                      {type.icon}
                      {type.label}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="inquiryType" value={formData.inquiryType} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 resize-vertical"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 disabled:opacity-60 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-center text-green-400 font-medium">Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-center text-red-400 font-medium">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
