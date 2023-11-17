import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CountryContext } from "../../context/CountryContext";
import BorderCountries from "../BorderCountries/BorderCountries";
import styles from "../CountryDetails/countryDetails.module.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";

interface CountryData {
  map(arg0: (borders: any) => React.JSX.Element): React.ReactNode;
  name: string;
  countryData: any;
  flag: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: {
    code: string;
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  borders: string[];
}

const CountryDetails: React.FC = () => {
  const router = useRouter();
  const { countries } = useContext(CountryContext);
  const { CountryDetails } = router.query;
  const [individualCountry, setIndividualCountry] =
    useState<CountryData | null>(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (countries && CountryDetails) {
      const foundCountry = countries.find(
        (item: CountryData) => item.name === CountryDetails
      );
      setIndividualCountry(foundCountry || null);
    }
  }, [countries, CountryDetails]);

  return (
    <div
      className={`${styles.countryDetails_container} ${
        theme?.theme === "dark" ? styles.darkMode : ""
      }`}
    >
      <section className={styles.countryDetails}>
        <button
          className={`${styles.back} ${
            theme?.theme === "dark" ? styles.darkMode : ""
          }`} onClick={() => router.back()}        >
          <MdKeyboardBackspace size={40} />
          <p>Go Back</p>
        </button>
        {individualCountry !== null && (
          <section className={styles.detail_body}>
            <div className={styles.img_container}>
              <img
                className={styles.flag}
                src={individualCountry.flag}
                alt="flag"
              />
            </div>
            <div
              className={`${styles.detail_info} ${
                theme?.theme === "dark" ? styles.darkMode : ""
              }`}
            >
              <div className={styles.left_info}>
                <h3 className={`${theme?.theme==='dark'? styles.darkMode: ''}`}>{individualCountry.name}</h3>
                <p>
                  Native Name:{" "}
                  <span
                    className={`${styles.values} ${
                      theme?.theme === "dark" ? styles.darkMode : ""
                    }`}
                  >
                    {individualCountry.nativeName}
                  </span>
                </p>
                <p>
                  Population:{" "}
                  <span
                    className={`${styles.values} ${
                      theme?.theme === "dark" ? styles.darkMode : ""
                    }`}
                  >
                    {individualCountry.population}
                  </span>
                </p>
                <p>
                  Region:{" "}
                  <span
                    className={`${styles.values} ${
                      theme?.theme === "dark" ? styles.darkMode : ""
                    }`}
                  >
                    {individualCountry.region}
                  </span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span
                    className={`${styles.values} ${
                      theme?.theme === "dark" ? styles.darkMode : ""
                    }`}
                  >
                    {individualCountry.subregion}
                  </span>
                </p>
                <p>
                  Capital:{" "}
                  <span
                    className={`${styles.values} ${
                      theme?.theme === "dark" ? styles.darkMode : ""
                    }`}
                  >
                    {individualCountry.capital}
                  </span>
                </p>
              </div>
              <div className={styles.right_info}>
                <p>
                  Top Level Domain:{" "}
                  <span
                    className={`${styles.values} ${
                      theme?.theme === "dark" ? styles.darkMode : ""
                    }`}
                  >
                    {individualCountry.topLevelDomain.join(", ")}
                  </span>
                </p>
                <p>
                  Currencies:{" "}
                  <span
                    className={`${styles.values} ${
                      theme?.theme === "dark" ? styles.darkMode : ""
                    }`}
                  >
                    {individualCountry.currencies
                      .map((currency) => currency.name)
                      .join(", ")}
                  </span>
                </p>
                <p>
                  Languages:{" "}
                  <span
                    className={`${styles.values} ${
                      theme?.theme === "dark" ? styles.darkMode : ""
                    }`}
                  >
                    {individualCountry.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </span>
                </p>
              </div>
              <div
                className={`${styles.border_individualCountry} ${
                  theme?.theme === "dark" ? styles.darkMode : ""
                }`}
              >
                <BorderCountries borders={individualCountry.borders} />
              </div>
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default CountryDetails;
