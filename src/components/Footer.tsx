import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="footer-background">
                <img src="/assets/images/footer-background-image.webp" alt="Footer Background" />
            </div>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Your Choice Plumbing</h3>
                    <p>Your number 1 Plumbing and repair services in East Legon, Ghana.</p>
                    <nav className="footer-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><a href="tel:+233244631892">Contact</a></li>
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
                    <h3>Contact</h3>
                    <p>Phone: +233 244 63 1892</p>
                    <p>Location: Legon, Ghana</p>
                </div>
            </div>
        </footer>
    );
}
