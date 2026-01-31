import { MessageSquare, ScanFace, Ruler, User } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: <MessageSquare size={40} />,
      title: 'AI Fashion Chatbot',
      description: 'Get personalized fashion advice based on your preferences through our intelligent AI chatbot.'
    },
    {
      icon: <ScanFace size={40} />,
      title: 'Face Scanning',
      description: 'Advanced facial recognition to recommend styles that complement your unique features.'
    },
    {
      icon: <Ruler size={40} />,
      title: 'Size Recommendation',
      description: 'Accurate size suggestions based on your measurements and brand-specific sizing charts.'
    },
    {
      icon: <User size={40} />,
      title: 'Body Type Analysis',
      description: 'Personalized style recommendations tailored to your body type and fashion preferences.'
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