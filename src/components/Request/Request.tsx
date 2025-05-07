import React from 'react';
import styles from './Request.module.scss';
import Title from '../Title';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/constants';

type RequestProps = {
  className?: string;
}

const Request = ({ className = '' }: RequestProps) => {
  return (
    <div id="request" className={cn(styles.wrapper, className)}>
      <Title className={styles.title}>
        Тобі чи твоїм рідним потрібна допомога?{' '}
        <Link to={ROUTES.FORM} className={styles.highlight}>Заповни заявку!</Link>
      </Title>
      <div className={styles.content}>
        <p className={styles.description}>Система адресної допомоги унікальна для кожного бізнесу
          екосистеми Genesis та партнерських компаній.
          <br />
          <br />
          Щоб отримати деталі — звернися до свого HR.</p>
        <Link to={ROUTES.FORM} className={styles.button}>
          Заповнити заявку
        </Link>
      </div>
    </div>
  );
};

export default Request;
