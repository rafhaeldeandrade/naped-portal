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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Séries</a>
            </li>
            <li>
              <a href="/">Filmes</a>
            </li>
            <li>
              <a href="/">Animes</a>
            </li>
            <li>
              <a href="/">Games</a>
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
