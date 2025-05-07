import React, { FunctionComponent } from 'react';
import styles from './Company.module.scss';
import cn from 'classnames';
import HexagonComponent from 'src/components/Gathering/HexagonComponent';

type CompanyProps = {
  Logo: FunctionComponent;
  paymentLink: string;
  code: string;
  variant: 'light' | 'grey';
  bgPosition: 'left' | 'right';
  name: string;
  amount: number;
};

const CompanyMemo = ({
  Logo,
  paymentLink,
  code,
  variant,
  bgPosition,
  name,
  amount,
}: CompanyProps) => {
  const backgroundClasses = cn({
    [styles.companyWrapperLight]: variant === 'light',
    [styles.companyWrapperGrey]: variant === 'grey',
    [styles.companyWrapperGreyLeft]: variant === 'grey' && bgPosition === 'left',
    [styles.companyWrapperGreyRight]: variant === 'grey' && bgPosition === 'right',
  });

  return (
    <div className={backgroundClasses}>
      <div className={styles.companyAction}>
        <div className={styles.companyLogo}>
          <Logo data-name={name} />
        </div>
      </div>
      <HexagonComponent
        variant="companyAmount"
        type={variant}
        className={styles.hexagonWrapper}
        amount={amount}
      />
    </div>
  );
};

export default React.memo(CompanyMemo);
