import React from 'react';
import LatestNewsBox from './components/LatestNewsBox';
import NewsBox from './components/NewsBox';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  return (
    <>
      <div className={styles.primaryNewsWrapper}>
        <NewsBox />
        <div className={styles.secondaryNewsWrapper}>
          <NewsBox size="sm" />
          <NewsBox size="sm" />
        </div>
      </div>
      <div className={styles.latestNewsWrapper}>
        <div className={styles.latestNewsListWrapper}>
          <LatestNewsBox />
          <LatestNewsBox />
          <LatestNewsBox />
          <LatestNewsBox />
          <LatestNewsBox />
          <LatestNewsBox />
          <LatestNewsBox />
          <LatestNewsBox />
          <LatestNewsBox />
          <LatestNewsBox />
        </div>
        <div className={styles.sideBarNewsWrapper}>
          <span>Lorem ipsum dolor</span>
          <div className={styles.separator} />
          <div className={styles.sideBarNews}>
            <NewsBox size="md" />
            <NewsBox size="md" />
            <NewsBox size="md" />
          </div>
        </div>
      </div>
      <div className={styles.bottomNewsWrapper}>
        <span>Notícias mais recentes</span>
        <div className={styles.separator} />
        <div className={styles.bottomNews}>
          <NewsBox size="md" />
          <NewsBox size="md" />
          <NewsBox size="md" />
          <NewsBox size="md" />
          <NewsBox size="md" />
          <NewsBox size="md" />
        </div>
      </div>
    </>
  );
}
