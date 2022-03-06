import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <a href="/">Naped</a>
      <div className={styles.rightSideWrapper}>
        <nav>
          <ul>
            <li>
              <a className={styles.underline} href="/">Home</a>
            </li>
            <li>
              <a className={styles.underline} href="/">Séries</a>
            </li>
            <li>
              <a className={styles.underline} href="/">Filmes</a>
            </li>
            <li>
              <a className={styles.underline} href="/">Animes</a>
            </li>
            <li>
              <a className={styles.underline} href="/">Games</a>
            </li>
          </ul>
        </nav>
        <button type="button" className={styles.btnMyAccount}>
          Minha Conta
        </button>
      </div>
    </header>
  );
}

export default Header;
