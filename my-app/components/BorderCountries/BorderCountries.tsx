import React, { useContext, useState } from "react";
import { CountryContext } from "../../context/CountryContext";
import styles from "../BorderCountries/borderCountries.module.css";
import Link from "next/link";
import CountryDetails from "../CountryDetails/CountryDetails";


const BorderCountries: React.FC<{ borders: string[] }> = ({ borders }) => {
  const { countries } = useContext(CountryContext);
  const [ setSelectedCountry] = useState<string | null>(null);


if (!borders) {
    return <p>No border countries</p>;
  }

  const borderCountries = countries.filter((country: { alpha3Code: string }) =>
    borders.includes(country.alpha3Code)
  );

  const handleCountryClick = (name: string) => {
    setSelectedCountry(name);
  };

  return (
    <div className={styles.border_country}>
      <p className={styles.border_description}>Border Countries:</p>
      <div className={styles.bCountries}>
        {borderCountries.map(
          (country: { alpha3Code: string; name: string }) => (
            <div
              key={country.alpha3Code}
              onClick={() => handleCountryClick(`/country/${CountryDetails}`)}
            >
              <Link
                className={styles.border_link} key={country.alpha3Code}
                href={`/country/${country.alpha3Code}`}              >
                <span className={styles.individualBorderCountries}>
                  {country.name}
                </span>
              </Link>
            </div>
          )
        )}
      </div>
      {/* {selectedCountry && <CountryDetails country={selectedCountry} />} */}
      
    </div>
    
  );
};

export default BorderCountries;
