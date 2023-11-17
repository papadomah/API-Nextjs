import React, { useContext } from "react";
import styles from "../CountryCard/countryCard.module.css";
import Link from "next/link";
import { CountryContext } from "../../context/CountryContext";
import { ThemeContext } from "../../context/ThemeContext";
interface CountryCardProps {
  country: {
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => 

{
  useContext(CountryContext);
  const theme =useContext(ThemeContext);
  return (
    <div className={`${styles.container} ${theme?.theme==='dark'? styles.darkMode: ''} `}>
      <Link className={styles.link} href={country.name} >
        <div className={`${styles.card} ${theme?.theme === 'dark' ? styles.darkMode: ''}`}>
          <div className={styles.flag_container}>
            <img className={styles.flag} src={country.flag} alt="flag" />
          </div>
          <div className={`${styles.country_info} ${theme?.theme==='dark'? styles.darkMode: ''}`}>
            <h3 className={`${theme?.theme==='dark'? styles.darkMode: ''}`}> {country.name}</h3>
            <p>
              Population:{" "}
              <span className={`${styles.values}${theme?.theme==='dark'? styles.darkMode: ''}`}>{country.population} </span>
            </p>
            <p>
              Region: <span className={`${styles.values}${theme?.theme==='dark'? styles.darkMode: ''}`}> {country.region}</span>
            </p>
            <p>
              Capital: <span className={`${styles.values}${theme?.theme==='dark'? styles.darkMode: ''}`}>{country.capital} </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
