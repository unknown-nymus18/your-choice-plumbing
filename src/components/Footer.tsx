import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Wrench } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="footer-professional">
      <div className="footer-content">
        <FadeIn>
          <div className="footer-brand">
            <div className="footer-logo">
              <Wrench className="logo-icon" />
              <h2>Your Choice Plumbing</h2>
            </div>
            <p className="footer-tagline">
              Your trusted partner for all plumbing and repair services in East
              Legon, Ghana. We guarantee quality and reliability.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="footer-links-group">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services">Our Services</Link>
                  </li>
                  <li>
                    <a href="tel:+233244631892">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li>Plumbing</li>
                <li>Bathroom Remodeling</li>
                <li>Pipe Works</li>
                <li>Emergency Repairs</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Info</h3>
              <ul className="footer-contact-info">
                <li>
                  <Phone size={18} className="contact-icon" />
                  <span>+233 244 63 1892</span>
                </li>
                <li>
                  <MapPin size={18} className="contact-icon" />
                  <span>East Legon, Ghana</span>
                </li>
                <li>
                  <Mail size={18} className="contact-icon" />
                  <span>info@yourchoiceplumbing.com</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Choice Plumbing. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
