import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-img">
                        <img src="./about.JPG" alt="About Me" />
                    </div>
                    <div className="about-text">
                        <p>I study Data Science, learn Front-End Development (HTML/CSS/JS), and edit videos. I'm also an
                            active participant of the Weekend of Code, a year-long program organized by SEED.</p>
                        <p>My journey in tech started with curiosity about how data can be used to solve real-world
                            problems. As I delved deeper, I saw the importance of creating visually appealing and functional
                            web experiences, leading me to explore Front-End Development.</p>
                        <p>When I'm not coding, I'm editing videos, where I blend technical precision with creative
                            storytelling.</p>
                        <div className="about-cta">
                            <a href="#" className="btn">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;