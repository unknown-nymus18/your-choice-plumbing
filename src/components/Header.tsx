import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when navigating
    useEffect(() => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('menu-open');
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    return (
        <header className={classNames({ 'sticky': isSticky, 'mobile-menu-open': isMobileMenuOpen })}>
            <p>YCP</p>
            <button 
                className={classNames('mobile-menu-toggle', { 'active': isMobileMenuOpen })} 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="nav-container">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li>
                            <a href="tel:+233244631892" className="contact-link">
                                <span className="contact-label">Call:</span>
                                <span className="contact-number">+233 244 63 1892</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="contact-container">
                <a href="tel:+233244631892" className="contact">
                    Call:
                    <span> +233 244 63 1892</span>
                </a>
            </div>
        </header>
    );
}
