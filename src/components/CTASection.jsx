import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Ready to Explore The Future of Fashion?</h2>
          <p>
            Discover personalized AI styling, virtual AR try-ons, and smart
            wardrobe planning. Step into the next generation of fashion today.
          </p>
          <div className="coming-soon-badge">
            Coming Soon on Play Store & App Store
          </div>
          <p className="launch-date">Launching February 5, 2026</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
