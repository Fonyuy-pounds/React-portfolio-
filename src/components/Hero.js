import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container hero-content">
                <img src="./Home.jpg" alt="Fonyuy Patrick" className="hero-img" />
                <h1 className="animate">I am Fonyuy Patrick Welcome to my Portfolio</h1>
                <p className="hero-subtitle animate animate-delay-1">Data Science Student | Front-End Developer | Video Editor</p>
                <p className="hero-intro animate animate-delay-2">
                    I'm a Tech enthusiast from the University of Bamenda, passionate about data,
                    web development, and creative multimedia.
                </p>
                <div className="hero-buttons animate animate-delay-3">
                    <a href="#projects" className="btn">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;