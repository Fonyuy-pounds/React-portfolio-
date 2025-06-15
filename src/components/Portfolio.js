import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const workRef = useRef(null);
    const contactRef = useRef(null);

    // Enhanced projects data with more details
    const projects = [
        {
            id: 1,
            title: "Sentiment Analysis AI",
            description: "Developed an advanced NLP model that analyzes emotional tone in text with 92% accuracy. Implemented using Python, TensorFlow, and deployed with Gradio for real-time analysis. The system processes over 10,000 daily requests from social media monitoring tools.",
            tags: ["Python", "TensorFlow", "NLP", "Gradio", "AWS"],
            image: "./images/senti.jpg",
            links: [
                { icon: "💻", url: "#", text: "View Code" },
                { icon: "🚀", url: "#", text: "Live Demo" }
            ],
            achievements: [
                "Reduced sentiment misclassification by 40% compared to previous models",
                "Optimized processing time to handle 1000 requests/minute",
                "Integrated with 3 major social platforms via API"
            ]
        },
        {
            id: 2,
            title: "soleStep E-Commerce Platform",
            description: "Built a full-featured e-commerce solution with cart functionality, user authentication, and Stripe payment integration. The platform serves over 500 active merchants with 15,000+ monthly transactions. Implemented React frontend with Node.js backend and MongoDB database.",
            tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
            image: "./images/shop.jpg",
            links: [
                { icon: "💻", url: "https://github.com/Fonyuy-pounds/BootStrap-project", text: "Source Code" },
                { icon: "🌐", url: "#", text: "Visit Store" }
            ],
            achievements: [
                "Increased conversion rate by 35% with optimized checkout flow",
                "Reduced page load time from 4.2s to 1.8s",
                "Implemented CI/CD pipeline reducing deployment time by 70%"
            ]
        },
        {
            id: 3,
            title: "Corporate Video Production",
            description: "Produced high-end promotional video with motion graphics and color grading for international client. Edited using Adobe Premiere Pro and After Effects with custom animations. The video achieved 500,000+ views and increased client engagement by 200%.",
            tags: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
            video: "./images/VID-20250308-WA0004.mp4",
            links: [
                { icon: "🎬", url: "#", text: "Watch Video" }
            ],
            achievements: [
                "Delivered 3 days ahead of schedule",
                "Client satisfaction score: 9.8/10",
                "Used as flagship marketing material for 2 years"
            ]
        },
        {
            id: 4,
            title: "TaskFlow Productivity Suite",
            description: "Created Kanban-style productivity app with real-time collaboration and analytics dashboard. Features include task automation, time tracking, and team performance metrics. Built with React, Firebase, and D3.js for data visualization.",
            tags: ["React", "Firebase", "D3.js", "WebSockets", "IndexedDB"],
            image: "./images/task-manager.jpg",
            links: [
                { icon: "💻", url: "#", text: "GitHub" },
                { icon: "🚀", url: "#", text: "Try Demo" }
            ],
            achievements: [
                "Onboarded 1,200+ active users in first 3 months",
                "Reduced task completion time by 45% for teams",
                "Featured in Productivity Tools of 2023 list"
            ]
        },
        {
            id: 5,
            title: "Global COVID-19 Dashboard",
            description: "Developed interactive global dashboard with time-series analysis and predictive modeling. Visualized infection rates, vaccination progress, and mortality statistics using Plotly and GeoJSON mapping. Processed datasets with 10M+ records using Python and Pandas.",
            tags: ["Python", "Plotly", "Pandas", "GeoJSON", "Heroku"],
            image: "./images/dashboard.jpg",
            links: [
                { icon: "💻", url: "#", text: "Source Code" },
                { icon: "📊", url: "#", text: "View Dashboard" }
            ],
            achievements: [
                "Cited by 3 health organizations for data accuracy",
                "Featured in WHO regional reports",
                "Processed 2TB of COVID data efficiently"
            ]
        }
    ];

    // Enhanced skills data with categories
    const skills = {
        dataScience: [
            { name: "Python", level: 90, icon: "🐍" },
            { name: "Machine Learning", level: 40, icon: "🤖" },
            { name: "Data Visualization", level: 30, icon: "📊" },
            // { name: "SQL", level: 15, icon: "🗃️" },
            { name: "Prompt-Engineering", level: 70, icon: "🧠" }
        ],
        development: [
            { name: "React", level: 95, icon: "⚛️" },
            { name: "JavaScript", level: 90, icon: "📜" },
            { name: "Html", level: 80, icon: "🟢" },
            { name: "Css", level: 75, icon: "✏️" },
            // { name: "GraphQL", level: 70, icon: "🔄" }
        ],
        design: [
            // { name: "UI/UX", level: 10, icon: "🎨" },
            // { name: "Figma", level: 10, icon: "✏️" },
            { name: "Motion Design", level: 75, icon: "🎬" },
            { name: "Video Editing", level: 90, icon: "🎥" },
            { name: "Adobe Suite", level: 85, icon: "🖌️" }
        ],
        devOps: [
            // { name: "Docker", level: 75, icon: "🐳" },
            // { name: "AWS", level: 10, icon: "☁️" },
            // { name: "CI/CD", level: 80, icon: "🔄" },
            { name: "Git", level: 90, icon: "📌" }
            // { name: "Linux", level: , icon: "🐧" }
        ]
    };

    // Professional experience data
    const experience = [
        {
            role: "A participant At Seed Inc. Weekend of Code",
            company: "Seed Inc.",
            period: "2024 - Present",
            responsibilities: [
                "Lead team developing ML models for customer behavior prediction",
                "Reduced model training time by 40% through optimization",
                "Implemented data pipelines processing 10TB+ monthly"
            ]
        },
        {
            role: "Frontend Developer",
            company: "seed",
            period: "2024 - Present",
            responsibilities: [
                "Built 15+ responsive web applications with React",
                "Improved page load performance by 65%",
                "Mentored 3 junior developers"
            ]
        },
        {
            role: "Multimedia Specialist",
            company: "Creative Media Group",
            period: "2025 ",
            responsibilities: [
                "Produced 10+ corporate videos with 5k+ total views",
                "Designed motion graphics for 3 award-winning campaigns",
                "Streamlined editing workflow reducing production time by 30%"
            ]
        }
    ];

    // Education data
    const education = [
        {
            degree: "Completed by GCE advance level",
            institution: "G.B.H.S ATIELA",
            year: "2024",
            highlights: [
                "Passed 4/4 papers that i registered in the GCE",
                "Passed my entrance exmaination into the university"
            ]
        },
        {
            degree: "BSc Computer Science",
            institution: "University of Bamenda",
            year: "2024",
            highlights: [
                "Specialized in AI and Machine Learning",
                "A participant of the weekend of code at seed"
            ]
        }
    ];

    // Custom cursor effect
    useEffect(() => {
        const moveCursor = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const updateScrollProgress = () => {
            const scrollY = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((scrollY / height) * 100);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('scroll', updateScrollProgress);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    // Scroll spy for sections
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'work', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typewriter effect for hero text
    useEffect(() => {
        const texts = [
            "Data Scientist",
            "Frontend Architect",
            "AI Specialist",
            "Video Producer",
            "Tech Innovator"
        ];
        let count = 0;
        let index = 0;
        let currentText = '';
        let isDeleting = false;
        let typingSpeed = 100;

        const typeWriter = () => {
            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (!heroSubtitle) return;

            const fullText = texts[count];

            if (isDeleting) {
                currentText = fullText.substring(0, index - 1);
                index--;
                typingSpeed = 50;
            } else {
                currentText = fullText.substring(0, index + 1);
                index++;
                typingSpeed = 100;
            }

            heroSubtitle.textContent = currentText;

            if (!isDeleting && currentText === fullText) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                count = (count + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(typeWriter, typingSpeed);
        };

        setTimeout(typeWriter, 1000);
    }, []);

    // Animate skill bars on scroll
    useEffect(() => {
        const animateSkills = () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    bar.style.width = bar.getAttribute('data-level') + '%';
                }
            });
        };

        window.addEventListener('scroll', animateSkills);
        return () => window.removeEventListener('scroll', animateSkills);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        document.body.classList.toggle('dark-mode', newMode);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Show success animation
        const submitBtn = e.target.querySelector('button[type="submit"]');
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.backgroundColor = '#4BB543';

        // In a real app, you would send this to your backend
        console.log('Form submitted:', data);

        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.style.backgroundColor = '';
            e.target.reset();
        }, 3000);
    };

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 80,
            behavior: 'smooth'
        });
        setMenuOpen(false);
    };

    return (
        <div className={`portfolio ${darkMode ? 'dark-mode' : ''}`}>
            {/* Custom Cursor */}
            <div
                className="custom-cursor"
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                    transform: `scale(${menuOpen ? 3 : 1})`
                }}
            ></div>

            {/* Scroll Progress */}
            <div
                className="scroll-progress"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            {/* Floating Theme Toggle */}
            <button
                className="floating-theme-toggle"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
            >
                {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Navigation */}
            <nav className="main-nav">
                <div className="container">
                    <a href="#home" className="logo" onClick={() => scrollToSection(heroRef)}>
                        <span className="logo-text">Fonyuy</span>
                        <span className="logo-dot">.</span>
                    </a>

                    <div
                        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-label="Menu toggle"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <li>
                            <a
                                href="#home"
                                className={activeSection === 'home' ? 'active' : ''}
                                onClick={() => scrollToSection(heroRef)}
                            >
                                <span className="nav-number">01.</span> Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className={activeSection === 'about' ? 'active' : ''}
                                onClick={() => scrollToSection(aboutRef)}
                            >
                                <span className="nav-number">02.</span> About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className={activeSection === 'skills' ? 'active' : ''}
                                onClick={() => scrollToSection(skillsRef)}
                            >
                                <span className="nav-number">03.</span> Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#work"
                                className={activeSection === 'work' ? 'active' : ''}
                                onClick={() => scrollToSection(workRef)}
                            >
                                <span className="nav-number">04.</span> Work
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={activeSection === 'contact' ? 'active' : ''}
                                onClick={() => scrollToSection(contactRef)}
                            >
                                <span className="nav-number">05.</span> Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero" ref={heroRef}>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h4 className="hero-intro">Hi, my name is</h4>
                            <h1 className="hero-title">
                                Fonyuy Patrick.
                                <span className="title-highlight">I build digital experiences</span>
                            </h1>
                            <h2 className="hero-subtitle"></h2>
                            <p className="hero-description">
                                I'm a <strong>Data Scientist</strong> and <strong>Front-End Developer</strong> specializing in building
                                exceptional digital products with a focus on data-driven design and
                                cutting-edge technology. Currently a participant  of the Weekendof Code  at <strong> Seed Inc.</strong>
                            </p>
                            <div className="hero-cta">
                                <a href="#work" className="btn btn-primary">
                                    View My Work
                                    <span className="btn-arrow">→</span>
                                </a>
                                <a
                                    href="#contact"
                                    className="btn btn-secondary"
                                >
                                    Let's Collaborate
                                </a>
                            </div>
                        </div>
                        <div className="my-portfolio\public\me.jpg">
                            <div className="image-wrapper">
                                <img
                                    src="./Home.jpg"
                                    alt="Fonyuy Patrick"
                                    className="profile-image"
                                />
                                <div className="image-border"></div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section id="about" className="about" ref={aboutRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-number">01.</span> About Me
                        </h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Hello! I'm Fonyuy Patrick, an <strong>aspiring technologist</strong> currently pursuing my
                                Computer Science degree at the University of Bamenda. While I may be early in my
                                professional journey, my passion for technology and commitment to growth have already
                                led me to exciting opportunities like the <strong>Weekend of Code</strong> program at SEED.
                            </p>
                            <p>
                                What I lack in years of experience, I make up for with <strong>enthusiasm, adaptability,
                                    and a hunger to learn</strong>. My approach combines academic knowledge with hands-on
                                experimentation, allowing me to quickly grasp new concepts and technologies.
                            </p>
                            <p>
                                Beyond coursework, I dedicate time to personal projects that challenge me to grow.
                                Whether it's building web applications, exploring data science, or creating multimedia
                                content, I believe <strong>the best learning happens by doing</strong>.
                            </p>

                            <div className="experience-section">
                                <h3>My Journey So Far</h3>
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h4>Computer Science Student <span className="company">@ University of Bamenda</span></h4>
                                            <p className="timeline-period">2024 - Present</p>
                                            <ul className="timeline-responsibilities">
                                                <li>Specializing in software development and AI fundamentals</li>
                                                <li>Maintaining excellent academic standing while pursuing side projects</li>
                                                <li>Active participant in tech clubs and coding communities</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h4>Participant <span className="company">@ SEED Weekend of Code</span></h4>
                                            <p className="timeline-period">2024</p>
                                            <ul className="timeline-responsibilities">
                                                <li>Collaborated with peers on real-world coding challenges</li>
                                                <li>Gained exposure to industry best practices and workflows</li>
                                                <li>Developed problem-solving skills through hands-on projects</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h4> Developer <span className="company">@ Personal Projects</span></h4>
                                            <p className="timeline-period">2022 - Present</p>
                                            <ul className="timeline-responsibilities">
                                                <li>Built multiple web applications to practice development skills</li>
                                                <li>Created multimedia content showcasing technical creativity</li>
                                                <li>Contributed to open-source projects to understand collaborative coding</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="education-section">
                                <h3>Education & Training</h3>
                                <div className="education-grid">
                                    <div className="education-card">
                                        <h4>BSc Computer Science</h4>
                                        <p className="institution">University of Bamenda</p>
                                        <p className="year">2024 - Present</p>
                                        <ul className="education-highlights">
                                            <li>Focus on software engineering principles</li>
                                            <li>Coursework in algorithms, data structures, and web development</li>
                                            <li>Participant in university tech innovation challenges</li>
                                        </ul>
                                    </div>
                                    <div className="education-card">
                                        <h4>Advanced Level Certificate</h4>
                                        <p className="institution">G.B.H.S ATIELA</p>
                                        <p className="year">2024</p>
                                        <ul className="education-highlights">
                                            <li>Perfect 4/4 pass rate in registered subjects</li>
                                            <li>Developed strong analytical and problem-solving foundation</li>
                                            <li>First exposure to programming concepts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-image">
                            <div className="image-container">
                                <img src="./about.JPG" alt="Fonyuy Patrick - Aspiring Developer" />
                                <div className="image-frame"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Skills Section */}
            <section id="skills" className="skills" ref={skillsRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-number">02.</span> My Skills
                        </h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="skills-intro">
                        <p>
                            Over the years, I've developed a diverse skill set that allows me to tackle
                            projects from multiple angles. Here's a breakdown of my core competencies:
                        </p>
                    </div>

                    <div className="skills-grid">
                        <div className="skill-category">
                            <div className="category-header">
                                <h3>Data Science</h3>
                                <div className="category-icon">📊</div>
                            </div>
                            <ul className="skill-list">
                                {skills.dataScience.map((skill, index) => (
                                    <li key={`ds-${index}`}>
                                        <div className="skill-info">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: '0%' }}
                                                data-level={skill.level}
                                            ></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="skill-category">
                            <div className="category-header">
                                <h3>Development</h3>
                                <div className="category-icon">💻</div>
                            </div>
                            <ul className="skill-list">
                                {skills.development.map((skill, index) => (
                                    <li key={`dev-${index}`}>
                                        <div className="skill-info">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: '0%' }}
                                                data-level={skill.level}
                                            ></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="skill-category">
                            <div className="category-header">
                                <h3>Design</h3>
                                <div className="category-icon">🎨</div>
                            </div>
                            <ul className="skill-list">
                                {skills.design.map((skill, index) => (
                                    <li key={`design-${index}`}>
                                        <div className="skill-info">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: '0%' }}
                                                data-level={skill.level}
                                            ></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="skill-category">
                            <div className="category-header">
                                <h3>DevOps</h3>
                                <div className="category-icon">🛠️</div>
                            </div>
                            <ul className="skill-list">
                                {skills.devOps.map((skill, index) => (
                                    <li key={`ops-${index}`}>
                                        <div className="skill-info">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: '0%' }}
                                                data-level={skill.level}
                                            ></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Section
            <section id="work" className="work" ref={workRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-number">03.</span> Featured Work
                        </h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="projects-intro">
                        <p>
                            Here are some of my most significant projects. Each represents a unique challenge
                            and demonstrates my ability to deliver high-quality solutions across different domains.
                        </p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div
                                className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
                                key={project.id}
                            >
                                <div className="project-content">
                                    <div className="project-header">
                                        <span className="project-number">0{index + 1}.</span>
                                        <h3 className="project-title">{project.title}</h3>
                                    </div>
                                    <div className="project-description">
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="project-achievements">
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                            {project.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <ul className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <li key={i}>{tag}</li>
                                        ))}
                                    </ul>
                                    <div className="project-links">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                {link.icon} {link.text}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-media">
                                    {project.image ? (
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />
                                            <div className="image-overlay"></div>
                                        </div>
                                    ) : (
                                        <div className="project-video">
                                            <video controls>
                                                <source src={project.video} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="more-projects">
                        <h3>Other Notable Projects</h3>
                        <div className="mini-projects-grid">
                            <div className="mini-project-card">
                                <h4>AI Chatbot Framework</h4>
                                <p>Modular chatbot system supporting multiple NLP engines</p>
                                <a href="#" className="mini-project-link">View Details →</a>
                            </div>
                            <div className="mini-project-card">
                                <h4>E-Learning Platform</h4>
                                <p>Interactive course delivery system with analytics</p>
                                <a href="#" className="mini-project-link">View Details →</a>
                            </div>
                            <div className="mini-project-card">
                                <h4>Brand Documentary</h4>
                                <p>30-minute corporate documentary for manufacturing client</p>
                                <a href="#" className="mini-project-link">View Details →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Contact Section */}
            <section id="contact" className="contact" ref={contactRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-number">04.</span> Get In Touch
                        </h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="contact-content">
                        <div className="contact-info">
                            <h3 className="contact-heading">Let's build something amazing together</h3>
                            <p className="contact-description">
                                I'm currently available for <strong>freelance projects</strong> and
                                <strong> full-time opportunities</strong>. Whether you have a project in mind
                                or just want to say hi, I'll do my best to get back to you!
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">✉️</div>
                                    <div className="contact-text">
                                        <h4>Email</h4>
                                        <a href="mailto:fonyouypounds@gmail.com">fonyouypounds@gmail.com</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📱</div>
                                    <div className="contact-text">
                                        <h4>WhatsApp</h4>
                                        <a href="https://wa.me/653509991" target="_blank" rel="noopener noreferrer">
                                            +237 653 509 991
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-text">
                                        <h4>Location</h4>
                                        <p>Bamenda, Cameroon</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">🏫</div>
                                    <div className="contact-text">
                                        <h4>Education</h4>
                                        <p>University of Bamenda</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <h4>Connect With Me</h4>
                                <ul className="social-list">
                                    <li>
                                        <a
                                            href="https://github.com/Fonyuy-pounds"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                        >
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/fonyuy-patrick-116aa633a"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://x.com/fonyuy_patrick"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Twitter"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="YouTube"
                                        >
                                            YouTube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="5"
                                        placeholder="Hi Fonyuy, I'd like to discuss a potential project..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <a href="#home" className="logo">
                                <span className="logo-text">Fonyuy</span>
                                <span className="logo-dot">.</span>
                            </a>
                            <p className="footer-motto">
                                Building digital experiences that matter
                            </p>
                        </div>

                        <div className="footer-links">
                            <div className="links-column">
                                <h4>Navigation</h4>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#skills">Skills</a></li>
                                    <li><a href="#work">Work</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>

                            <div className="links-column">
                                <h4>Connect</h4>
                                <ul>
                                    <li><a href="https://github.com/Fonyuy-pounds">GitHub</a></li>
                                    <li><a href="https://www.linkedin.com/in/fonyuy-patrick-116aa633a">LinkedIn</a></li>
                                    <li><a href="https://x.com/fonyuy_patrick">Twitter</a></li>
                                    <li><a href="#">YouTube</a></li>
                                </ul>
                            </div>

                            <div className="links-column">
                                <h4>Contact</h4>
                                <ul>
                                    <li><a href="mailto:fonyouypounds@gmail.com">Email</a></li>
                                    <li><a href="https://wa.me/653509991">WhatsApp</a></li>
                                    <li><a href="#">Calendly</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">
                            &copy; {new Date().getFullYear()} Fonyuy Patrick. All rights reserved.
                        </p>
                        <p className="credits">
                            Designed and built with ❤️ by Fonyuy Patrick
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;