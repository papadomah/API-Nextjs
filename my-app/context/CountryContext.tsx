import React, { ReactNode, createContext, useEffect, useState } from 'react';

export const CountryContext = createContext<any>(null);


interface countryChildrenProps{
children: ReactNode;
}

const CountryContextProvider: React.FC <countryChildrenProps>= ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ countries }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
