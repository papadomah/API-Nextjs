import React from 'react'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CountryContextProvider from "../../context/CountryContext";
import ThemeContextProvider from "../../context/ThemeContext";
export default function App({ Component, pageProps }: AppProps) {

  return (
    <CountryContextProvider>
      <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
    </CountryContextProvider>  
    
  );
}
