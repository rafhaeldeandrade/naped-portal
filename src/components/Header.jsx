import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const activeStyle = {
    borderBottom: '1px solid #8257e6',
    color: '#fefbfb',
  };

  return (
    <header>
      <a href="/">Naped</a>
      <div className={styles.rightSideWrapper}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={styles.underline}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/series"
                className={styles.underline}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Series
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/filmes"
                className={styles.underline}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Filmes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/animes"
                className={styles.underline}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Animes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/games"
                className={styles.underline}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Games
              </NavLink>
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
