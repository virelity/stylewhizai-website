import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./MobileAppCarousel.css";
import appimage from "../assets/appimage.png";
import appimage1 from "../assets/appimage1.png";
import appimage2 from "../assets/appimage2.jpg";

const FutureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Outfit Recommendations",
      description: "Get personalized style suggestions powered by advanced AI",
      image: appimage1,
    },
    {
      title: "Virtual Fitting Room",
      description:
        "Step into the future with immersive virtual fitting experiences",
      image: appimage,
    },
    {
      title: "Smart Wardrobe",
      description:
        "Organize and plan your outfits with intelligent wardrobe management",
      image: appimage2,
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
        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>

          <div className="carousel-content">
            <div className="mobile-carousel-slide">
              <div className="phone-display">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                />
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
      </div>
    </section>
  );
};

export default FutureCarousel;
