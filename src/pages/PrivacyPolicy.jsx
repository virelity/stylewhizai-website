import Header from "../components/Header";
import Footer from "../components/Footer";
import "./LegalPages.css";

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <Header />
            <main className="legal-content-wrapper">
                <div className="legal-container">
                    <h1 className="legal-title">Privacy Policy</h1>
                    <div className="legal-card">
                        <p className="last-updated">Last Updated: January 31, 2026</p>

                        <section className="legal-section">
                            <h2>1. Introduction</h2>
                            <p>StyleWhiz AI ("we," "our," or "us"), operated by <strong>Virelity Solutions</strong>, is dedicated to protecting your privacy while providing a cutting-edge, personalized fashion experience. This Privacy Policy outlines how we collect, process, and protect your data across our mobile application and related services.</p>
                        </section>

                        <section className="legal-section">
                            <h2>2. Information We Collect</h2>
                            <div className="legal-subsection">
                                <h3>2.1 Personal Identification Information</h3>
                                <p>We collect information you provide directly to us, including your <strong>name, email address, phone number, and delivery addresses</strong> when you create an account, sign up for services, or interact with our platform.</p>
                            </div>

                            <div className="legal-subsection">
                                <h3>2.2 Artificial Intelligence & Processing Data</h3>
                                <p>To provide our "AI Stylist" and "High-Fidelity Virtual Try-On" features, we process:</p>
                                <ul>
                                    <li><strong>Images & Selfies:</strong> Photos you upload for body type detection and virtual fitting. These are processed using both our proprietary algorithms and third-party AI frameworks.</li>
                                    <li><strong>Profile Analysis:</strong> We analyze your selfie at the start to detect your <strong>gender, age range, skin undertone, and body type</strong>. This is critical for generating realistic try-on results and accurate style recommendations.</li>
                                    <li><strong>Gemini Nano Banana Model:</strong> To generate life-like virtual try-on results, your image data is passed to the <strong>Gemini Nano Banana</strong> large-scale generative model. This processing is transient and strictly limited to image synthesis.</li>
                                    <li><strong>Style Preferences:</strong> Data generated from your "Swipes" (likes/dislikes) and wishlist to train your personal style profile.</li>
                                </ul>
                            </div>

                            <div className="legal-subsection">
                                <h3>2.3 Transactional Data</h3>
                                <p>We collect details of products you view, items in your bag, and your purchase history. All image assets and user-uploaded content are stored securely in <strong>AWS S3</strong> with industry-standard encryption.</p>
                            </div>
                        </section>

                        <section className="legal-section">
                            <h2>3. How We Use Your Information</h2>
                            <p>Your data is used to:</p>
                            <ul>
                                <li>Generate personalized fashion recommendations using our AI engine.</li>
                                <li>Provide a "Virtual Fitting Room" experience by overlaying products on your images via the <strong>Gemini Nano Banana</strong> generative platform.</li>
                                <li>Detect and analyze your <strong>undertone and body type</strong> from selfies to optimize garment fitting.</li>
                                <li>Process and fulfill your orders, including shipping and delivery updates.</li>
                                <li>Improve our AI models and user interface through anonymized usage analysis.</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>4. Data Retention & Security</h2>
                            <p>We implement rigorous security measures, including <strong>end-to-end encryption</strong> for image transfers between our app and the <strong>Gemini Nano Banana</strong> processing nodes.</p>
                            <ul>
                                <li><strong>AI Images & AWS S3:</strong> Uploaded selfies are used for processing and are stored securely in <strong>AWS S3</strong> unless deleted by you.</li>
                                <li><strong>Data Protection:</strong> We use industry-standard protocols to prevent unauthorized access, alteration, or disclosure of your personal data.</li>
                                <li><strong>Access Control:</strong> All data is sent and stored securely over <strong>HTTPS</strong>.</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>5. Sharing of Information</h2>
                            <p>We do not sell your personal data. We share information only with:</p>
                            <ul>
                                <li><strong>AI Infrastructure Partners:</strong> We utilize the <strong>Gemini Nano Banana</strong> model for image generation services. Data shared is strictly limited to the images required for synthesis.</li>
                                <li><strong>Service Providers:</strong> Cloud hosting (<strong>AWS</strong>), payment processing partners, and logistics providers.</li>
                                <li><strong>Legal Compliance:</strong> When required by law or to protect our rights and user safety.</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>6. Your Rights and Choices</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access, update, or delete your account information at any time.</li>
                                <li>Withdraw consent for Camera or Gallery permissions via device settings.</li>
                                <li>Request full deletion of your user data and style profile anytime.</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>7. Children's Privacy</h2>
                            <p>StyleWhiz AI is not intended for individuals under the age of 13. We do not knowingly collect data from children.</p>
                        </section>

                        <section className="legal-section">
                            <h2>8. Contact Us</h2>
                            <p>For questions regarding this policy or your data, please contact us at:</p>
                            <p className="contact-email">stylewhizai@gmail.com</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
