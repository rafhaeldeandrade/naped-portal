import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsBox.module.css';

// { img, title, category, id, size }
export default function NewsBox({ img, title, category, id, size }) {
  const classNameBasedOnSize = {
    sm: styles.newsBoxSm,
    md: styles.newsBoxMd,
    lg: styles.newsBoxLg,
  };
  return (
    <div
      className={
        classNameBasedOnSize[size]
          ? classNameBasedOnSize[size]
          : styles.newsBoxLg
      }>
      <div className={styles.linearGradient} />
      <img src={img} alt="post" />
      <span>{category}</span>
      <h3>
        <a href={`/posts/${id}`}>{title}</a>
      </h3>
    </div>
  );
}

NewsBox.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

NewsBox.defaultProps = {
  img: 'https://i.imgur.com/RSHMjsl.jpeg',
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus elementum, pharetra turpis sit amet, luctus sapien.',
  category: 'null',
  id: 1,
  size: 'lg',
};
