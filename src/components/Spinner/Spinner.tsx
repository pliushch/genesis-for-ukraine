import React from 'react';
import styles from './Spinner.module.scss';
import cn from 'classnames';

type SpinnerProps = {
  className?: string;
};

const Spinner = ({ className = '' }: SpinnerProps) => (
  <div className={cn(styles.loader, className)} />
);

export default Spinner;
