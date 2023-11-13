import React, { useContext, useState } from 'react';
import { CountryContext } from '../../context/CountryContext';
import CountryCard from '../CountryCard/CountryCard';
import styles from '../HomePage/homepage.module.css'
import {HiOutlineSearch} from 'react-icons/hi'
import country from '@/pages/[CountryDetails]';


const HomePage: React.FC = () => {
  const { countries } = useContext(CountryContext);
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleRegionSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    const nameMatch = country.name.toLowerCase().includes(searchValue.toLowerCase());
    const regionMatch = selectValue === '' || country.region === selectValue;
    return nameMatch && regionMatch;
  });

  return (
    <div className={styles.homePage}>
      <section className={styles.searchFilter}>
        <div className={styles.search}>
          <HiOutlineSearch />
          <input type="text" placeholder="Search for a country ...." onChange={handleSearchInputChange} />
        </div>
        <select className={styles.filter} onChange={handleRegionSelectChange}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>        
      
      <div className={styles.country_list}>
        {filteredCountries.map((country: { name: any; population?: number; region?: string; capital?: string; flag?: string; }) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
