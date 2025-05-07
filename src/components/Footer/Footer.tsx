import React from 'react';
import styles from './Footer.module.scss';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

type FooterProps = {
  onScroll: () => void;
  onOpenModal: () => void;
};

const Footer = ({ onScroll, onOpenModal }: FooterProps) => {
  return (
    <>
      <div className={styles.mobile}>
        <FooterMobile />
      </div>
      <div className={styles.desktop}>
        <FooterDesktop onScroll={onScroll} onOpenModal={onOpenModal} />
      </div>
    </>
  );
};

export default Footer;
