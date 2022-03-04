import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Header.css';

function Header() {
  return (
    <header className={styles.mainHeader}>
      <h2 className={styles.napedTitle}>
        <a href="/">Naped</a>
      </h2>
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
      <button type="button" className="btn-my-account">Minha Conta</button>
    </header>
  );
}

export default Header;
