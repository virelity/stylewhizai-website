import { User, Target, Lightbulb } from 'lucide-react';
import './ProfileSection.css';

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-content">
          <div className="section-badge">
            <User size={20} />
            <span>Our Story</span>
          </div>
          <h2 className="section-title">Meet The Visionary Behind StyleWhizAI</h2>
          
          <div className="founder-story">
            <div className="story-card">
              <div className="story-icon">
                <Target size={32} />
              </div>
              <h3>The Challenge</h3>
              <p>
                Omayma El Halabi, the owner of StyleWhizAI, generated this groundbreaking idea from her direct 
                interaction with clients in the fashion store. She realized that customers face certain challenges 
                in their online shopping journey that make them unsatisfied with their shopping experience.
              </p>
              <p className="highlight-text">
                The main challenges: <strong>Size/Fit concerns</strong> and <strong>difficulty returning items</strong>. 
                A 2022 report from the Business of Fashion journal supported these observations.
              </p>
            </div>
            
            <div className="story-card">
              <div className="story-icon">
                <Lightbulb size={32} />
              </div>
              <h3>The Solution</h3>
              <p>
                We thought of a way to overcome such challenges via the application of AI techniques from 
                our experience in the AI field. And here comes StyleWhizAI - a revolutionary platform that 
                combines AI and AR/AI technologies to transform the fashion shopping experience.
              </p>
              <p className="highlight-text">
                Our mission: Eliminate size concerns and return hassles through virtual try-on technology 
                and AI-powered personalization.
              </p>
            </div>
          </div>
          
          <div className="vision-box">
            <p>
              <strong>StyleWhizAI</strong> is an AI fashion chatbot that provides personalized fashion advice 
              to customers based on their preferences, paired with an AR scanning mirror application that 
              allows customers to try on clothes virtually - making online shopping confident and hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;