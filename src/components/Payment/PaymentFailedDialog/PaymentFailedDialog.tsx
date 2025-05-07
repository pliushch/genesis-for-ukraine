import React from 'react';
import Modal from 'src/components/Modal';
import { ReactComponent as CrossIcon } from 'src/assets/images/close.svg';
import styles from './PaymentFailedDialog.module.scss';
import PaymentFailedDialogContent from '../PaymentFailedDialogContent';

export type PaymentFailedDialogProps = {
  onClose?: () => void;
  onTryAgain?: () => void;
};

const PaymentFailedDialog = ({ onClose = () => {}, onTryAgain }: PaymentFailedDialogProps) => (
  <Modal onClose={onClose}>
    <div className={styles.wrapper}>
      <div role="button" onClick={onClose} className={styles.controlWrapper}>
        <CrossIcon className={styles.control} />
      </div>
      <PaymentFailedDialogContent onTryAgain={onTryAgain} />
    </div>
  </Modal>
);

export default PaymentFailedDialog;
