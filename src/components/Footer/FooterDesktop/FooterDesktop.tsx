import React from 'react';
import styles from './FooterDesktop.module.scss';
import logo from 'src/assets/images/genesis-for-ukraine-logo-dark.png';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/constants';
import Title from '../../Title';

type FooterProps = {
  onScroll: () => void;
  onOpenModal: () => void;
};

const FooterDesktop = ({ onScroll, onOpenModal }: FooterProps) => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="genesis-for-ukraine-logo" width={228} height={62} />
        <p className={styles.copyright}>Copyright © {new Date().getFullYear()} Genesis</p>
      </div>
      <div className={styles.contactsWrapper}>
        <div className={styles.contacts}>
          <Title className={styles.contractsTitle}>
            Контакти
          </Title>
          <a href="mailto:charity.fund@gen.tech" className={styles.email}>charity.fund@gen.tech</a>
        </div>
        <div className={styles.buttons}>
          <Button className={styles.button} variant="secondary" onClick={onScroll}>Отримати допомогу</Button>
          <Button className={styles.button} variant="secondary" onClick={onOpenModal}>Зробити внесок</Button>
        </div>
      </div>
      <div className={styles.policies}>
        <ul className={styles.list}>
          <li className={styles.listItem}><Link to={ROUTES.TERMS} className={styles.text}>
            Правила використання
          </Link></li>
          <li className={styles.listItem}><Link to={ROUTES.POLICY} className={styles.text}>
            Політика конфіденційності
          </Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterDesktop;
