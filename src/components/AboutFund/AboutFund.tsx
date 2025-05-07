import React from 'react';
import styles from './AboutFund.module.scss';
import arrow from 'src/assets/images/arrow-simple.svg';
import logo from 'src/assets/images/genesis-for-ukraine-logo.png';

const AboutFund = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <img src={arrow} alt="arrow" className={styles.arrow} width={16} height={16} />
        <p className={styles.description}>
          Genesis for Ukraine допомагає бізнесам <br />
          екосистеми Genesis та партнерським <br />
          компаніям зміцнювати обороноздатність <br />
          України через гуманітарні ініціативи, <br />
          втілювати спільні соціальні проєкти, <br />
          а також підтримувати співробітників <br />
          і їхніх рідних у війську.</p>
        <p className={styles.descriptionDesktop}>
          Genesis for Ukraine допомагає бізнесам екосистеми Genesis та партнерським компаніям <br />
          зміцнювати обороноздатність України через гуманітарні ініціативи, втілювати спільні <br />
          соціальні проєкти, а також підтримувати співробітників і їхніх рідних у війську.
        </p>
      </div>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="genesis for ukraine" width={143} height={38} />
      </div>
    </div>
  );
};

export default AboutFund;
