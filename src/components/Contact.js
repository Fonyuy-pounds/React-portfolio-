import React from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaUniversity, FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>fonyouypounds@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaWhatsapp />
                            </div>
                            <div>
                                <h3>WhatsApp</h3>
                                <p><a href="https://wa.me/653509991" target="_blank" rel="noopener noreferrer">Chat with me on WhatsApp</a></p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Bamenda, Cameroon</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaUniversity />
                            </div>
                            <div>
                                <h3>University</h3>
                                <p>University of Bamenda</p>
                            </div>
                        </div>
                        <div className="social-links">
                            <h3>Follow Me</h3>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/fonyuy-patrick-116aa633a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/Fonyuy-pounds" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://x.com/fonyuy_patrick?t=gtVB-AP7IqJqCRSywOQvNg&s=08" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form id="contactForm">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;