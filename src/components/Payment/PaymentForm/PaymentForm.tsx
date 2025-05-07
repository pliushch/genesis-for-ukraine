import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { PaymentDescriptionDTO } from 'src/services/purchase';
import { PaymentOrderDescription } from 'src/types';
import CardPayment from './CardPayment';
import Spinner from 'src/components/Spinner';
import PaymentFailedDialogContent from '../PaymentFailedDialogContent';
import styles from './PaymentForm.module.scss';

export type PaymentFormProps = {
  price: string;
  getPaymentUrls: () => Promise<PaymentDescriptionDTO>;
  onCardPaymentProcessing?: () => void;
  onPaymentSuccess?: (order: PaymentOrderDescription) => void;
  onPaymentFailed?: (declineData: unknown) => void;
  onPaymentRetried?: () => void;
  onPaymentProcessStateChange?: (step: PaymentProcessSteps) => void;
};

export enum PaymentProcessSteps {
  INITIAL,
  IN_PROCESS,
  FAILED,
  SUCCESS,
}

const PaymentForm = (props: PaymentFormProps) => {
  const {
    getPaymentUrls,
    onPaymentFailed,
    onPaymentSuccess,
    onCardPaymentProcessing,
    onPaymentRetried,
    onPaymentProcessStateChange,
    price,
  } = props;

  const [paymentProcessStep, setPaymentProcessStep] = useState(PaymentProcessSteps.INITIAL);

  const [formMerchantData, setFormMerchantData] = useState<unknown>();

  const changePaymentProcessStep = useCallback(
    (step: PaymentProcessSteps) => {
      setPaymentProcessStep(step);

      if (onPaymentProcessStateChange) {
        onPaymentProcessStateChange(step);
      }
    },
    [onPaymentProcessStateChange],
  );

  const clearState = useCallback(() => {
    changePaymentProcessStep(PaymentProcessSteps.INITIAL);
    setFormMerchantData(undefined);
  }, [changePaymentProcessStep]);

  const onOrderDeclined = useCallback(
    (declineData: unknown) => {
      changePaymentProcessStep(PaymentProcessSteps.FAILED);
      if (onPaymentFailed) {
        onPaymentFailed(declineData);
      }
    },
    [changePaymentProcessStep, onPaymentFailed],
  );

  const onOrderCardStartProcessing = useCallback(() => {
    changePaymentProcessStep(PaymentProcessSteps.IN_PROCESS);
    if (onCardPaymentProcessing) {
      onCardPaymentProcessing();
    }
  }, [changePaymentProcessStep, onCardPaymentProcessing]);

  const onOrderApproved = useCallback(
    (order: PaymentOrderDescription) => {
      changePaymentProcessStep(PaymentProcessSteps.SUCCESS);
      if (onPaymentSuccess) {
        onPaymentSuccess(order);
      }
    },
    [changePaymentProcessStep, onPaymentSuccess],
  );

  const getUrls = useCallback(async () => {
    try {
      changePaymentProcessStep(PaymentProcessSteps.IN_PROCESS);
      const urls = await getPaymentUrls();
      setFormMerchantData(urls.cardPaymentUrl);
      changePaymentProcessStep(PaymentProcessSteps.INITIAL);
    } catch (err) {
      console.error(err);
      if (onPaymentFailed) {
        onPaymentFailed(err);
      }
      changePaymentProcessStep(PaymentProcessSteps.FAILED);
    }
  }, [changePaymentProcessStep, getPaymentUrls, onPaymentFailed]);

  const tryAgain = () => {
    if (paymentProcessStep !== PaymentProcessSteps.FAILED) return;

    if (onPaymentRetried) {
      onPaymentRetried();
    }

    getUrls();
  };

  useEffect(() => {
    getUrls();
    return () => clearState();
  }, [clearState, getUrls]);

  const renderLoader = () => (
    <div className={styles.loaderWrapper}>
      <Spinner />
    </div>
  );

  const bodyClasses = cn({
    [styles.body]: true,
    [styles.bodyInProgress]: paymentProcessStep === PaymentProcessSteps.IN_PROCESS,
  });

  if (paymentProcessStep === PaymentProcessSteps.FAILED) {
    return (
      <PaymentFailedDialogContent
        className={styles.paymentFailed}
        titleClassName={styles.paymentFailedTitle}
        onTryAgain={tryAgain}
      />
    );
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.priceWrapper}>
          <span>Total:</span> <span>{price}</span>
        </div>
      </div>
      <div className={styles.bodyWrapper}>
        {paymentProcessStep === PaymentProcessSteps.IN_PROCESS && renderLoader()}
        <div className={bodyClasses}>
          <CardPayment
            formMerchantData={formMerchantData}
            onOrderDeclined={onOrderDeclined}
            onOrderStartProcessing={onOrderCardStartProcessing}
            onOrderApproved={onOrderApproved}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
