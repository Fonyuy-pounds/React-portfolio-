// import React, { useState, useEffect } from 'react';
// import Portfolio from './components/Portfolio';
// import './App.css';
// import FloatingElements from './components/FloatingElements';
// import RealMadridTactics from './components/RealMadridTactics';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Check for saved theme preference
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setDarkMode(savedTheme === 'dark');
//     document.body.classList.toggle('dark-mode', savedTheme === 'dark');
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('theme', newMode ? 'dark' : 'light');
//     document.body.classList.toggle('dark-mode', newMode);
//   };

//   return (
//     <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
//       <Portfolio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//       <FloatingElements />

//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import FloatingElements from './components/FloatingElements';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
    }

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Listen for system color scheme changes
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };
    colorSchemeQuery.addEventListener('change', handleColorSchemeChange);

    return () => {
      colorSchemeQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <FloatingElements />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;