import React from 'react';
import styles from './Helps.module.scss';
import Title from '../Title';
import cn from 'classnames';

type HelpProps = {
  className?: string;
}

const Helps = ({ className = '' }: HelpProps) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Title className={styles.title}>Підсумки адресної допомоги <br />
        від Genesis for Ukraine</Title>
      <p className={styles.date}>2022-2024 роки</p>
    </div>
  );
};

export default Helps;
