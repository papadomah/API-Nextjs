import React, { ReactNode, createContext, useState } from 'react';

export const ThemeContext = createContext<any>(null);

interface ThemeContextProps{
  children: ReactNode;
}

// const ThemeProvider:React.FC<ThemeContextProps> = ({children}) => {
// }

const ThemeContextProvider: React.FC <ThemeContextProps>= ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
