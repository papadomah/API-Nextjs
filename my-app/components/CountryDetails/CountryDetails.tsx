import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CountryContext } from "../../context/CountryContext";
import BorderCountries from "../BorderCountries/BorderCountries";
import styles from "../CountryDetails/countryDetails.module.css";
import { MdKeyboardBackspace } from 'react-icons/md';
import country from "@/pages/[CountryDetails]";
import { BorderStyle } from "@mui/icons-material";

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
  const [individualCountry, setIndividualCountry] = useState<CountryData | null>(null);

  useEffect(() => {
    if (countries && CountryDetails) {
      const foundCountry = countries.find((item: CountryData) => item.name === CountryDetails);
      setIndividualCountry(foundCountry || null);
    }
  }, [countries, CountryDetails]);


  
  return (
    <div className={styles.countryDetails_container}>
      <section className={styles.countryDetails}>
        <button className={styles.back} onClick={() => router.back()}>
          <div className={styles.back_icon}>
            < MdKeyboardBackspace  />
          </div>          
          <p>Go Back</p>
        </button>
        {individualCountry !== null && (
          <section className={styles.detail_body}>
            <div className={styles.img_container}>
              <img className={styles.flag} src={individualCountry.flag} alt="flag" />
            </div>
            <div className={styles.detail_info}>
              <div className={styles.left_info}>
                <h2>{individualCountry.name}</h2>
                <p>Native Name: <span className={styles.values}>{individualCountry.nativeName}</span></p>
                <p>Population: <span className={styles.values}>{individualCountry.population}</span></p>
                <p>Region: <span className={styles.values}>{individualCountry.region}</span></p>
                <p>Sub Region: <span className={styles.values}>{individualCountry.subregion}</span></p>
                <p>Capital: <span className={styles.values}>{individualCountry.capital}</span></p>
              </div>
              <div className={styles.right_info}>
                <p>Top Level Domain: <span className={styles.values}>{individualCountry.topLevelDomain.join(', ')}</span></p>
                <p>Currencies: <span className={styles.values}>{individualCountry.currencies.map(currency => currency.name).join(', ')}</span></p>
                <p>Languages: <span className={styles.values}>{individualCountry.languages.map(language => language.name).join(', ')}</span></p>
              </div>
              <div className={styles.border_individualCountry}>
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