import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <ul className="footer-links">
                    <li>
                        <a href="https://www.linkedin.com/in/fonyuy-patrick-116aa633a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-link" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Fonyuy-pounds" className="footer-link" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/fonyuy_patrick?t=gtVB-AP7IqJqCRSywOQvNg&s=08" className="footer-link" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
                <p className="copyright">&copy; <span id="year"></span> Fonyuy Patrick. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;