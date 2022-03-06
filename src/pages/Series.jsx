import React from 'react';
import Header from '../components/Header';
import styles from './pages.module.css';

export default function Series() {
  return (
    <>
      <Header active="series" />
      <div className={styles.imgBanner}>
        <div className={styles.verticalLinearGradient} />
        <img src="https://i.imgur.com/RwE8EoQ.jpeg" alt="banner" />
        <h2>Animes</h2>
        <span>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</span>
      </div>
    </>
  );
}
