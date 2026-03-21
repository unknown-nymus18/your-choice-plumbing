import "../styles/about.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="about-hero">
        <div className="hero-text">
          <h1>About Your Choice Plumbing</h1>
          <p>
            Reliable plumbing solutions with over a decade of experience serving
            East Legon, Ghana
          </p>
        </div>
      </div>

      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Who We Are</h2>
            <p className="lead">
              Your Choice Plumbing (YCP) is a trusted, fully-licensed plumbing
              company serving residential and commercial clients throughout
              Legon, Ghana. We've built our reputation on delivering exceptional
              plumbing services with unwavering commitment to quality,
              reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to provide honest, dependable plumbing
                services to our community, Your Choice Plumbing has grown from a
                small local operation to one of the most trusted plumbing
                companies in Legon.
              </p>

              <p>
                What started as a commitment to excellent craftsmanship has
                evolved into a comprehensive plumbing service that handles
                everything from emergency repairs to complex installations. We
                take pride in our work and stand behind every service we
                provide.
              </p>

              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Emergency Service</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img
                src="/assets/images/about/story-about.jpeg"
                alt="Professional plumbing tools"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔧</div>
              <h3>Quality First</h3>
              <p>
                We never compromise on the quality of our work. Every job is
                completed to the highest standards using premium materials and
                proven techniques.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏰</div>
              <h3>Reliability</h3>
              <p>
                When you call us, we show up. On time, prepared, and ready to
                solve your plumbing challenges efficiently and effectively.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💯</div>
              <h3>Transparency</h3>
              <p>
                No hidden fees, no surprises. We provide clear, upfront pricing
                and honest assessments of every plumbing situation.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏠</div>
              <h3>Community Focus</h3>
              <p>
                As a local business, we're invested in our community's success.
                We're not just your plumbers; we're your neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>What We Do Best</h2>
          <div className="services-grid">
            <div className="service-item">
              <img
                src="/assets/images/homepage/pluming-hero.png"
                alt="Plumbing Services"
              />
              <h3>General Plumbing</h3>
              <p>
                From leaky faucets to pipe installations, we handle all your
                plumbing needs with expertise and care.
              </p>
            </div>
            <div className="service-item">
              <img
                src="/assets/images/homepage/bathroom-remodeling-hero.png"
                alt="Bathroom Remodeling"
              />
              <h3>Bathroom Remodeling</h3>
              <p>
                Transform your bathroom with our complete remodeling services,
                from design to final installation.
              </p>
            </div>
            <div className="service-item">
              <img
                src="/assets/images/homepage/pipe-works.png"
                alt="Pipe Works"
              />
              <h3>Pipe Works</h3>
              <p>
                Professional pipe installation, repair, and replacement services
                for residential and commercial properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="apprenticeship-section">
        <div className="container">
          <div className="apprenticeship-grid">
            <div className="apprenticeship-image">
              <img
                src="/assets/images/about/apprenticeship.jpg"
                alt="Plumbing apprenticeship training"
              />
            </div>
            <div className="apprenticeship-content">
              <h2>Building the Future: Our Apprenticeship Program</h2>
              <p>
                At Your Choice Plumbing, we believe in nurturing the next
                generation of skilled tradespeople. Our comprehensive
                apprenticeship program provides hands-on training and career
                development opportunities.
              </p>

              <div className="program-features">
                <div className="feature">
                  <span className="feature-icon">📚</span>
                  <span>Structured learning curriculum</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">👨‍🏫</span>
                  <span>Expert mentorship</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🛡️</span>
                  <span>Safety training & certification</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💰</span>
                  <span>Competitive compensation</span>
                </div>
              </div>

              <a href="tel:+233244631892" className="cta-button">
                Learn More About Our Program
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Your Choice Plumbing?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <h3>🚨 Emergency Services</h3>
              <p>
                Plumbing emergencies don't wait for business hours. We provide
                24/7 emergency services to address urgent issues.
              </p>
            </div>
            <div className="reason-card">
              <h3>💵 Upfront Pricing</h3>
              <p>
                No surprises on your bill. We provide clear, detailed estimates
                before any work begins.
              </p>
            </div>
            <div className="reason-card">
              <h3>✅ Satisfaction Guarantee</h3>
              <p>
                We stand behind our work with a comprehensive satisfaction
                guarantee on all services.
              </p>
            </div>
            <div className="reason-card">
              <h3>🔧 Modern Equipment</h3>
              <p>
                We use the latest tools and technology to diagnose problems
                accurately and complete repairs efficiently.
              </p>
            </div>
            <div className="reason-card">
              <h3>🌱 Eco-Friendly Solutions</h3>
              <p>
                We promote water conservation and offer environmentally
                responsible plumbing solutions.
              </p>
            </div>
            <div className="reason-card">
              <h3>📍 Local Knowledge</h3>
              <p>
                Deep understanding of local plumbing systems and building
                requirements in Legon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the YCP Difference?</h2>
            <p>
              Contact us today for reliable, professional plumbing services you
              can trust. From routine maintenance to emergency repairs, we're
              here to keep your plumbing systems running smoothly.
            </p>
            <a href="tel:+233244631892" className="cta-button primary">
              Call +233 244 63 1892
            </a>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="container">
          <div className="team-header">
            <h2>The Team</h2>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img
                  src="/assets/images/services/residential.webp"
                  alt="Residential Services"
                />
              </div>
              <div className="team-content">
                <h3>Residential Services</h3>
                <p>
                  Anyone who owns a home understands that plumbing issues can
                  never be foreseen 100%...
                </p>
                <Link to="/services" className="read-more-btn">
                  READ MORE
                </Link>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img
                  src="/assets/images/services/commercial.jpg"
                  alt="Commercial Services"
                />
              </div>
              <div className="team-content">
                <h3>Commercial Services</h3>
                <p>
                  No job is too large for us! Commercial properties need
                  professional plumbers in any case...
                </p>
                <Link to="/services" className="read-more-btn">
                  READ MORE
                </Link>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img
                  src="/assets/images/services/plumbing-works.webp"
                  alt="Plumber Repair Works"
                />
              </div>
              <div className="team-content">
                <h3>Plumber Repair Works</h3>
                <p>
                  Toilet Installation, Sink Installation, Tankless Water Heater
                  Installation, Garbage Disposal Installation...
                </p>
                <Link to="/services" className="read-more-btn">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
