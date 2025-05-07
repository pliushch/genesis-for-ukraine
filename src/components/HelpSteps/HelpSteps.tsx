import React from 'react';
import styles from './HelpSteps.module.scss';
import Title from '../Title';
import cn from 'classnames';

type HelpStepsProps = {
  className?: string;
}

const HelpSteps = ({ className = '' }: HelpStepsProps) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Title className={styles.title}>Як отримати допомогу <br />
        від Genesis for Ukraine?</Title>
      <ol className={styles.list}>
        <li className={styles.listItem}><span className={styles.listNumeric}>1.</span>Заповнити заявку на сайті</li>
        <li className={styles.listItem}><span className={styles.listNumeric}>2.</span>Дочекатися відповіді — протягом 24
          годин
          у будні команда фонду надішле відповідь
        </li>
        <li className={styles.listItem}><span className={styles.listNumeric}>3.</span>Узгодити пакет документів</li>
        <li className={styles.listItem}><span className={styles.listNumeric}>4.</span>Отримати допомогу</li>
      </ol>
    </div>
  );
};

export default HelpSteps;
