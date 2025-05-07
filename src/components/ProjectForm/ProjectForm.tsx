import React, { useCallback, useState } from 'react';
import Modal from '../Modal';
import Email from './Email';
import Subscription from './Subscription';
import useServices from 'src/hooks/useServices';
import PaymentForm from 'src/components/Payment/PaymentForm';
import { PaymentOrderDescription } from 'src/types';

type EmailProps = {
  onCloseModal: () => void;
};

enum Steps {
  EMAIL = 1,
  SUBSCRIPTION = 2,
  PAYMENT = 3,
}

export enum Subscriptions {
  ONE_TIME = 'one_time',
  SUBSCRIPTION = 'subscription',
}

export enum ProductName {
  ONE = 'UAH_1000_1m',
  THREE = 'UAH_3000_1m',
  FIVE = 'UAH_5000_1m',
  TEN = 'UAH_10000_1m',
}

const ProjectForm = ({ onCloseModal }: EmailProps) => {
  const { purchaseService } = useServices();
  const [step, setStep] = useState(Steps.EMAIL);

  const [project, setProject] = useState('');

  const projectSubmit = (data: string) => {
    setProject(data);
    window.open(`https://payment-page.solidgate.com/charity/Genesis/ZrAjPD3?traffic_source=${data}`, "_self");
  };

  const [subscription, setSubscription] = useState(Subscriptions.ONE_TIME);
  const [payment, setPayment] = useState('');
  const [productName, setProductName] = useState<{ value: ProductName; label: string }>({
    value: ProductName.ONE,
    label: '1000',
  });

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
    setProductName({ value: e.target.value as ProductName, label });
  };

  const handleSubscriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscription(e.target.value as Subscriptions);
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };

  const formSubmit = async () => {
    setStep(Steps.PAYMENT);
  };

  const getPaymentUrls = async () => {
    if (subscription === Subscriptions.ONE_TIME) {
      const res = await purchaseService.donationOneTime(project, payment);
      return res;
    }
    const res = await purchaseService.subscriptionDonation(project, productName.value);
    return res;
  };

  const paymentSucceed = useCallback((orderData: PaymentOrderDescription) => {
    console.log('success', orderData);
  }, []);

  const paymentFailed = useCallback((declineData: unknown) => {
    console.error('failed', declineData);
  }, []);

  const paymentRetried = useCallback(() => {
    console.log('paymentRetried');
  }, []);

  const cardPaymentProcessing = useCallback(() => {
    console.log('cardPaymentProcessing');
  }, []);

  const price = subscription === Subscriptions.ONE_TIME ? payment : productName.label;

  const stepsMap = {
    [Steps.EMAIL]: <Email onSubmit={projectSubmit} />,
    [Steps.SUBSCRIPTION]: (
      <Subscription
        onSubmit={formSubmit}
        onSubscriptionChange={handleSubscriptionChange}
        subscription={subscription}
        payment={payment}
        onPaymentChange={handlePaymentChange}
        onProductNameChange={handleProductNameChange}
        productName={productName.value}
      />
    ),
    [Steps.PAYMENT]: (
      <PaymentForm
        price={`₴${price}`}
        getPaymentUrls={getPaymentUrls}
        onPaymentSuccess={paymentSucceed}
        onPaymentFailed={paymentFailed}
        onPaymentRetried={paymentRetried}
        onCardPaymentProcessing={cardPaymentProcessing}
      />
    ),
  };

  return <Modal onClose={onCloseModal}>{stepsMap[step]}</Modal>;
};

export default ProjectForm;
