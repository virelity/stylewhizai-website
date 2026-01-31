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
          <Button
            onClick={() => {
              window.Calendly.initPopupWidget({
                url: "https://calendly.com/omaima-rh/stylewhizai-demo",
              });
              return false;
            }}
            className="cta-main-btn"
          >
            Schedule a Demo <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
