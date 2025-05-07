import React from 'react';
import styles from './Companies.module.scss';
import honeyCombs from 'src/assets/images/companies/honeycombs.png';
import { companiesLinks, companiesMobileLinks } from './const';
import Company from './Company';
import cn from 'classnames';

const Companies = () => {
  const mobileClasses = cn({
    [styles.companiesWrapper]: true,
    [styles.companiesMobile]: true,
  });

  const desktopClasses = cn({
    [styles.companiesWrapper]: true,
    [styles.companiesDesktop]: true,
  });
  return (
    <section className={styles.wrapper}>
      <img src={honeyCombs} className={styles.honeyCombs} alt="the combs of honey" />
      <div className={styles.aboutCompanies} id="companies">
        <h2>Компанії, які здійняли рокіт</h2>
        <p>
          Ось компанії екосистеми Genesis та її партнери, які разом зі співробітниками долучилися до
          збору.
        </p>
      </div>

      <div className={desktopClasses}>
        {companiesLinks.map(({ logo, paymentLink, code, name, variant, bgPosition, amount }) => (
          <Company
            name={name}
            key={name}
            Logo={logo}
            paymentLink={paymentLink}
            code={code}
            variant={variant}
            bgPosition={bgPosition}
            amount={amount}
          />
        ))}
      </div>
      <div className={mobileClasses}>
        {companiesMobileLinks.map(({ logo, code, paymentLink, name, variant, bgPosition, amount }) => (
          <Company
            name={name}
            key={name}
            Logo={logo}
            paymentLink={paymentLink}
            code={code}
            variant={variant}
            bgPosition={bgPosition}
            amount={amount}
          />
        ))}
      </div>
    </section>
  );
};

export default Companies;
