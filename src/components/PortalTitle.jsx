import React from 'react';
import styles from './PortalTitle.module.css';

export default function PortalTitle() {
  return (
    <div className={styles.titleWrapper}>
      <div className={styles.titleBox}>
        <h1>Mundo nerd? Naped!</h1>
      </div>
      <h2>
        O naped pode ser sua fonte de informações sobre o mundo nerd e outros
        assuntos relacionados.
      </h2>
    </div>
  );
}
