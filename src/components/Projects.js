import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Sentiment Analysis",
            image: "./images/senti.jpg",
            description: "A comprehensive sentiment analysis that can detect whether text is positive or negative.",
            tags: ["Python", "Google Colab", "Gradio"],
            links: [
                { icon: <FaGithub />, text: "Code", url: "#" },
                { icon: <FaExternalLinkAlt />, text: "Demo", url: "#" }
            ]
        },
        {
            title: "soleStep Website",
            image: "./images/shop.jpg",
            description: "An E-commerce website with clean, responsive design.",
            tags: ["HTML", "CSS", "JavaScript"],
            links: [
                { icon: <FaGithub />, text: "Code", url: "https://github.com/Fonyuy-pounds/BootStrap-project" },
                { icon: <FaExternalLinkAlt />, text: "Live", url: "#" }
            ]
        },
        {
            title: "Women's Day Video",
            video: "./images/VID-20250308-WA0004.mp4",
            description: "A simple Women's Day video I edited for a Seed.lnc.",
            tags: ["CapCut", "InShot"],
            links: [
                { icon: <FaYoutube />, text: "Watch", url: "#" }
            ]
        },
        {
            title: "A Tic-Tac-Toe game",
            image: "./images/dashboard.jpg",
            description: "Interactive dashboard for visualizing complex datasets.",
            tags: ["Python", "Plotly", "Dash"],
            links: [
                { icon: <FaGithub />, text: "Code", url: "#" },
                { icon: <FaExternalLinkAlt />, text: "Demo", url: "#" }
            ]
        },
        {
            title: "Portfolio Website",
            image: "./images/portfolio.jpg",
            description: "Personal portfolio website showcasing my projects and skills.",
            tags: ["React", "CSS", "JavaScript"],
            links: [
                { icon: <FaGithub />, text: "Code", url: "#" },
                { icon: <FaExternalLinkAlt />, text: "Live", url: "#" }
            ]
        },
        {
            title: "NameStat",
            image: "./images/weather.jpg",
            description: "Real-time name application where you can search names and see some demographic info about that name.",
            tags: ["React", "API", "CSS"],
            links: [
                { icon: <FaGithub />, text: "Code", url: "#" },
                { icon: <FaExternalLinkAlt />, text: "Live", url: "#" }
            ]
        },
        {
            title: "Todo-List App",
            image: "./images/task.jpg",
            description: "A Todo-list app where you can add and delete your Todo's",
            tags: [" React", "CSS"],
            links: [
                { icon: <FaGithub />, text: "Code", url: "#" },
                { icon: <FaExternalLinkAlt />, text: "Live", url: "#" }
            ]
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div className="card" key={index}>
                            <div className="project-item">
                                {project.video ? (
                                    <div className="video-container">
                                        <video controls className="project-video">
                                            <source src={project.video} type="video/mp4" />
                                            Your Browser does not support the video tag.
                                        </video>
                                    </div>
                                ) : (
                                    <img src={project.image} alt={project.title} className="project-img" />
                                )}
                                <div className="project-info">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span className="project-tag" key={i}>{tag}</span>
                                        ))}
                                    </div>
                                    <p>{project.description}</p>
                                    <div className="project-links">
                                        {project.links.map((link, i) => (
                                            <a href={link.url} className="project-link" key={i} target="_blank" rel="noopener noreferrer">
                                                {link.icon} {link.text}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;