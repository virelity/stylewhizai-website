import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnnouncementBanner from "../components/AnnouncementBanner";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ARVRSection from "../components/ARVRSection";
import ShoppingExperience from "../components/ShoppingExperience";
import ProfileSection from "../components/ProfileSection";
import MobileAppSection from "../components/MobileAppSection";
import FutureCarousel from "../components/FutureCarousel";
import FAQSection from "../components/FAQSection";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const location = useLocation();

  const checkToken = () => {
    const token = localStorage.getItem("stylewhizai_token");
    if (token) {
      setUserToken(token);
      setIsAuthenticated(true);
    } else {
      setUserToken(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    // Run once on mount
    checkToken();

    // Re-run whenever localStorage changes
    window.addEventListener("storage", checkToken);

    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        // Clear state so it doesn't scroll again on re-render
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  const handleDownloadClick = async () => {
    const token = localStorage.getItem("stylewhizai_token");
    if (token) {
      try {
        const response = await fetch(
          "https://stylewhizai.net/api/download/apk",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.ok) {
          const data = await response.json();
          window.location.href = data.download_url;
        } else {
          localStorage.removeItem("stylewhizai_token");
          setIsAuthenticated(false);
          setShowRegisterModal(true);
        }
      } catch {
        alert("Network error, please try again later.");
      }
    } else {
      setShowRegisterModal(true);
    }
  };

  return (
    <div className="homepage">
      <AnnouncementBanner />
      <Header
        handleDownloadClick={handleDownloadClick}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />
      <HeroSection onDownloadClick={handleDownloadClick} />
      <ARVRSection />
      <ShoppingExperience onDownloadClick={handleDownloadClick} />
      <ProfileSection />
      <MobileAppSection />
      <FutureCarousel />
      <FAQSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
