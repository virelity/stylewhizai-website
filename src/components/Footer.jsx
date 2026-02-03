import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      const response = await fetch('https://stylewhizai.net/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Newsletter Subscription Successful! 📧",
          description: "Thank you for subscribing! You'll receive the latest fashion insights and updates.",
          variant: "default",
        });
        setEmail('');
      } else {
        const errorData = await response.json();
        toast({
          title: "Subscription Failed",
          description: errorData.detail || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to connect to server. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <h2>StyleWhizAI</h2>
            </div>
            <p className="footer-description">
              StyleWhizAI is an advanced AR/AI smart service platform that transforms
              your fashion experience with personalized AI styling and virtual try-on technology.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/stylewhizai" target="_blank" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/stylewhizai/#" target="_blank" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/stylewhizai/" target="_blank" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="footer-column">
            <h3>Features</h3>
            <ul>
              <li><a href="#ai-assistance">AI Styling</a></li>
              <li><a href="#virtual-tryon">Virtual Try-On</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="#about">Our Story</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><Link to="/support">Support Center</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="mailto:stylewhizai@gmail.com">stylewhizai@gmail.com</a></li>
            </ul>
          </div>

          {/* Newsletter */}

        </div>
      </div>

      {/* Sub Footer */}
      <div className="sub-footer">
        <div className="sub-footer-content">
          <p>&copy; 2026 StyleWhizAI. All Rights Reserved.</p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms</Link>
            <span className="separator">|</span>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;