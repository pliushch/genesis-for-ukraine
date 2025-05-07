import React from 'react';
import styles from './HelpsImage.module.scss';
import help from 'src/assets/images/military-help.png';
import help2 from 'src/assets/images/military-help-all.png';
import background from 'src/assets/images/pexels-brett-sayles.png'

const HelpsImage = () => {
  return (
    <div>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <img className={styles.image} src={help} alt="military goods" />
      </li>
      <li className={styles.listItem}>
        <img className={styles.image} src={help2} alt="military goods" />
      </li>
    </ul>
      <img className={styles.background} src={background} alt="background" />
    </div>
  );
};

export default HelpsImage;
