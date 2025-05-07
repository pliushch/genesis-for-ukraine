import React from 'react';
import styles from './EntryScreen.module.scss';
import { ReactComponent as ComeBackAliveLogo } from 'src/assets/images/come_back_alive.svg';
import { ReactComponent as Logo } from 'src/assets/images/gathering/genesis_logo.svg';
import Collections from './Collections';

const EntryScreen = () => {
  return (
    <section className={styles.entryScreenBg}>
      <div className={styles.entryScreenWrapper}>
        <div className={styles.description}>
          <div className={styles.descriptionText}>
            <h1>ЗДІЙМЕМО РОКІТ</h1>
            <h3>Укомплектували чотири бригади Сил ТрО засобами аеророзвідки</h3>
          </div>
          <div className={styles.logosWrapper}>
            <a href='https://savelife.in.ua/' target='_blank' rel="noreferrer">
              <ComeBackAliveLogo name='come_back_alive' title='come_back_alive' width='176px' height='88px' />
            </a>
            <a href='https://www.gen.tech/' target='_blank' rel="noreferrer">
              <Logo name='genesis' title='genesis' className={styles.logo} width='130px' height='55px' />
            </a>
          </div>
        </div>
      </div>
      <Collections />
    </section>
  );
};

export default EntryScreen;