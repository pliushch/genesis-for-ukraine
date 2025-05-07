import React from 'react';
import Button from '../Button';
import styles from './FixedButtons.module.scss';
import cn from 'classnames';

type FixedButtonsProps = {
  onScroll: () => void;
  onOpenModal: () => void;
}

const FixedButtons = ({ onScroll, onOpenModal }: FixedButtonsProps) => (
  <ul className={styles.list}>
    <li className={styles.listItem}>
      <Button onClick={onScroll} variant="primary" className={styles.button}>
        Отримати допомогу
      </Button>
    </li>
    <li className={styles.listItem}>
      <Button onClick={onOpenModal} variant="secondary" className={cn(styles.button, styles.secondary)}>
        Зробити внесок
      </Button>
    </li>
  </ul>
);

export default FixedButtons;
