import HexagonComponent from 'src/components/Gathering/HexagonComponent';
import styles from './Collection.module.scss';

const Collections = () => {
  const amount = 15553833;

  return (
    <div className={styles.collectionBg} id='collection-fixed'>
      <div className={styles.wrapper}>
        {
          amount &&
            <div className={styles.amount}>
              <h3>Здійняли рокіт разом!</h3>
              <HexagonComponent variant='allAmount' className={styles.hexagonComponent} amount={amount}/>
            </div>

        }
      </div>
    </div>
  );
};

export default Collections;
