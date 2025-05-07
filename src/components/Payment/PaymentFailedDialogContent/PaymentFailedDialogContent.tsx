import React from 'react';
import cn from 'classnames';
import Button from 'src/components/Button';
import styles from './PaymentFailedDialogContent.module.scss';

export type PaymentFailedDialogContentProps = {
  className?: string;
  titleClassName?: string;
  onTryAgain?: () => void;
};

const PaymentFailedDialogContent = ({
  className,
  titleClassName,
  onTryAgain = () => {},
}: PaymentFailedDialogContentProps) => (
  <div className={cn(styles.root, className)}>
    <div className={cn(styles.title, titleClassName)}>Payment failed</div>
    <div className={styles.text_container}>
      <div className={styles.text}>
        Your transaction has failed due to some technical error. Please, try again.
      </div>
    </div>
    <Button className={styles.button} onClick={onTryAgain}>
      Try again
    </Button>
  </div>
);

export default PaymentFailedDialogContent;
