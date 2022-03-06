import React from 'react';
import NewsBox from './components/NewsBox';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  return (
    <div className={styles.primaryNewsWrapper}>
      <NewsBox />
      <div className={styles.secondaryNewsWrapper}>
        <div className={styles.secondaryNews}>Uepa</div>
        <div className={styles.secondaryNews}>Uepa</div>
      </div>
    </div>
  );
}
