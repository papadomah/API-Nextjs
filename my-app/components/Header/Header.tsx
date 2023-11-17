
import React, {useContext} from 'react'
import styles from '../Header/header.module.css'
import {BsMoon} from 'react-icons/bs'
import { ThemeContext } from '../../context/ThemeContext'
function Header() {
  const theme =useContext(ThemeContext);
  return (
    <header className={`${styles.header } ${theme?.theme==='dark'? styles.darkMode: ''}`}>
      <section className={`${styles.header_container} ${theme?.theme === 'dark'? styles.darkMode: ''}`}>
        <div className={styles.inner}> 
        <h2 className={`${styles.logo} ${theme?.theme==='dark'? styles.darkMode: ''}`}>Where in the world?</h2>
        <div className={styles.switch_mode} onClick={theme?.themeHandler}>
         <div className={styles.icon}>
          <BsMoon  />
         </div>
          <p>Dark Mode</p>
        </div>
      </div>
      </section>
      
    </header>
  )
}

export default Header
