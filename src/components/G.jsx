import React, { useState, useEffect } => 'react';

// --- Component Data Definitions ---
// In a larger app, this might come from a JSON file or API

const portfolioData = {
    name: "[Your Name]",
    title: "Data Student | Front-End Developer | Video Editor",
    about: {
        bio: "A passionate multidisciplinary individual currently exploring the fascinating intersection of data science, front-End development, and creative video editing. Driven by curiosity and a desire to build impactful solutions, I'm constantly learning and applying new technologies to real-world challenges.",
        details: [
            { label: "Birthdate", value: "January 1, 2000" },
            { label: "Phone", value: "+123 456 7890" },
            { label: "Email", value: "your.email@example.com" },
            { label: "Website", value: "yourwebsite.com" },
            { label: "Address", value: "City, Country" },
            { label: "Job Status", value: "Student/Freelancer - Currently Learning/Exploring AI" },
        ],
    },
    interests: [
        { category: "Data Student", items: ["Data Analysis", "Machine Learning", "AI Ethics", "Big Data", "Statistical Modeling"] },
        { category: "Front-End Developer", items: ["Web Development", "UI/UX Design", "React Ecosystem", "Component Libraries", "Responsive Design"] },
        { category: "Video Editor", items: ["Filmmaking", "Motion Graphics", "Storytelling", "Post-Production", "VFX"] },
        { category: "General Interests", items: ["Reading Technical Papers", "Learning New Tech", "Open Source Contributions"] },
    ],
    skills: {
        technical: [
            { name: "HTML & CSS", level: 95, category: "front-end" },
            { name: "JavaScript", level: 90, category: "front-end" },
            { name: "React.js", level: 85, category: "front-end" },
            { name: "TypeScript", level: 70, category: "front-end" },
            { name: "Responsive Design", level: 90, category: "front-end" },
            { name: "API Integration", level: 80, category: "front-end" },

            { name: "Python (Pandas, NumPy, Scikit-learn)", level: 90, category: "data-science" },
            { name: "SQL (PostgreSQL/MySQL)", level: 85, category: "data-science" },
            { name: "Data Visualization (Matplotlib, Seaborn, Tableau)", level: 88, category: "data-science" },
            { name: "Machine Learning", level: 82, category: "data-science" },
            { name: "Statistical Analysis", level: 75, category: "data-science" },

            { name: "Adobe Premiere Pro", level: 92, category: "video-editing" },
            { name: "After Effects", level: 80, category: "video-editing" },
            { name: "DaVinci Resolve", level: 78, category: "video-editing" },
            { name: "Color Grading", level: 85, category: "video-editing" },
            { name: "Sound Design", level: 70, category: "video-editing" },
            { name: "Green Screen Compositing", level: 75, category: "video-editing" },
        ],
        professional: [
            { name: "Problem Solving", level: 90 },
            { name: "Attention to Detail", level: 95 },
            { name: "Communication", level: 88 },
            { name: "Teamwork", level: 85 },
            { name: "Analytical Thinking", level: 92 },
            { name: "Creativity", level: 87 },
        ],
    },
    projects: {
        dataScience: [
            {
                id: 'ds-1',
                title: "Customer Churn Prediction",
                description: "Developed a machine learning model to predict customer churn for a telecom company, achieving 90% accuracy using a Random Forest Classifier.",
                thumbnail: "https://placehold.co/400x250/0f4c75/e0e0e0?text=Data+Science+Project+1",
                technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
                github: "https://github.com/yourusername/churn-prediction",
                liveDemo: null,
            },
            {
                id: 'ds-2',
                title: "Housing Price Regression",
                description: "Exploratory Data Analysis (EDA) and regression modeling to predict housing prices based on various features using advanced statistical techniques.",
                thumbnail: "https://placehold.co/400x250/0f4c75/e0e0e0?text=Data+Science+Project+2",
                technologies: ["Python", "NumPy", "Seaborn", "Linear Regression"],
                github: "https://github.com/yourusername/housing-prices",
                liveDemo: "https://streamlit.yourwebsite.com/housing", // Example Streamlit link
            },
            {
                id: 'ds-3',
                title: "Sentiment Analysis of Social Media",
                description: "Applied NLP techniques to analyze sentiment from social media posts, categorizing them as positive, negative, or neutral.",
                thumbnail: "https://placehold.co/400x250/0f4c75/e0e0e0?text=Data+Science+Project+3",
                technologies: ["Python", "NLTK", "TextBlob", "Machine Learning"],
                github: "https://github.com/yourusername/sentiment-analysis",
                liveDemo: null,
            },
        ],
        frontEnd: [
            {
                id: 'fe-1',
                title: "E-commerce Product Page",
                description: "A responsive e-commerce product page built with React, featuring dynamic content loading and a smooth user interface.",
                thumbnail: "https://placehold.co/400x250/3282b8/e0e0e0?text=Front-End+Project+1",
                technologies: ["React.js", "Tailwind CSS", "JavaScript", "API Fetch"],
                liveDemo: "https://yourwebsite.com/ecommerce-demo",
                github: "https://github.com/yourusername/ecommerce-react",
            },
            {
                id: 'fe-2',
                title: "Interactive To-Do App",
                description: "A feature-rich To-Do application demonstrating state management, component reusability, and local storage integration.",
                thumbnail: "https://placehold.co/400x250/3282b8/e0e0e0?text=Front-End+Project+2",
                technologies: ["React.js", "CSS Modules", "HTML5", "Local Storage"],
                liveDemo: "https://yourwebsite.com/todo-app-demo",
                github: "https://github.com/yourusername/react-todo-app",
            },
            {
                id: 'fe-3',
                title: "Personal Blog Template",
                description: "A clean and minimalist blog template designed for optimal readability and responsive layout across devices.",
                thumbnail: "https://placehold.co/400x250/3282b8/e0e0e0?text=Front-End+Project+3",
                technologies: ["React.js", "Next.js", "Markdown", "Responsive Design"],
                liveDemo: "https://yourwebsite.com/blog-template",
                github: "https://github.com/yourusername/react-blog-template",
            },
        ],
        videoEditing: [
            {
                id: 've-1',
                title: "Short Film: 'Echoes of Tomorrow'",
                description: "Edited and color-graded a 5-minute sci-fi short film, focusing on atmospheric storytelling and visual effects integration.",
                thumbnail: "https://placehold.co/400x250/0f4c75/e0e0e0?text=Video+Project+1",
                videoEmbed: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1", // Replace with actual YouTube embed ID
                projectType: "Short Film",
                role: "Editor, Colorist, VFX Artist",
                fullProject: "https://behance.net/yourusername/echoes",
            },
            {
                id: 've-2',
                title: "Corporate Explainer Video",
                description: "Produced a 2-minute animated explainer video for a tech startup, covering script to final export with motion graphics.",
                thumbnail: "https://placehold.co/400x250/0f4c75/e0e0e0?text=Video+Project+2",
                videoEmbed: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2", // Replace with actual YouTube embed ID
                projectType: "Promotional Video",
                role: "Motion Graphics Designer, Editor",
                fullProject: null,
            },
            {
                id: 've-3',
                title: "Music Video: 'Rhythm of the City'",
                description: "Conceptualized and edited a dynamic music video, synchronizing visuals with audio for a high-energy feel.",
                thumbnail: "https://placehold.co/400x250/0f4c75/e0e0e0?text=Video+Project+3",
                videoEmbed: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3", // Replace with actual YouTube embed ID
                projectType: "Music Video",
                role: "Editor, Sound Designer",
                fullProject: "https://vimeo.com/yourusername/rhythm",
            },
            {
                id: 've-4',
                title: "Vlog Series: 'Tech Insights'",
                description: "Edited a series of tech review vlogs, focusing on clear communication, engaging cuts, and consistent branding.",
                thumbnail: "https://placehold.co/400x250/0f4c75/e0e0e0?text=Video+Project+4",
                videoEmbed: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4", // Replace with actual YouTube embed ID
                projectType: "Vlog/Educational",
                role: "Editor",
                fullProject: null,
            },
        ],
    },
    contact: {
        email: "your.email@example.com",
        social: [
            { name: "GitHub", url: "https://github.com/yourusername", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.201-6.086 8.201-11.385c0-6.627-5.373-12-12-12z" }, // GitHub SVG
            { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.444-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.071-.933-2.071-2.077 0-1.141.927-2.071 2.071-2.071 1.144 0 2.069.93 2.069 2.071 0 1.144-.925 2.077-2.069 2.077zm1.756 13.019H3.58V9h3.513v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.209 0 22.225 0z" }, // LinkedIn SVG
            { name: "YouTube", url: "https://youtube.com/yourusername", icon: "M21.58 7.19a2.02 2.02 0 00-1.42-1.42C18.66 5 12 5 12 5s-6.66 0-8.16.77a2.02 2.02 0 00-1.42 1.42C2 8.66 2 12 2 12s0 3.34.77 4.81a2.02 2.02 0 001.42 1.42c1.5.77 8.16.77 8.16.77s6.66 0 8.16-.77a2.02 2.02 0 001.42-1.42C22 15.34 22 12 22 12s0-3.34-.77-4.81zM9.54 16.51V7.49L15.94 12l-6.4 4.51z" }, // YouTube SVG
            { name: "Kaggle", url: "https://kaggle.com/yourusername", icon: "M20 0H4C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zM8 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2-2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2-2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }, // Kaggle SVG (placeholder)
        ],
    },
};

// --- Reusable Components ---

const SocialIcon = ({ href, iconPath, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-light hover:text-accent-light transition-colors duration-300 transform hover:scale-110"
        aria-label={label}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
        >
            <path d={iconPath} />
        </svg>
    </a>
);

const ProgressBar = ({ name, level }) => (
    <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
            <span className="text-text-light text-lg font-medium">{name}</span>
            <span className="text-text-muted text-sm">{level}%</span>
        </div>
        <div className="w-full bg-dark-bg rounded-full h-2.5">
            <div
                className="bg-accent-teal h-2.5 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${level}%` }}
            ></div>
        </div>
    </div>
);

const SectionDivider = () => (
    <div className="w-24 h-1 bg-accent-teal rounded-full my-8 mx-auto"></div>
);

const Button = ({ children, onClick, type = 'button', className = '' }) => (
    <button
        type={type}
        onClick={onClick}
        className={`
      px-6 py-3 rounded-md text-text-light font-semibold
      bg-accent-teal hover:bg-accent-light transition-all duration-300
      shadow-lg hover:shadow-xl transform hover:-translate-y-1
      focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 focus:ring-offset-dark-bg
      ${className}
    `}
    >
        {children}
    </button>
);

const PageContainer = ({ children }) => (
    <div className="min-h-screen bg-dark-bg text-text-light font-inter">
        {children}
    </div>
);

// --- Page Components ---

const Header = ({ currentPage, setCurrentPage, name, socialLinks }) => {
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
                ${currentPage === item.page ? 'underline underline-offset-4 text-accent-light scale-105' : ''} /* Added scale-105 for active */
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
                    <svg className="w-8 h-8 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                text-text-light text-2xl font-medium hover:text-accent-light transition-colors duration-200 transform hover:scale-110 /* Added transform and hover:scale-110 */
                ${currentPage === item.page ? 'underline underline-offset-8 text-accent-light' : ''}
              `}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        className="absolute top-4 right-4 text-text-light transform transition-transform duration-300 hover:rotate-90" /* Added transform and hover:rotate-90 */
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


const HomePage = ({ setCurrentPage }) => (
    <>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-dark-bg overflow-hidden p-8">
            {/* Background circles - purely decorative to match the vibe */}
            <div className="absolute w-64 h-64 bg-accent-teal rounded-full opacity-10 blur-3xl -top-16 -left-16 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-accent-light rounded-full opacity-10 blur-3xl -bottom-32 -right-32 animate-pulse-slow"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 z-10 text-center md:text-left">
                {/* Text Content */}
                <div className="flex-1">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-light leading-tight mb-4 animate-fade-in-up">
                        Hi, I'm <span className="text-accent-teal">{portfolioData.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted mb-8 animate-fade-in-up delay-200">
                        {portfolioData.title}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-400">
                        <Button onClick={() => setCurrentPage('contact')}>Contact Me</Button>
                        <Button onClick={() => alert("CV Download not implemented in this demo.")} className="bg-dark-card hover:bg-gray-700">
                            Download CV
                        </Button>
                    </div>
                </div>

                {/* Image/Avatar */}
                <div className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-accent-teal animate-fade-in-right">
                    <img
                        src="https://placehold.co/400x400/0f4c75/e0e0e0?text=Your+Photo"
                        alt="Your Profile"
                        className="w-full h-full object-cover"
                    />
                    {/* Social Media Icons Overlay */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                        {portfolioData.contact.social.map((social) => (
                            <SocialIcon key={social.name} href={social.url} iconPath={social.icon} label={social.name} />
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 md:py-24 px-4 bg-dark-card shadow-inner">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">About Me</h2>
                <SectionDivider />
                <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-12 md:gap-16 mt-12 text-left">
                    {/* About Content */}
                    <div className="flex-1 space-y-6 animate-fade-in-up delay-600"> {/* Added animation */}
                        <p className="text-text-muted text-lg leading-relaxed">
                            {portfolioData.about.bio}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {portfolioData.about.details.map((detail, index) => (
                                <p key={index} className="text-text-light">
                                    <span className="font-semibold text-accent-teal">{detail.label}:</span>{" "}
                                    {detail.value}
                                </p>
                            ))}
                        </div>
                    </div>
                    {/* About Image - placeholder for now */}
                    <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-accent-light hidden md:block animate-fade-in-right delay-700"> {/* Added animation */}
                        <img
                            src="https://placehold.co/400x400/3282b8/e0e0e0?text=About+Image"
                            alt="About"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* My Interests Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-text-light mb-8 animate-fade-in-up delay-800">My Interests</h3> {/* Added animation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {portfolioData.interests.map((interestCategory, index) => (
                            <div key={index} className="bg-dark-bg p-6 rounded-lg shadow-xl border border-accent-teal/20 transition-all duration-300 hover:scale-105 hover:border-accent-light animate-fade-in-up" style={{ animationDelay: `${900 + index * 100}ms` }}> {/* Added staggered animation */}
                                <h4 className="text-xl font-semibold text-accent-teal mb-4">{interestCategory.category}</h4>
                                <ul className="text-text-muted text-left space-y-2">
                                    {interestCategory.items.map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <svg className="w-5 h-5 text-accent-light mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 px-4 bg-dark-bg">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4 animate-fade-in-up">My Skills</h2> {/* Added animation */}
                <SectionDivider />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                    {/* Technical Skills */}
                    <div className="bg-dark-card p-8 rounded-lg shadow-xl animate-fade-in-left delay-1000"> {/* Added animation */}
                        <h3 className="text-3xl font-bold text-accent-light mb-6">Technical Skills</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {portfolioData.skills.technical.map((skill, index) => (
                                <ProgressBar key={index} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                    {/* Professional Skills */}
                    <div className="bg-dark-card p-8 rounded-lg shadow-xl animate-fade-in-right delay-1100"> {/* Added animation */}
                        <h3 className="text-3xl font-bold text-accent-light mb-6">Professional Skills</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {portfolioData.skills.professional.map((skill, index) => (
                                <ProgressBar key={index} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

const ProjectCard = ({ project, type }) => (
    <div className="bg-dark-card rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-accent-teal/20 hover:border-accent-light"> {/* Enhanced hover effects */}
        <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-48 object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/3282b8/e0e0e0?text=Image+Missing`; }}
        />
        <div className="p-6">
            <h3 className="text-2xl font-bold text-text-light mb-3">{project.title}</h3>
            <p className="text-text-muted text-sm mb-4 line-clamp-3">{project.description}</p>
            {type === 'dataScience' && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-accent-teal/20 text-accent-light text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            {type === 'frontEnd' && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-accent-light/20 text-accent-light text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            {type === 'videoEditing' && (
                <div className="mb-4 text-text-muted text-sm space-y-1">
                    {project.projectType && <p><span className="font-semibold text-accent-teal">Type:</span> {project.projectType}</p>}
                    {project.role && <p><span className="font-semibold text-accent-teal">Role:</span> {project.role}</p>}
                </div>
            )}

            <div className="flex justify-start gap-4 mt-auto pt-4 border-t border-dark-bg">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-text-light hover:text-accent-light transition-colors duration-200 transform hover:scale-105" /* Added hover effect */
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.201-6.086 8.201-11.385c0-6.627-5.373-12-12-12z"></path></svg>
                        GitHub
                    </a>
                )}
                {(project.liveDemo || project.fullProject) && (
                    <a
                        href={project.liveDemo || project.fullProject}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-text-light hover:text-accent-light transition-colors duration-200 transform hover:scale-105" /* Added hover effect */
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        {project.liveDemo ? "Live Demo" : "View Project"}
                    </a>
                )}
            </div>
        </div>
    </div>
);


const DataScienceProjectsPage = () => {
    const [filterTech, setFilterTech] = useState("All");
    const allTechnologies = ["All", ...new Set(portfolioData.projects.dataScience.flatMap(p => p.technologies))];

    const filteredProjects = portfolioData.projects.dataScience.filter(project =>
        filterTech === "All" || project.technologies.includes(filterTech)
    );

    return (
        <section className="py-16 md:py-24 px-4 bg-dark-bg min-h-[calc(100vh-64px)]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4 animate-fade-in-up">Data Science Projects</h2> {/* Added animation */}
                <SectionDivider />

                <div className="flex flex-wrap justify-center gap-3 my-8 animate-fade-in-up delay-200"> {/* Added animation */}
                    {allTechnologies.map(tech => (
                        <button
                            key={tech}
                            onClick={() => setFilterTech(tech)}
                            className={`
                px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 transform hover:scale-105
                ${filterTech === tech ? 'bg-accent-teal text-text-light' : 'bg-dark-card text-text-muted hover:bg-accent-teal/30'}
              `}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {filteredProjects.map((project, index) => (
                        <div className="animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }} key={project.id}> {/* Added staggered animation */}
                            <ProjectCard project={project} type="dataScience" />
                        </div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <p className="col-span-full text-text-muted text-lg mt-8">No projects found for the selected filter.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

const FrontEndProjectsPage = () => {
    const [filterTech, setFilterTech] = useState("All");
    const allTechnologies = ["All", ...new Set(portfolioData.projects.frontEnd.flatMap(p => p.technologies))];

    const filteredProjects = portfolioData.projects.frontEnd.filter(project =>
        filterTech === "All" || project.technologies.includes(filterTech)
    );

    return (
        <section className="py-16 md:py-24 px-4 bg-dark-bg min-h-[calc(100vh-64px)]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4 animate-fade-in-up">Front-End Development Projects</h2> {/* Added animation */}
                <SectionDivider />

                <div className="flex flex-wrap justify-center gap-3 my-8 animate-fade-in-up delay-200"> {/* Added animation */}
                    {allTechnologies.map(tech => (
                        <button
                            key={tech}
                            onClick={() => setFilterTech(tech)}
                            className={`
                px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 transform hover:scale-105
                ${filterTech === tech ? 'bg-accent-teal text-text-light' : 'bg-dark-card text-text-muted hover:bg-accent-teal/30'}
              `}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {filteredProjects.map((project, index) => (
                        <div className="animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }} key={project.id}> {/* Added staggered animation */}
                            <ProjectCard project={project} type="frontEnd" />
                        </div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <p className="col-span-full text-text-muted text-lg mt-8">No projects found for the selected filter.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

const VideoEditingPortfolioPage = () => {
    const [filterType, setFilterType] = useState("All");
    const allTypes = ["All", ...new Set(portfolioData.projects.videoEditing.map(p => p.projectType))];

    const filteredVideos = portfolioData.projects.videoEditing.filter(video =>
        filterType === "All" || video.projectType === filterType
    );

    return (
        <section className="py-16 md:py-24 px-4 bg-dark-bg min-h-[calc(100vh-64px)]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4 animate-fade-in-up">Video Editing Portfolio</h2> {/* Added animation */}
                <SectionDivider />

                <div className="flex flex-wrap justify-center gap-3 my-8 animate-fade-in-up delay-200"> {/* Added animation */}
                    {allTypes.map(type => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`
                px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 transform hover:scale-105
                ${filterType === type ? 'bg-accent-teal text-text-light' : 'bg-dark-card text-text-muted hover:bg-accent-teal/30'}
              `}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {filteredVideos.map((video, index) => (
                        <div key={video.id} className="bg-dark-card rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-accent-teal/20 hover:border-accent-light animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}> {/* Enhanced hover and staggered animation */}
                            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg-black">
                                {video.videoEmbed ? (
                                    <iframe
                                        src={video.videoEmbed}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                ) : (
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/0f4c75/e0e0e0?text=Video+Thumbnail+Missing`; }}
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-text-light mb-2">{video.title}</h3>
                                <p className="text-text-muted text-sm mb-4 line-clamp-3">{video.description}</p>
                                <div className="flex justify-start gap-4 mt-auto pt-4 border-t border-dark-bg">
                                    {video.fullProject && (
                                        <a
                                            href={video.fullProject}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-text-light hover:text-accent-light transition-colors duration-200 transform hover:scale-105" /* Added hover effect */
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                            View Full Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredVideos.length === 0 && (
                        <p className="col-span-full text-text-muted text-lg mt-8">No videos found for the selected filter.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple client-side validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // In a real application, you would send this data to a backend
        alert("Message sent! (Simulated)");
        console.log("Form Data:", formData);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    };

