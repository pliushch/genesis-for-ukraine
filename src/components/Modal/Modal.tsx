import React from 'react';
import styles from './Modal.module.scss';
import { ReactComponent as Close } from 'src/assets/images/close.svg';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Close onClick={onClose} role="button" title="close" className={styles.close} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
