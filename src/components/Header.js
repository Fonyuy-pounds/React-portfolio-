import React, { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ darkMode, toggleTheme, activeSection, setActiveSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (section) => {
        setActiveSection(section);
        setMobileMenuOpen(false);
    };

    return (
        <header>
            <nav className="container">
                <a href="#home" className="logo">Fonyuy Patrick</a>
                <div
                    className="nav-toggle"
                    id="navToggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <FaBars />
                </div>
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="navLinks">
                    <li>
                        <a
                            href="#about"
                            className={`n1 ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={() => handleNavClick('about')}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className={`n2 ${activeSection === 'skills' ? 'active' : ''}`}
                            onClick={() => handleNavClick('skills')}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`n3 ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={() => handleNavClick('projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`n4 ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={() => handleNavClick('contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="mode-toggle" id="modeToggle" onClick={toggleTheme}>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </div>
            </nav>
        </header>
    );
};

export default Header;