import React from 'react';
import styles from './FooterMobile.module.scss';
import logo from 'src/assets/images/genesis-for-ukraine-logo-dark.png';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/constants';
import Title from '../../Title';

const FooterMobile = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.policiesWrapper}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="genesis-for-ukraine-logo" width={66} height={18} />
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}><Link to={ROUTES.TERMS} className={styles.text}>
            Правила використання
          </Link></li>
          <li className={styles.listItem}><Link to={ROUTES.POLICY} className={styles.text}>
            Політика конфіденційності
          </Link></li>
        </ul>
      </div>
      <div className={styles.policies}>
        <div className={styles.contacts}>
          <Title className={styles.contractsTitle}>
            Контакти
          </Title>
          <a href="mailto:charity.fund@gen.tech" className={styles.email}>charity.fund@gen.tech</a>
        </div>
        <p className={styles.text}>Copyright © {new Date().getFullYear()} Genesis</p>
      </div>
    </footer>
  );
};

export default FooterMobile;
