
import React from 'react'
import styles from '../Header/header.module.css'
import {BsMoon} from 'react-icons/bs'

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.header_container}>
        <div className={styles.inner}> 
        <h2 className={styles.logo}>Where in the world?</h2>
        <div className={styles.switch_mode}>
         <div className="con">
          <BsMoon />
         </div>
          <h3>Dark Mode</h3>
        </div>
      </div>
      </section>
      
    </header>
  )
}

export default Header
