import React,{useContext} from "react";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import Header from "../../components/Header/Header";
import { ThemeContext } from "../../context/ThemeContext";

function country() {
  const theme = useContext(ThemeContext);
  return (
    <div >
      <Header />
      <CountryDetails />
    </div>
  );
  
}

export default country;
