import { ShoppingBag, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";
import "./ShoppingExperience.css";
import MobileAppCarousel from "./MobileAppCarousel";

const ShoppingExperience = ({onDownloadClick}) => {
  return (
    <section id="virtual-tryon" className="shopping-section">
      <div className="shopping-container">
        <MobileAppCarousel />
        {/* <div className="shopping-visual">
          <div className="visual-card">
            <ShoppingBag size={80} strokeWidth={1.5} />
          </div>
        </div> */}
        <div className="shopping-content">
          <h2 className="section-title">Transform Your Shopping Experience</h2>
          <p className="section-description">
            StyleWhizAI transforms the way you shop — discover outfits tailored
            to your taste, try them virtually with AR, and make confident style
            choices powered by AI.
          </p>
          <div className="highlight-box">
            <Sparkles size={24} />
            <p>
              Your shopping journey just got smarter — fashion meets innovation.
            </p>
          </div>
          <div className="benefits-list">
            <div className="benefit-item">
              <Zap size={20} />
              <span>Personalized outfit recommendations</span>
            </div>
            <div className="benefit-item">
              <Zap size={20} />
              <span>Virtual AR try-on technology</span>
            </div>
            <div className="benefit-item">
              <Zap size={20} />
              <span>AI-powered style confidence</span>
            </div>
          </div>
          <Button className="experience-btn" onClick={onDownloadClick}>Experience Smart Shopping</Button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingExperience;
