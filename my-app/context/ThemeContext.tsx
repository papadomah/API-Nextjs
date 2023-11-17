import React, { ReactNode, createContext, useState } from 'react';

type ThemeContextType = {
  theme: string;
  themeHandler: () => void;
}
// context with the initial value(it can be null)
export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeContextProps{
  children: ReactNode;

}

//provider component
const ThemeContextProvider: React.FC <ThemeContextProps>= ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themeHandler = () => {
    setTheme(theme === 'light'? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
