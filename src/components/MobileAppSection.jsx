import { Smartphone, Shield, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import './MobileAppSection.css';
import appimage from '../assets/appimage4.jpg';

const MobileAppSection = () => {
  return (
    <section id="about" className="mobile-app-section">
      <div className="mobile-app-container">
        <div className="app-content">
          <h2 className="section-title">StyleWhiz Next-Gen Mobile App</h2>
          <p className="section-description">
            StyleWhiz is your AI-powered fashion companion offering smart outfit suggestions 
            and virtual AR try-ons — redefining how users discover their style.
          </p>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-small">
                <Sparkles size={24} />
              </div>
              <div className="feature-text">
                <h4>AI-Powered Styling</h4>
                <p>Smart outfit suggestions tailored to your unique taste and preferences</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <Smartphone size={24} />
              </div>
              <div className="feature-text">
                <h4>Virtual AR Mirror</h4>
                <p>Try on clothes virtually with cutting-edge augmented reality technology</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <TrendingUp size={24} />
              </div>
              <div className="feature-text">
                <h4>Trend Analysis</h4>
                <p>Stay ahead with real-time fashion trends and personalized recommendations</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <Shield size={24} />
              </div>
              <div className="feature-text">
                <h4>Secure & Private</h4>
                <p>Your data is protected with enterprise-grade encryption and privacy measures</p>
              </div>
            </div>
          </div>
          
          <div className="hype-banner">
            <p>The next big thing in fashion tech is here — are you ready to experience it?</p>
          </div>
          
          <Button className="discover-btn">Discover What's Next</Button>
        </div>
        
        <div className="app-visual">
          <div className="phone-display">
            <img 
              src={appimage} 
              alt="StyleWhiz Mobile App"
              className="phone-screen-content"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;