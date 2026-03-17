import '../styles/services.css';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <>
            <div className="services-hero">
                <div className="hero-text">
                    <h1>Your Choice Plumbing</h1>
                    <p>Delivers elite plumbing services</p>
                </div>
            </div>
            <div className="plumbing-problem">
                <div>
                    <h1>Plumbing</h1>
                    <h1>Problem?</h1>
                    <p>We can help you!</p>
                </div>
                <div>
                    <h1>Professional Plumbing, Leak and Heating Services.</h1>
                    <div className="service-description">
                        <p>Whether you're planning a renovation or simply need routine maintenance on your home or office plumbing systems, our professional technicians and mechanics can assist you effectively in the right way.</p>
                    </div>
                    <a href="tel:+233244631892" className="cta-button">Request A Plumber</a>
                </div>
            </div>
            <section className="our-services">
                <div className="container">
                    <div className="services-header">
                        <h2>Our Services</h2>
                        <p>What Can We Help You With Today?</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-image">
                                <img src="/assets/images/services/residential.webp" alt="Residential Services" />
                            </div>
                            <div className="service-content">
                                <h3>Residential Services</h3>
                                <p>Anyone who owns a home understands that plumbing issues can never be foreseen 100%...</p>
                                <Link to="/services" className="read-more-btn">READ MORE</Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="/assets/images/services/commercial.jpg" alt="Commercial Services" />
                            </div>
                            <div className="service-content">
                                <h3>Commercial Services</h3>
                                <p>No job is too large for us! Commercial properties need professional plumbers in any case...</p>
                                <Link to="/services" className="read-more-btn">READ MORE</Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="/assets/images/services/plumbing-works.webp" alt="Plumber Repair Works" />
                            </div>
                            <div className="service-content">
                                <h3>Plumber Repair Works</h3>
                                <p>Toilet Installation, Sink Installation, Tankless Water Heater Installation, Garbage Disposal Installation...</p>
                                <Link to="/services" className="read-more-btn">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
