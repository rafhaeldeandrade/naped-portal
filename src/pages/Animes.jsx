import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import styles from './pages.module.css';
import SpecificSubjectNews from '../components/SpecificSubjectNews';

export default function Animes() {
  return (
    <>
      <Header active="animes" />
      <div className={styles.imgBanner}>
        <div className={styles.verticalLinearGradient} />
        <img src="https://i.imgur.com/hChriTb.jpeg" alt="banner" />
        <h2>Animes</h2>
        <span>
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </span>
      </div>
      <SearchBar />
      <div className={styles.specificSubjectNews}>
        <SpecificSubjectNews subject="animes" />
      </div>
      {/* <Pagination /> */}
      <Footer />
    </>
  );
}
