import React, { useContext } from "react";
import styles from "../CountryCard/countryCard.module.css";
import Link from "next/link";
import { CountryContext } from "../../context/CountryContext";

interface CountryCardProps {
  country: {
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  useContext(CountryContext);

  return (
    <div className={styles.container}>
      <Link className={styles.link} href={country.name}>
        <div className={styles.card}>
          <div className={styles.flag_container}>
            <img className={styles.flag} src={country.flag} alt="flag" />
          </div>
          <div className={styles.country_info}>
            <h2>{country.name}</h2>
            <p>
              Population:{" "}
              <span className={styles.values}>{country.population} </span>
            </p>
            <p>
              Region: <span className={styles.values}> {country.region}</span>
            </p>
            <p>
              Capital: <span className={styles.values}>{country.capital} </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
