import React from 'react';
import styles from './Goal.module.scss';

const Goal = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Наша мета</h2>
      <p className={styles.description}>
        Щорічно збирати 5+ млн грн <br />
        для забезпечення колег та їхніх <br />
        рідних у війську засобами, які <br />
        допоможуть зберегти їхні життя <br />
      </p>
      <p className={styles.descriptionDesktop}>
        Щорічно збирати 5+ млн грн для забезпечення колег <br />
        та їхніх рідних у війську засобами, які допоможуть <br />
        зберегти їхні життя
      </p>
    </div>
  );
};

export default Goal;
