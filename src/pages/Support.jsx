import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Mail, Clock, HelpCircle, CreditCard, Camera, Trash2 } from "lucide-react";
import "./LegalPages.css";

const Support = () => {
    return (
        <div className="legal-page">
            <Header />
            <main className="legal-content-wrapper">
                <div className="legal-container">
                    <h1 className="legal-title">Support Center</h1>
                    <div className="support-grid">
                        <div className="support-card header-span">
                            <Mail className="support-icon" size={48} />
                            <h2>Contact Us</h2>
                            <p>Our dedicated support team is here to help you with any questions or issues.</p>
                            <a href="mailto:stylewhizai@gmail.com" className="support-email-btn">
                                stylewhizai@gmail.com
                            </a>
                            <div className="response-time">
                                <Clock size={16} />
                                <span>Estimated Response Time: 24–48 hours</span>
                            </div>
                        </div>

                        <div className="support-card">
                            <HelpCircle className="support-icon" size={32} />
                            <h3>Login Issues</h3>
                            <p>Trouble accessing your account? Contact us for password resets or recovery.</p>
                        </div>

                        <div className="support-card">
                            <CreditCard className="support-icon" size={32} />
                            <h3>Orders & Payments</h3>
                            <p>Questions regarding your order status, payment methods, or refunds.</p>
                        </div>

                        <div className="support-card">
                            <Camera className="support-icon" size={32} />
                            <h3>AI Try-On Issues</h3>
                            <p>Need help with the virtual try-on feature? Report bugs or seek guidance.</p>
                        </div>

                        <div className="support-card">
                            <Trash2 className="support-icon" size={32} />
                            <h3>Data Deletion</h3>
                            <p>Manage your privacy. Request full deletion of your account and personal data.</p>
                            <Link to="/delete-account" className="card-link">Learn How &rarr;</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Support;
