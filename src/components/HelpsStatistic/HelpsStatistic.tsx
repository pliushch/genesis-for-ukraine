import React from 'react';
import styles from './HelpsStatistic.module.scss';
import Title from '../Title';
import cn from 'classnames';
import arrow from 'src/assets/images/arrow-simple.svg';
import HelpsStatisticMobile from './HelpsStatisticMobile';
import HelpsStatisticDesktop from './HelpStatisticDesktop';

const HelpsStatistic = () => {
  return (
    <>
      <div className={styles.mobile}>
        <HelpsStatisticMobile />
      </div>
      <div className={styles.desktop}>
        <HelpsStatisticDesktop />
      </div>
    </>
  );
};

export default HelpsStatistic;
