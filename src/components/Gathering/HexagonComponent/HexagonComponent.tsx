import React, { useMemo } from 'react';
import styles from './HexagonComponent.module.scss';
import cn from 'classnames';

interface HexagonComponentProps {
  variant: 'allAmount' | 'companyAmount'
  type?: 'grey' | 'light'
  className: string
  amount?: number
}

const HexagonComponent = ({ variant, type, className, amount }: HexagonComponentProps) => {

  const hexagonClasses = cn({
    [styles.hexagonAllAmount]: variant === 'allAmount',
    [styles.hexagonGrey]: type === 'grey',
    [styles.hexagonLight]: type === 'light',
    [styles.hexagon]: true
  })

  const currencyClasses = cn({
    [styles.currencyAllAmount]: variant === 'allAmount',
    [styles.currencyGrey]: type === 'grey',
    [styles.currencyLight]: type === 'light',
  })

  const classesHexagonNumber = cn({
    [styles.hexagonNumber]: true,
    [styles.hexagonNumberAllAmount]: variant === 'allAmount',
    [styles.hexagonNumberGrey]: type === 'grey',
    [styles.hexagonNumberLight]: type === 'light',
    [styles.notActive]: amount === undefined
  })

 const numbers =  useMemo(()=>{
    if (amount) {
      const countDigits = Math.floor(amount).toString().split('').map(Number);

      const zerosCount = (variant === 'allAmount'  ? 8 : countDigits.length >= 8 ? 8 : 7) - countDigits.length;
      const leadingZeros = Array(zerosCount).fill(0);
      return  leadingZeros.concat(countDigits);
    } else {
      return variant === 'allAmount' ? Array(8).fill(0) : Array(7).fill(0);
    }
  },[amount, variant])

  return (
      <div  className={className}>
        {numbers.map((number, index) => (
          <div key={index}  className={hexagonClasses}>
            <p className={classesHexagonNumber}> {number} </p>
          </div>
        ))}
        <span className={currencyClasses}>₴</span>
      </div>
  );
};

export default HexagonComponent;
