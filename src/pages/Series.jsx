import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import styles from './pages.module.css';
import SpecificSubjectNews from '../components/SpecificSubjectNews';

export default function Series() {
  return (
    <>
      <Header active="series" />
      <div className={styles.imgBanner}>
        <div className={styles.verticalLinearGradient} />
        <img src="https://i.imgur.com/HghwYJO.jpeg" alt="banner" />
        <h2>Series</h2>
        <span>
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </span>
      </div>
      <SearchBar />
      <div className={styles.specificSubjectNews}>
        <SpecificSubjectNews subject="series" />
      </div>
      {/* <Pagination /> */}
      <Footer />
    </>
  );
}
