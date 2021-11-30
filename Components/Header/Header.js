/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import styles from '../Header/Header.module.css';


const Header = () => {
  return (
    <header className={styles.head}>
      <div className={styles.logo}>
        <Link href="/">
          <a className={`${styles.nav_bar} navbar-brand`}>
            <img
              src="https://www.sports.info/assets/images/logo_v2.svg"
              alt="logo"
              className={`${styles.sports_logo}`}
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
