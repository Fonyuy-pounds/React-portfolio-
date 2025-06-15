import React, { useState } from 'react';
import './NavBar.css';

// Assuming portfolioData is available in the scope where this component is used
// For demonstration, a simplified version is included here.
const portfolioData = {
    name: "[Fonyuy-PAtrick ]",
    contact: {
        social: [
            // Social icons are used in the main Header but not strictly for the nav bar functionality itself,
            // so we can keep this minimal for just the nav links.
        ],
    },
};

// Assuming Button component is defined elsewhere or its styles are included.
// For this standalone nav bar, we'll define a simple one if not directly imported.
const Button = ({ children, onClick, type = 'button', className = '' }) => (
    <button
        type={type}
        onClick={onClick}
        className={`
      px-6 py-3 rounded-md text-white font-semibold
      bg-blue-600 hover:bg-blue-700 transition-all duration-300
      shadow-lg hover:shadow-xl transform hover:-translate-y-1
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
      ${className}
    `}
    >
        {children}
    </button>
);


const NavBar = ({ currentPage, setCurrentPage, name }) => {
    const [navOpen, setNavOpen] = useState(false);

    const navItems = [
        { name: "Home", page: "home" },
        { name: "Data Science Projects", page: "dataScience" },
        { name: "Front-End Projects", page: "frontEnd" },
        { name: "Video Editing Portfolio", page: "videoEditing" },
        { name: "Contact Me", page: "contact" },
    ];

    return (
        <header className="bg-dark-card shadow-md sticky top-0 z-50 py-4 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-accent-teal">
                    {name}
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.page}
                            href="#"
                            onClick={() => setCurrentPage(item.page)}
                            className={`
                text-text-light text-lg font-medium hover:text-accent-light transition-colors duration-200
                ${currentPage === item.page ? 'underline underline-offset-4 text-accent-light' : ''}
              `}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Navigation Toggle */}
                <button
                    className="md:hidden text-text-light focus:outline-none"
                    onClick={() => setNavOpen(!navOpen)}
                    aria-label="Toggle navigation"
                >
                    {/* Hamburger Icon (inline SVG) */}
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>

                {/* Mobile Navigation Menu */}
                <nav
                    className={`
            fixed top-0 right-0 w-3/4 h-full bg-dark-card p-8 shadow-xl transform transition-transform duration-300 ease-in-out
            md:hidden flex flex-col items-center justify-center space-y-8 z-40
            ${navOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.page}
                            href="#"
                            onClick={() => {
                                setCurrentPage(item.page);
                                setNavOpen(false); // Close nav on item click
                            }}
                            className={`
                text-text-light text-2xl font-medium hover:text-accent-light transition-colors duration-200
                ${currentPage === item.page ? 'underline underline-offset-8 text-accent-light' : ''}
              `}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        className="absolute top-4 right-4 text-text-light"
                        onClick={() => setNavOpen(false)}
                        aria-label="Close navigation"
                    >
                        {/* Close Icon (X) */}
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
