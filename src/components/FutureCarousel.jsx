import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./FutureCarousel.css";
import outfit_recommendation from "../assets/outfit_recommendation.png";
import smart_wardrobe from "../assets/smart_wordrowe.png";
import virtual_fitting from "../assets/virtual_fitting.png";

const FutureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI Outfit Recommendations",
      description: "Get personalized style suggestions powered by advanced AI",
      image: outfit_recommendation,
    },
    {
      title: "Virtual Fitting Room",
      description:
        "Step into the future with immersive virtual fitting experiences",
      image: virtual_fitting,
    },
    {
      title: "Smart Wardrobe",
      description:
        "Organize and plan your outfits with intelligent wardrobe management",
      image: smart_wardrobe,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="future-carousel-section">
      <div className="carousel-container">
        <h2 className="section-title">Step Into The Future</h2>
        <p className="section-subtitle">
          Step into a new era of fashion where technology meets individuality.
          Experience how StyleWhizAI blends AI and AR to redefine the way you
          explore style.
        </p>

        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>

          <div className="carousel-content">
            <div className="carousel-slide">
              <div className="slide-visual">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                />
              </div>
              <div className="slide-info">
                <h3>{slides[currentSlide].title}</h3>
                <p>{slides[currentSlide].description}</p>
              </div>
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="hype-tagline">
          <p>The future isn't coming — it's already here with StyleWhizAI.</p>
        </div>
      </div>
    </section>
  );
};

export default FutureCarousel;
