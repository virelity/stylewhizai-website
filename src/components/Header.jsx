import { useState, useEffect } from "react";
import { Menu, X, Smartphone, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "../hooks/use-toast";
import "./Header.css";
import Logo from "@/assets/logo/logo_white.png";

const Header = ({
  handleDownloadClick,
  showRegisterModal,
  setShowRegisterModal,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
  });
  const { toast } = useToast();

  // Check for existing token on component mount
  useEffect(() => {
    const token = localStorage.getItem("stylewhizai_token");
    if (token) {
      setUserToken(token);
      setIsAuthenticated(true);
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegister = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://stylewhizai.net/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();

        // Store token in localStorage
        localStorage.setItem("stylewhizai_token", data.token);
        setUserToken(data.token);
        setIsAuthenticated(true);

        toast({
          title: "Registration Successful! 🎉",
          description: "You can now download the StyleWhizAI app.",
          variant: "default",
        });

        setIsModalOpen(false);
        setFormData({ name: "", email: "", country: "" });
      } else {
        const errorData = await response.json();
        toast({
          title: "Registration Failed",
          description: errorData.detail || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description:
          "Unable to connect to server. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // const handleDownloadClick = () => {
  //   if (isAuthenticated && userToken) {
  //     // User is authenticated, proceed with download
  //     downloadAPK();
  //   } else {
  //     // User not authenticated, show registration modal
  //     setIsModalOpen(true);
  //   }
  // };

  const downloadAPK = async () => {
    setIsDownloading(true);

    try {
      const response = await fetch("https://stylewhizai.net/api/download/apk", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        toast({
          title: "Download Authorized! 📱",
          description: "Starting APK download...",
          variant: "default",
        });

        // Trigger the actual download
        window.location.href = data.download_url;
      } else {
        const errorData = await response.json();

        toast({
          title: "Download Failed",
          description: errorData.detail || "Please try again.",
          variant: "destructive",
        });

        // If token is invalid, clear it and show registration
        localStorage.removeItem("stylewhizai_token");
        setUserToken(null);
        setIsAuthenticated(false);
        setIsModalOpen(true);
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description:
          "Unable to connect to server. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Japan",
    "South Korea",
    "Singapore",
    "India",
    "Brazil",
    "Mexico",
    "Argentina",
    "Other",
  ];

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <img src={Logo} className="logo" alt="StyleWhizAi Logo" />
          {/* <h1>StyleWhizAI</h1> */}
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <button
            onClick={() => scrollToSection("ai-assistance")}
            className="nav-link"
          >
            AI Assistance
          </button>
          <button
            onClick={() => scrollToSection("virtual-tryon")}
            className="nav-link"
          >
            Virtual Tryon
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About Us
          </button>
          <button onClick={() => scrollToSection("faq")} className="nav-link">
            Resources
          </button>
        </nav>

        <div className="header-actions-container">
          <div className="header-actions">
            <button
              className="app-icon-button android-icon"
              title="Download for Android"
              onClick={handleDownloadClick}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.6818 12 7.6818s-3.5902.5621-5.1367 1.6649L4.841 5.8437a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
                </svg>
              )}
            </button>

            <Dialog
              open={showRegisterModal}
              onOpenChange={setShowRegisterModal}
            >
              <DialogContent className="registration-modal">
                <DialogHeader>
                  <DialogTitle>Get Early Access</DialogTitle>
                </DialogHeader>
                <div className="modal-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) =>
                        handleInputChange("country", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    onClick={handleRegister}
                    className="register-button"
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.country ||
                      isLoading
                    }
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Registering...
                      </>
                    ) : (
                      "Register for Early Access"
                    )}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <button
              className="app-icon-button apple-icon"
              title="Download for iOS"
              // onClick={handleDownloadClick}
              disabled={true}
            >
              {isDownloading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              )}
            </button>

            <button className="cta-button" onClick={handleDownloadClick}>
              Get Started
            </button>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
