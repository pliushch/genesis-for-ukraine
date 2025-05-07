import React from 'react';
import styles from './Radio.module.scss';
import cn from 'classnames';

type InputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ className = '', label, id, checked, ...otherProps }: InputProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <input id={id} type="radio" className={styles.input} {...otherProps} checked={checked} />
      {!!label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default React.memo(Radio);
