import Header from "../components/Header";
import Footer from "../components/Footer";
import "./LegalPages.css";

const Terms = () => {
    return (
        <div className="legal-page">
            <Header />
            <main className="legal-content-wrapper">
                <div className="legal-container">
                    <h1 className="legal-title">Terms & Conditions</h1>
                    <div className="legal-card">
                        <p className="last-updated">Last Updated: January 31, 2026</p>

                        <section className="legal-section">
                            <h2>1. Acceptance of Terms</h2>
                            <p>By accessing or using the StyleWhiz AI platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
                        </section>

                        <section className="legal-section">
                            <h2>2. Description of Service</h2>
                            <p>StyleWhiz AI provides an advanced AI-powered fashion ecosystem. Our services include automated personal styling recommendations based on user preferences, a high-fidelity virtual try-on experience that adapts to your body type, and a curated fashion marketplace.</p>
                        </section>

                        <section className="legal-section">
                            <h2>3. AI Data Usage & Gemini Nano Banana Integration</h2>
                            <p>By using our "Virtual Try-On" feature, you explicitly consent to the collection and processing of your personal images (selfies). To provide high-quality image generation and garment fitting, StyleWhiz AI utilizes the <strong>Gemini Nano Banana</strong> model and stores assets in <strong>AWS S3</strong>.</p>
                            <p>Your uploaded images are strictly shared with this processing model for the sole purpose of generating your virtual try-on visuals. We analyze your <strong>gender, age range, skin undertone, and body type</strong> to enhance the accuracy of the AI results.</p>
                        </section>

                        <section className="legal-section">
                            <h2>4. User Responsibilities</h2>
                            <p>Users are responsible for:</p>
                            <ul>
                                <li>Maintaining the confidentiality of account credentials.</li>
                                <li>All activities that occur under their account.</li>
                                <li>Providing accurate information for profile analysis (gender, age group, etc.).</li>
                                <li>Using the app only for lawful fashion-related purposes.</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>5. Intellectual Property</h2>
                            <p>All app content, proprietary algorithms, AI technology, and the <strong>Gemini Nano Banana</strong> integration workflows are the property of StyleWhiz.ai (Virelity Solutions). You may not copy, modify, or reverse-engineer any part of the application.</p>
                        </section>

                        <section className="legal-section">
                            <h2>6. Limitation of Liability</h2>
                            <p>StyleWhiz AI is provided "as is." While we strive for realism, AI-generated styling results are probabilistic and may vary. We do not guarantee that the AI-generated results will perfectly match your real-life appearance.</p>
                        </section>

                        <section className="legal-section">
                            <h2>7. Governing Law</h2>
                            <p>These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai.</p>
                        </section>

                        <section className="legal-section">
                            <h2>8. Changes to Terms</h2>
                            <p>We reserve the right to modify these terms at any time. Your continued use of the app after changes constitutes acceptance of the new terms.</p>
                        </section>

                        <section className="legal-section">
                            <h2>9. Contact Us</h2>
                            <p>For legal inquiries, please contact us at:</p>
                            <p className="contact-email">stylewhizai@gmail.com</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
