import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

export default function Header({ active }) {
  function setPageToActive(page) {
    const navComponents = document.querySelectorAll(styles.underline);
    navComponents.forEach((c) => c.classList.remove(styles.active));
    const activeComponent = document.querySelector(`.${page}`);
    activeComponent.classList.add(styles.active);
  }

  useEffect(() => setPageToActive(active), [active]);

  return (
    <header>
      <a href="/">Naped</a>
      <div className={styles.rightSideWrapper}>
        <nav>
          <ul>
            <li>
              <a className={`${styles.underline} home`} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={`${styles.underline} series`} href="/series">
                Séries
              </a>
            </li>
            <li>
              <a className={`${styles.underline}  movies`} href="/filmes">
                Filmes
              </a>
            </li>
            <li>
              <a className={`${styles.underline} animes`} href="/animes">
                Animes
              </a>
            </li>
            <li>
              <a className={`${styles.underline} games`} href="/games">
                Games
              </a>
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

Header.propTypes = {
  active: PropTypes.oneOf(['home', 'series', 'movies', 'animes', 'games']).isRequired,
}