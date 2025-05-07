import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button';
import cn from 'classnames';

type HeaderProps = {
  onScroll: () => void;
  onOpenModal: () => void;
};

const Header = ({ onScroll, onOpenModal }: HeaderProps) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>Genesis for Ukraine</h1>
        <p className={styles.subtitle}>Благодійний фонд кофаундингової ІТ-компанії Genesis</p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={onScroll} className={cn(styles.button, styles.buttonHelp)}>
          Отримати допомогу
        </Button>
        <Button className={styles.button} onClick={onOpenModal}>
          Зробити внесок
        </Button>
      </div>
    </header>
  );
};

export default Header;
