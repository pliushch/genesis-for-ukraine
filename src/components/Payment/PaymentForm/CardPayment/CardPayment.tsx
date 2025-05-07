import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { PaymentOrderDescription, PaymentOrderStatus } from 'src/types';
import { PaymentForm, MessageEventData } from './types';
import styles from './CardPayment.module.scss';

export type CardPaymentProps = {
  formMerchantData: unknown;
  className?: string;
  onOrderDeclined: (declineData: unknown) => void;
  onOrderStartProcessing: () => void;
  onOrderApproved: (orderData: PaymentOrderDescription) => void;
};

const CardPayment = (props: CardPaymentProps) => {
  const { className, formMerchantData, onOrderApproved, onOrderDeclined } = props;

  const [form, setForm] = useState<PaymentForm | null>();

  useEffect(() => {
    if (!form && formMerchantData) {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      const paymentForm = PaymentFormSdk.init({
        merchantData: formMerchantData,
        formParams: {
          cardBrands: ['visa', 'mastercard', 'maestro', 'american-express'],
        },
      });
      setForm(paymentForm);
    }
  }, [formMerchantData, form]);

  useEffect(() => {
    const listener = (event: MessageEvent<MessageEventData>) => {
      if (!event) {
        return;
      }

      if (event.data.type !== 'orderStatus') {
        return;
      }

      const { order } = event.data.response;
      switch (order.status) {
        case PaymentOrderStatus.APPROVED:
        case PaymentOrderStatus.REFUNDED:
          onOrderApproved(order);
          break;
        case PaymentOrderStatus.DECLINED:
          onOrderDeclined(event.data.response);
          break;
      }
    };

    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    };
  }, [formMerchantData, onOrderApproved, onOrderDeclined]);

  return <div id="solid-payment-form-container" className={cn(styles.root, className)} />;
};

export default CardPayment;
