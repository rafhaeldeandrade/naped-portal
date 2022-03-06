import React from 'react';
import PropTypes from 'prop-types';
import styles from './LatestNewsBox.module.css';

export default function LatestNewsBox({
  img,
  title,
  category,
  content,
  date,
  id,
}) {
  return (
    <div className={styles.newListWrapper}>
      <div className={styles.newsListImageSection}>
        <div className={styles.linearGradient} />
        <img src={img} alt="news" />
        <span>{category}</span>
      </div>
      <div className={styles.newsListContentSection}>
        <h3>
          <a href={`/posts/${id}`}>{title}</a>
        </h3>
        <p>{content}</p>
        <span>{date}</span>
        <button type="button">Ler notícia</button>
      </div>
    </div>
  );
}

LatestNewsBox.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
};

LatestNewsBox.defaultProps = {
  img: 'https://i.imgur.com/RSHMjsl.jpeg',
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus elementum, pharetra turpis sit amet, luctus sapien.',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  category: 'null',
  id: '1',
  date: '00/00/0000'
};
