import React from 'react';
import styles from './HelpsStatisticDesktop.module.scss';
import Title from '../../Title';
import cn from 'classnames';
import arrow from 'src/assets/images/arrow-simple.svg';

type HelpProps = {
  className?: string;
}

const HelpsStatisticDesktop = ({ className = '' }: HelpProps) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.sumWrapper}>
        <img className={styles.arrow} src={arrow} alt="arrow" width={40} height={40} />
        <Title className={styles.sumText}>16,2 млн грн</Title>
      </div>
      <div>
        <div className={styles.totalWrapper}>
          <Title className={styles.totalTitle}>2100+</Title>
          <p className={styles.totalDescription}>одиниць товарів придбали, з них:</p>
        </div>
        <ul className={styles.list}>
          <li className={cn(styles.listItem, styles.semiLightWrapper)}>
            <Title className={styles.listTitle}>726</Title>
            <p className={styles.listDescription}>товарів медичного призначення</p>
          </li>
          <li className={cn(styles.listItem, styles.semiDarkWrapper)}>
            <Title className={styles.listTitle}>513</Title>
            <p className={styles.listDescription}>одиниць технічних засобів</p>
          </li>
          <li className={cn(styles.listItem, styles.darkWrapper)}>
            <Title className={styles.listTitle}>365</Title>
            <p className={styles.listDescription}>одиниць одягу та спорядження</p>
          </li>
          <li className={cn(styles.listItem, styles.lightWrapper)}>
            <Title className={styles.listTitle}>224</Title>
            <p className={styles.listDescription}>одиниці індивідуального захисту</p>
          </li>
          <li className={cn(styles.listItem, styles.semiLightWrapper)}>
            <Title className={styles.listTitle}>3</Title>
            <p className={styles.listDescription}>виплати фінансової допомоги</p>
          </li>
          <li className={cn(styles.listItem, styles.lightWrapper)}>
            <Title className={styles.listTitle}>290</Title>
            <p className={styles.listDescription}>інші гуманітарні запити</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpsStatisticDesktop;
