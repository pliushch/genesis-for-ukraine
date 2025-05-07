import React from 'react';
import styles from './Subscription.module.scss';
import Title from 'src/components/Title';
import Button from 'src/components/Button';
import { ReactComponent as Heart } from 'src/assets/images/heart.svg';
import Radio from 'src/components/Radio';
import { ProductName, Subscriptions } from '../ProjectForm';
import Input from 'src/components/Input';

type EmailProps = {
  onSubmit: () => void;
  onSubscriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subscription: string;
  payment: string;
  onPaymentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onProductNameChange: (e: React.ChangeEvent<HTMLInputElement>, label: string) => void;
  productName: ProductName,
};

const Subscription = ({
  onSubmit,
  onSubscriptionChange,
  subscription,
  onPaymentChange,
  payment,
  onProductNameChange,
  productName,
}: EmailProps) => {
  return (
    <>
      <Heart title="email" className={styles.icon} />
      <Title className={styles.title}>Оберіть спосіб допомоги</Title>
      <Radio
        label="Одноразовий платіж"
        id={Subscriptions.ONE_TIME}
        name="subscription"
        value={Subscriptions.ONE_TIME}
        onChange={onSubscriptionChange}
        checked={subscription === Subscriptions.ONE_TIME}
        className={styles.radio}
      />
      <Radio
        label="Щомісячний платіж"
        id={Subscriptions.SUBSCRIPTION}
        name="subscription"
        value={Subscriptions.SUBSCRIPTION}
        onChange={onSubscriptionChange}
        checked={subscription === Subscriptions.SUBSCRIPTION}
        className={styles.radio}
      />
      {subscription === Subscriptions.ONE_TIME ? (
        <div className={styles.payment}>
          <p className={styles.text}>Оберіть суму допомоги</p>
          <Input value={payment} onChange={onPaymentChange} type="number" />
        </div>
      ) : (
        <div className={styles.payment}>
          <p className={styles.text}>Оберіть суму допомоги</p>
          <Radio
            label="1,000 ₴/міс"
            id="one"
            name="payment"
            value={ProductName.ONE}
            onChange={(e) => onProductNameChange(e, '1000')}
            checked={productName === ProductName.ONE}
            className={styles.radio}
          />
          <Radio
            label="3,000 ₴/міс"
            id="three"
            name="payment"
            value={ProductName.THREE}
            onChange={(e) => onProductNameChange(e, '3000')}            checked={productName === ProductName.THREE}
            className={styles.radio}
          />
          <Radio
            label="5,000 ₴/міс"
            id="five"
            name="payment"
            value={ProductName.FIVE}
            onChange={(e) => onProductNameChange(e, '5000')}            checked={productName === ProductName.FIVE}
            className={styles.radio}
          />
          <Radio
            label="10,000 ₴/міс"
            id="ten"
            name="payment"
            value={ProductName.TEN}
            onChange={(e) => onProductNameChange(e, '10000')}            checked={productName === ProductName.TEN}
            className={styles.radio}
          />
        </div>
      )}
      <Button disabled={subscription === Subscriptions.ONE_TIME && !payment} onClick={onSubmit} className={styles.button} variant="secondary">
        Підтвердити
      </Button>
    </>
  );
};

export default Subscription;
