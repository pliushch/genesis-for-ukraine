import React from 'react';
import styles from './Success.module.scss';
import { ReactComponent as Succeed } from 'src/assets/images/succeed.svg';
import { ReactComponent as Warning } from 'src/assets/images/warning.svg';
import Title from 'src/components/Title';
import Button from 'src/components/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/constants';

const Success = () => {
  const navigation = useNavigate();
  const onClick = () => navigation(ROUTES.MAIN);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <Succeed title="succeed" className={styles.succeed} />
          <Title className={styles.title}>Заявку прийнято</Title>
          <p className={styles.subtitle}>
            Найближчим часом ми її опрацюємо та візьмемо в роботу або зв’яжемось для уточнення
            деталей
          </p>
        </div>
        <div className={styles.block}>
          <div className={styles.card}>
            <Warning className={styles.warning} title="warning" />
            <p className={styles.text}>
              В пріоритеті — заявки для наших співробітників та тих, хто знаходиться в гарячих
              точках.
            </p>
          </div>
          <Button className={styles.button} variant="secondary" onClick={onClick}>
            Зрозуміло
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
