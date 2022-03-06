import React from 'react';
import NewsBox from './NewsSection/components/NewsBox';
import styles from './BottomNews.module.css';

export default function BottomNews() {
  return (
    <div className={styles.bottomNewsWrapper}>
      <span>Notícias mais recentes</span>
      <div className="separator" />
      <div className={styles.bottomNews}>
        <NewsBox size="md" />
        <NewsBox size="md" />
        <NewsBox size="md" />
        <NewsBox size="md" />
        <NewsBox size="md" />
        <NewsBox size="md" />
      </div>
    </div>
  );
}
