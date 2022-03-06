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
      </div>
    </>
  );
}
