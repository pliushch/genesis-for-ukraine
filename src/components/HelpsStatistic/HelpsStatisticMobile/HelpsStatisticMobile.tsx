import React from 'react';
import styles from './HelpsStatisticMobile.module.scss';
import Title from '../../Title';
import cn from 'classnames';
import arrow from 'src/assets/images/arrow-simple.svg';
import helps from 'src/assets/images/helps.png';

const HelpsStatisticMobile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sumWrapper}>
        <Title className={styles.sumText}>16,2 млн грн</Title>
        <img className={styles.arrow} src={arrow} alt="arrow" width={16} height={16} />
      </div>
      <div className={styles.totalWrapper}>
        <Title className={styles.totalTitle}>2100+</Title>
        <p className={styles.totalDescription}>одиниць товарів придбали, з них:</p>
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={helps} alt="helps" />
        </div>
        <ul className={styles.list}>
          <li className={cn(styles.listItem, styles.darkWrapper)}>
            <Title className={styles.listTitle}>726</Title>
            <p className={styles.listDescription}>товарів медичного призначення</p>
          </li>
          <li className={cn(styles.listItem, styles.lightWrapper)}>
            <Title className={styles.listTitle}>224</Title>
            <p className={styles.listDescription}>одиниці індивідуального захисту</p>
          </li>
          <li className={cn(styles.listItem, styles.semiLightWrapper)}>
            <Title className={styles.listTitle}>365</Title>
            <p className={styles.listDescription}>одиниць одягу та спорядження</p>
          </li>
          <li className={cn(styles.listItem, styles.darkWrapper)}>
            <Title className={styles.listTitle}>513</Title>
            <p className={styles.listDescription}>одиниць технічних засобів</p>
          </li>
          <li className={cn(styles.listItem, styles.lightWrapper)}>
            <Title className={styles.listTitle}>3</Title>
            <p className={styles.listDescription}>виплати фінансової допомоги</p>
          </li>
          <li className={cn(styles.listItem, styles.semiLightWrapper)}>
            <Title className={styles.listTitle}>290</Title>
            <p className={styles.listDescription}>інші гуманітарні запити</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpsStatisticMobile;
