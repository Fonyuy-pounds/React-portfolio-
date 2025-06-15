import React, { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import './App.css';
import FloatingElements from './components/FloatingElements';
import RealMadridTactics from './components/RealMadridTactics';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkMode(savedTheme === 'dark');
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', newMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Portfolio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FloatingElements />

    </div>
  );
}

export default App;