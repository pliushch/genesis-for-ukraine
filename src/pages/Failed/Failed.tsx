import React from 'react';
import styles from './Failed.module.scss';
import { ReactComponent as Error } from 'src/assets/images/error.svg';
import Title from 'src/components/Title';
import Button from 'src/components/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/constants';

const Failed = () => {
  const navigation = useNavigate();
  const onFinished = () => navigation(ROUTES.MAIN);
  const onTryAgain = () => navigation(ROUTES.FORM);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Error title="succeed" className={styles.error} />
        <Title className={styles.title}>Помилка</Title>
        <p className={styles.text}>Заповніть заявку ще раз або спробуйте
                                   пізніше</p>
        <div className={styles.buttonsBlock}>
          <Button
            className={styles.buttonAgain} variant="secondary"
            onClick={onTryAgain}
          >
            Заповнити ще раз
          </Button>
          <Button className={styles.button} onClick={onFinished}>
            Пізніше
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Failed;
