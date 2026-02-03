import Header from "../components/Header";
import Footer from "../components/Footer";
import { Trash2, AlertTriangle, Mail } from "lucide-react";
import "./LegalPages.css";

const DeleteAccount = () => {
    return (
        <div className="legal-page">
            <Header />
            <main className="legal-content-wrapper">
                <div className="legal-container">
                    <h1 className="legal-title">Account Deletion</h1>
                    <div className="legal-card">
                        <div className="deletion-header">
                            <Trash2 size={48} color="#ff4d4d" />
                            <p className="last-updated">Last Updated: February 3, 2026</p>
                        </div>

                        <section className="legal-section">
                            <h2>How to Delete Your Account</h2>
                            <p>
                                We value your privacy and provide a simple way to manage your data. You can delete your StyleWhiz AI account and all associated personal information through either of the following methods:
                            </p>

                            <div className="legal-subsection">
                                <h3>Method 1: In-App Deletion (Recommended)</h3>
                                <p>1. Open the StyleWhiz AI mobile app.</p>
                                <p>2. Navigate to your <strong>Profile</strong> tab.</p>
                                <p>3. Go to <strong>Settings</strong> &gt; <strong>Privacy & Security</strong>.</p>
                                <p>4. Tap on <strong>Delete Account</strong> and confirm your choice.</p>
                            </div>

                            <div className="legal-subsection">
                                <h3>Method 2: Email Request</h3>
                                <p>
                                    If you no longer have access to the app, you can request account deletion by emailing our support team.
                                </p>
                                <p>
                                    Please send an email from your registered email address to:
                                    <br />
                                    <a href="mailto:stylewhizai@gmail.com" className="contact-email">stylewhizai@gmail.com</a>
                                </p>
                                <p>Subject: Account Deletion Request - [Your Name]</p>
                            </div>
                        </section>

                        <section className="legal-section warning-box">
                            <div className="warning-content">
                                <AlertTriangle size={24} color="#ff4d4d" />
                                <h3>What Happens When You Delete Your Account?</h3>
                            </div>
                            <ul>
                                <li><strong>Personal Data:</strong> Your name, email, and profile details are permanently removed from our active databases.</li>
                                <li><strong>AI Profile:</strong> Your detected body type, skin undertone, and style preferences are deleted.</li>
                                <li><strong>Image Assets:</strong> All photos uploaded for virtual try-ons are permanently deleted from our <strong>AWS S3</strong> storage.</li>
                                <li><strong>Wishlist & History:</strong> Your saved items and shopping history will be lost and cannot be recovered.</li>
                            </ul>
                            <p className="deletion-note">
                                <em>Note: Some transactional data may be retained for a limited period solely for legal and accounting compliance in accordance with UAE/India laws.</em>
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Data Processing Time</h2>
                            <p>
                                Once an account deletion request is initiated via the app, it is processed immediately. Email requests are typically processed within 48–72 hours after verification of identity.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Contact Support</h2>
                            <p>
                                If you have any issues during the deletion process, please reach out to us at <a href="mailto:stylewhizai@gmail.com" className="contact-email">stylewhizai@gmail.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DeleteAccount;
