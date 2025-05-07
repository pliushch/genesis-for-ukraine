import React from 'react';
import styles from './TextArea.module.scss';
import cn from 'classnames';

type InputProps = {
  wrapperClassName?: string;
  label?: string;
  name?: string
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ className = '', label, name, wrapperClassName, ...otherProps }: InputProps) => {
  return (
    <div className={cn(styles.container, wrapperClassName)}>
      {!!label && <label htmlFor={name} className={styles.label}>{label}</label>}
      <textarea
        name={name}
        id={name}
        className={cn(styles.input, className)}
        {...otherProps}
      />
    </div>
  );
};

export default React.memo(TextArea);
