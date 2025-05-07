import React from 'react';
import styles from './FooterGathering.module.scss'
import { ReactComponent as ComeBackAliveLogo } from 'src/assets/images/come_back_alive.svg';
import { ReactComponent as Logo } from 'src/assets/images/gathering/genesis_logo.svg';

const FooterGathering = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.logosWrapper}>
        <a href='https://savelife.in.ua/' target='_blank'>
          <ComeBackAliveLogo name='come_back_alive' title='come_back_alive' />
        </a>
        <a href='https://www.gen.tech/' target='_blank'>
          <Logo name='genesis' title='genesis' className={styles.logo}  />
        </a>
      </div>
    </footer>
  );
};

export default FooterGathering;