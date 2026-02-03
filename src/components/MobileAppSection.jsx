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
                <Smartphone size={24} />
              </div>
              <div className="feature-text">
                <h4>Virtual Try-On</h4>
                <p>Try on clothes virtually with cutting-edge AR technology before you buy</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-small">
                <Sparkles size={24} />
              </div>
              <div className="feature-text">
                <h4>AI Recommendations</h4>
                <p>Personalized style suggestions based on your unique taste and body type</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-small">
                <TrendingUp size={24} />
              </div>
              <div className="feature-text">
                <h4>Discovery Swipe</h4>
                <p>Easily explore and discover your favorite looks with a simple swipe</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-small">
                <Shield size={24} />
              </div>
              <div className="feature-text">
                <h4>Smart Filters</h4>
                <p>Find exactly what you need with options based on size, style, and occasions</p>
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