import { MessageSquare, ScanFace, Ruler, User } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: <User size={40} />,
      title: 'Personalized Recommendations',
      description: 'Get AI-driven outfit suggestions tailored to your unique style, body type, and preferences.'
    },
    {
      icon: <ScanFace size={40} />,
      title: 'Virtual Try-On',
      description: 'Experience clothes virtually using advanced AR technology before you make a purchase.'
    },
    {
      icon: <MessageSquare size={40} />,
      title: 'Discovery Swipe',
      description: 'Explore fashion effortlessly with our intuitive swipe interface—like a dating app for your wardrobe.'
    },
    {
      icon: <Ruler size={40} />,
      title: 'Variety to Explore',
      description: 'Discover a vast collection of brands and styles, curated to help you find your perfect look.'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-title">Latest Services</h2>
        <p className="section-subtitle">
          Cutting-edge features powered by AI and AR technology
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;