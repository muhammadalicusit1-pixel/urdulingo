const { useState, useEffect } = React;

// Download handler using fetch and blob
// Download handler - using temporary anchor to ensure download behavior
// Download handler - using Vercel Serverless Proxy to securely fetch from backend
const downloadAPK = () => {
    // Navigate to local API route which proxies the request to the HTTP backend
    // This allows the download to happen over HTTPS (no Mixed Content error)
    window.location.href = '/api/download';
};

// Header Component
const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#" className="logo">
                    <i className="fas fa-graduation-cap"></i>
                    Urdu Lingo
                </a>
                <ul className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#download">Download</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

// Hero Section Component
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Learn English the Smart Way</h1>
                <div className="hero-urdu urdu-text">
                    ذہین طریقے سے انگریزی سیکھیں
                </div>
                <p>
                    Master English with Urdu Lingo - the revolutionary language learning app
                    designed specifically for Urdu speakers. Interactive lessons, smart exercises,
                    and personalized learning paths.
                </p>
                <div className="download-buttons">
                    <button onClick={downloadAPK} className="download-btn" style={{ background: 'rgba(255, 255, 255, 0.95)', color: '#58CC02', border: '2px solid white', cursor: 'pointer' }}>
                        <i className="fab fa-android"></i>
                        <div>
                            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Download APK</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Android App</div>
                        </div>
                    </button>
                    <a href="#" className="download-btn" style={{ opacity: '0.6', cursor: 'not-allowed' }}>
                        <i className="fab fa-google-play"></i>
                        <div>
                            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Coming Soon</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Google Play</div>
                        </div>
                    </a>
                    <a href="#" className="download-btn" style={{ opacity: '0.6', cursor: 'not-allowed' }}>
                        <i className="fab fa-apple"></i>
                        <div>
                            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Coming Soon</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>App Store</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

// Features Component
const Features = () => {
    const features = [
        {
            icon: 'fas fa-brain',
            title: 'Smart Learning',
            titleUrdu: 'ذہین تعلیم',
            description: 'AI-powered lessons that adapt to your learning pace and style for maximum effectiveness.'
        },
        {
            icon: 'fas fa-comments',
            title: 'Interactive Exercises',
            titleUrdu: 'انٹرایکٹو مشقیں',
            description: 'Engaging speaking, listening, reading, and writing exercises with instant feedback.'
        },
        {
            icon: 'fas fa-trophy',
            title: 'Gamified Learning',
            titleUrdu: 'کھیل کی طرح سیکھنا',
            description: 'Earn XP, maintain streaks, and compete with friends to stay motivated.'
        },
        {
            icon: 'fas fa-language',
            title: 'Urdu Support',
            titleUrdu: 'اردو سپورٹ',
            description: 'Full Urdu interface with both native script and Roman Urdu for easy understanding.'
        },
        {
            icon: 'fas fa-microphone',
            title: 'Speech Recognition',
            titleUrdu: 'آواز کی شناخت',
            description: 'Advanced speech recognition technology to perfect your English pronunciation.'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Progress Tracking',
            titleUrdu: 'پیش قدمی کا جائزہ',
            description: 'Detailed analytics and progress reports to track your learning journey.'
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <h2 className="section-title">Why Choose Urdu Lingo?</h2>
                <p className="section-subtitle urdu-text">
                    اردو لنگو کیوں منتخب کریں؟
                </p>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                <i className={feature.icon}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <div className="urdu-text" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#58CC02', marginBottom: '0.5rem' }}>
                                {feature.titleUrdu}
                            </div>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Stats Component
const Stats = () => {
    const [stats, setStats] = useState([
        { number: 0, target: 32, label: 'Learning Units', labelUrdu: 'تعلیمی یونٹس' },
        { number: 0, target: 96, label: 'Micro Lessons', labelUrdu: 'مائیکرو اسباق' },
        { number: 0, target: 405, label: 'Interactive Exercises', labelUrdu: 'انٹرایکٹو مشقیں' },
        { number: 0, target: 288, label: 'Vocabulary Words', labelUrdu: 'الفاظ' }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prevStats =>
                prevStats.map(stat => ({
                    ...stat,
                    number: stat.number < stat.target ? stat.number + Math.ceil(stat.target / 50) : stat.target
                }))
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="stats">
            <div className="container">
                <h2 className="section-title">Learning by Numbers</h2>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h3>{stat.number}+</h3>
                            <p>{stat.label}</p>
                            <div className="urdu-text" style={{ fontSize: '0.9rem', opacity: '0.8' }}>
                                {stat.labelUrdu}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// About Component
const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Urdu Lingo</h2>
                <p className="section-subtitle urdu-text">
                    اردو لنگو کے بارے میں
                </p>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Our Mission</h3>
                        <div className="urdu-text" style={{ fontSize: '1.2rem', fontWeight: '600', color: '#58CC02', marginBottom: '1rem' }}>
                            ہمارا مقصد
                        </div>
                        <p>
                            Urdu Lingo is dedicated to making English education accessible and affordable for every Urdu speaker in Pakistan and around the world. We believe that language should never be a barrier to success, education, or opportunity.
                        </p>
                        <p className="urdu-text" style={{ marginTop: '1rem', lineHeight: '2' }}>
                            اردو لنگو پاکستان اور دنیا بھر میں ہر اردو بولنے والے کے لیے انگریزی تعلیم کو قابل رسائی اور سستی بنانے کے لیے وقف ہے۔ ہم یقین رکھتے ہیں کہ زبان کبھی بھی کامیابی، تعلیم یا مواقع کی راہ میں رکاوٹ نہیں ہونی چاہیے۔
                        </p>
                    </div>
                    <div className="about-stats-mini">
                        <div className="stat-mini">
                            <i className="fas fa-users"></i>
                            <h4>220M+</h4>
                            <p>Urdu Speakers Worldwide</p>
                        </div>
                        <div className="stat-mini">
                            <i className="fas fa-book"></i>
                            <h4>32 Units</h4>
                            <p>Comprehensive Curriculum</p>
                        </div>
                        <div className="stat-mini">
                            <i className="fas fa-mobile-alt"></i>
                            <h4>100% Free</h4>
                            <p>Core Learning Features</p>
                        </div>
                    </div>
                </div>
                <div className="about-features">
                    <div className="about-feature-item">
                        <i className="fas fa-graduation-cap"></i>
                        <h4>Expert Curriculum</h4>
                        <p>Designed by language education experts specifically for Urdu speakers</p>
                    </div>
                    <div className="about-feature-item">
                        <i className="fas fa-heart"></i>
                        <h4>Made with Love in Pakistan</h4>
                        <p>Built by Pakistanis, for Pakistanis, understanding local needs and culture</p>
                    </div>
                    <div className="about-feature-item">
                        <i className="fas fa-rocket"></i>
                        <h4>Continuous Innovation</h4>
                        <p>Regular updates with new features, lessons, and improvements</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact Component
const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle urdu-text">
                    ہم سے رابطہ کریں
                </p>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h4>Phone / WhatsApp</h4>
                                <p><a href="tel:+923001234567">+92 300 1234567</a></p>
                                <p className="urdu-text" style={{ fontSize: '0.9rem', opacity: '0.8' }}>
                                    فون / واٹس ایپ
                                </p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p><a href="mailto:support@urdulingo.com">support@urdulingo.com</a></p>
                                <p className="urdu-text" style={{ fontSize: '0.9rem', opacity: '0.8' }}>
                                    ای میل
                                </p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Karachi, Pakistan</p>
                                <p className="urdu-text" style={{ fontSize: '0.9rem', opacity: '0.8' }}>
                                    کراچی، پاکستان
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="social-media">
                        <h3>Follow Us on Social Media</h3>
                        <div className="urdu-text" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: '0.8' }}>
                            سوشل میڈیا پر ہمیں فالو کریں
                        </div>
                        <div className="social-links">
                            <a href="https://facebook.com/urdulingo" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                                <i className="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                            </a>
                            <a href="https://instagram.com/urdulingo" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                                <i className="fab fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                            <a href="https://twitter.com/urdulingo" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                                <i className="fab fa-twitter"></i>
                                <span>Twitter</span>
                            </a>
                            <a href="https://youtube.com/@urdulingo" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                                <i className="fab fa-youtube"></i>
                                <span>YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// CTA Component
const CTA = () => {
    return (
        <section className="cta" id="download">
            <div className="container">
                <h2>Start Your English Learning Journey Today</h2>
                <div className="urdu-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                    آج ہی اپنا انگریزی سیکھنے کا سفر شروع کریں
                </div>
                <p>Join thousands of Urdu speakers who are mastering English with our innovative app.</p>
                <div className="download-buttons">
                    <button onClick={downloadAPK} className="download-btn" style={{ background: 'rgba(255, 255, 255, 0.95)', color: '#58CC02', border: '2px solid white', cursor: 'pointer' }}>
                        <i className="fab fa-android"></i>
                        <div>
                            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Download APK</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Android App</div>
                        </div>
                    </button>
                    <a href="#" className="download-btn" style={{ opacity: '0.6', cursor: 'not-allowed' }}>
                        <i className="fab fa-google-play"></i>
                        <div>
                            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Coming Soon</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Google Play</div>
                        </div>
                    </a>
                    <a href="#" className="download-btn" style={{ opacity: '0.6', cursor: 'not-allowed' }}>
                        <i className="fab fa-apple"></i>
                        <div>
                            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Coming Soon</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>App Store</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo" style={{ marginBottom: '1rem' }}>
                            <i className="fas fa-graduation-cap"></i>
                            Urdu Lingo
                        </div>
                        <p style={{ maxWidth: '300px', opacity: '0.8' }}>
                            Making English education accessible for every Urdu speaker
                        </p>
                        <p className="urdu-text" style={{ maxWidth: '300px', opacity: '0.8', marginTop: '0.5rem' }}>
                            ہر اردو بولنے والے کے لیے انگریزی تعلیم کو قابل رسائی بنانا
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <div className="footer-links-column">
                            <a href="#features">Features</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                            <a href="#download">Download</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <div className="footer-links-column">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                            <a href="#support">Support</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Connect With Us</h4>
                        <div className="footer-social">
                            <a href="https://facebook.com/urdulingo" target="_blank" rel="noopener noreferrer" title="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com/urdulingo" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/urdulingo" target="_blank" rel="noopener noreferrer" title="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://youtube.com/@urdulingo" target="_blank" rel="noopener noreferrer" title="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                            <i className="fas fa-phone"></i> +92 300 1234567
                        </p>
                        <p style={{ fontSize: '0.9rem' }}>
                            <i className="fas fa-envelope"></i> support@urdulingo.com
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Urdu Lingo. All rights reserved.</p>
                    <div className="urdu-text" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        تمام حقوق محفوظ ہیں
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Stats />
            <About />
            <Contact />
            <CTA />
            <Footer />
        </div>
    );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));