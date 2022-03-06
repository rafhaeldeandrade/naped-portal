import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

export default function SearchBar({ placeholder }) {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder={placeholder} name="search" />
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
}

SearchBar.defaultProps = {
  placeholder: 'Quer ajuda na procura? Pesquise aqui'
}