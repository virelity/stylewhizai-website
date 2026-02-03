import { Sparkles, Layers, Users } from 'lucide-react';
import { Button } from './ui/button';
import './ARVRSection.css';

const ARVRSection = () => {
  return (
    <section id="ai-assistance" className="arvr-section">
      <div className="arvr-container">
        <div className="arvr-content">
          <div className="section-badge">
            <Sparkles size={20} />
            <span>Advanced Technology</span>
          </div>
          <h2 className="section-title">An Advanced AR/AI Smart Service</h2>
          <p className="section-description">
            Our platform utilizes cutting-edge augmented reality (AR)
            technologies to suggest personalized styles to users based on their preferences,
            body type, and fashion trends.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={32} />
              </div>
              <h3>AI-Powered Styling</h3>
              <p>Get personalized outfit recommendations powered by advanced AI algorithms</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Layers size={32} />
              </div>
              <h3>Virtual Try-On</h3>
              <p>Try on clothes virtually with realistic AR simulation technology</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Personalized Experience</h3>
              <p>Tailored suggestions based on your unique style and preferences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ARVRSection;