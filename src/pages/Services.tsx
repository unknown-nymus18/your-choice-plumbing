import '../styles/services.css';
import ServiceCard from '../components/ServiceCard';
// import { Link } from 'react-router-dom';

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
                        <ServiceCard heading={'Residential Services'} img={"/assets/images/services/residential.webp"}>
                            Anyone who owns a home understands that plumbing issues can never be foreseen 100%. From leaky faucets and burst pipes to full bathroom remodels and water heater replacements, our skilled technicians are equipped to handle any residential plumbing challenge. We ensure your home's systems are safe, efficient, and reliable for years to come.
                        </ServiceCard>

                        <ServiceCard heading={"Commercial Services"} img={"/assets/images/services/commercial.jpg"}>
                            No job is too large for us! Commercial properties need professional plumbers to keep operations running smoothly. We provide comprehensive commercial plumbing solutions, including large-scale pipe installations, grease trap maintenance, backflow prevention, and 24/7 emergency repairs to minimize your business downtime.
                        </ServiceCard>

                        <ServiceCard heading={"Plumber Repair Works"} img={"/assets/images/services/plumbing-works.webp"}>
                            Toilet Installation, Sink Installation, Tankless Water Heater Installation, and Garbage Disposal Installation. Whether it is a minor repair or a complex installation, our expert team guarantees precision and quality. We use industry-leading tools and premium materials to ensure that every fix is durable and meets the highest safety standards.
                        </ServiceCard>
                    </div>
                </div>
            </section >
        </>
    );
}
