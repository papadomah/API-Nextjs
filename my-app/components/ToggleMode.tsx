import React, { useContext } from 'react';
console.log("🚀 ~ file: ToggleMode.tsx:2 ~ import:", import)
import { ThemeContext } from '../context/ThemeContext';

const ToggleMode: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ToggleMode;
