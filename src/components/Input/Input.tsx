import React from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

type InputProps = {
  wrapperClassName?: string;
  label?: string;
  error?: boolean;
  errorText?: string;
  errorClasses?: string
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { error, errorText, className = '', label, wrapperClassName = '', name, errorClasses = '', ...otherProps },
    ref,
  ) => {
    const inputClasses = cn({
      [styles.input]: true,
      [styles.error]: error,
      [className]: !!className,
    });

    return (
      <div className={cn(styles.container, wrapperClassName)}>
        {!!label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <input ref={ref} name={name} id={name} type="text" className={inputClasses} {...otherProps} />
        {error && <p className={cn(styles.errorText, errorClasses)}>{errorText}</p>}
      </div>
    );
  },
);

export default React.memo(Input);
