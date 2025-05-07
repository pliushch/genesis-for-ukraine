import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

type ColorVariants = 'primary' | 'secondary' | 'primary-outline' | 'light-outline' | 'gathering-outline-light';
type ButtonProps = {
  variant?: ColorVariants;
  icon?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...otherProps
}: ButtonProps) => {
  const buttonClasses = cn({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.primaryOutline]: variant === 'primary-outline',
    [styles.lightOutline]: variant === 'light-outline',
    [styles.gatheringOutLineLight]: variant === 'gathering-outline-light',
    [className]: !!className,
  });

  return (
    <button type={type} className={buttonClasses} {...otherProps} >
      {children}
    </button>
  );
};

export default Button;
