import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SpecificSubjectNews from '../components/SpecificSubjectNews';
import Footer from '../components/Footer';
import styles from './pages.module.css';

export default function Movies() {
  return (
    <>
      <Header active="movies" />
      <div className={styles.imgBanner}>
        <div className={styles.verticalLinearGradient} />
        <img src="https://i.imgur.com/TYyEfWg.jpeg" alt="banner" />
        <h2>Filmes</h2>
        <span>
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </span>
      </div>
      <SearchBar />
      <div className={styles.specificSubjectNews}>
        <SpecificSubjectNews subject="movies" />
      </div>
      {/* <Pagination /> */}
      <Footer />
    </>
  );
}
