import React, { useEffect } from 'react';
import { FaDatabase, FaCode, FaVideo } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
    useEffect(() => {
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width') || bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });

        const skillsContainer = document.querySelector('.skills-container');
        if (skillsContainer) {
            observer.observe(skillsContainer);
        }

        return () => {
            if (skillsContainer) {
                observer.unobserve(skillsContainer);
            }
        };
    }, []);

    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-container">
                    <div className="card">
                        <div className="skill-category">
                            <h3><FaDatabase className="skill-icon" /> Data Science</h3>
                            <div className="skill-item">
                                <div className="skill-name">
                                    <span>Python</span>
                                    <span>65%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-width="65%" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">
                                    <span>Machine Learning</span>
                                    <span>30%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-width="30%" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="skill-category">
                            <h3><FaCode className="skill-icon" /> Front-End Development</h3>
                            <div className="skill-item">
                                <div className="skill-name">
                                    <span>HTML</span>
                                    <span>70%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-width="70%" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">
                                    <span>CSS</span>
                                    <span>55%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-width="55%" style={{ width: '55%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">
                                    <span>JavaScript</span>
                                    <span>25%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-width="25%" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="skill-category">
                            <h3><FaVideo className="skill-icon" /> Multimedia</h3>
                            <div className="skill-item">
                                <div className="skill-name">
                                    <span>CapCut</span>
                                    <span>75%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-width="75%" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">
                                    <span>InShot</span>
                                    <span>80%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-width="80%" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;