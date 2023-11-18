import React, { useContext, useState } from "react";
import { CountryContext } from "../../context/CountryContext";
import CountryCard from "../CountryCard/CountryCard";
import styles from "../HomePage/homepage.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import country from "@/pages/[CountryDetails]";
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



const HomePage: React.FC = () => {
  const { countries } = useContext(CountryContext);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const theme = useContext(ThemeContext);
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleRegionSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectValue(e.target.value);
  };

  const filteredCountries = countries.filter((country:any) => {
    const nameMatch = country.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const regionMatch = selectValue === "" || country.region === selectValue;
    return nameMatch && regionMatch;
  });

  return (
    <div
      className={`${styles.homePage} ${
        theme?.theme === "dark" ? styles.darkMode : ""
      }`}
    >
      <div
        className={`${styles.searchFilter} ${
          theme?.theme === "dark" ? styles.darkMode : ""
        }`}
      >
        <div
          className={`${styles.search} ${
            theme?.theme === "dark" ? styles.darkMode : ""
          }`}
        >
          <HiOutlineSearch size={25} />
          <input
            type="text"
            placeholder="Search for a country ...."
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="filter">
          <select name='region' id ='region-select'
            className={`${styles.filter} ${
              theme?.theme === "dark" ? styles.darkMode : ""
            }`} onChange={handleRegionSelectChange}          >
            <option value="">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div
        className={`${styles.country_list} ${
          theme?.theme === "dark" ? styles.darkMode : ""
        }`}
      >
        {filteredCountries.map(
          (country: {
            name: any;
            population?: number;
            region?: string;
            capital?: string;
            flag?: string;
          }) => (
            <CountryCard key={country.name} country={country} name={""} population={0} region={""} capital={""} flag={""} />
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
