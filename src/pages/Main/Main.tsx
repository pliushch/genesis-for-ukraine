import React, { useState } from 'react';
import Header from 'src/components/Header';
import AboutFund from 'src/components/AboutFund';
import Helps from 'src/components/Helps';
import styles from './Main.module.scss';
import Request from 'src/components/Request';
import Footer from 'src/components/Footer';
import { scrollToBlock } from 'src/utils/scroll';
import ProjectForm from 'src/components/ProjectForm';
import HelpSteps from 'src/components/HelpSteps';
import Goal from 'src/components/Goal';
import HelpsImage from 'src/components/HelpsImage';
import HelpsStatistic from 'src/components/HelpsStatistic';
import FixedButtons from 'src/components/FixedButtons';

const Main = () => {
  const scroll = () => {
    scrollToBlock('request');
  };

  const [isModalShow, setModalShow] = useState(false);

  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);

  return (
    <div className={styles.wrapper}>
      <Header onScroll={scroll} onOpenModal={openModal} />
      <AboutFund />
      <Goal />
      <HelpSteps />
      <div className={styles.requestWrapper}>
        <Request className={styles.request} />
      </div>
      <Helps className={styles.helpsWrapper} />
      <HelpsStatistic />
      <HelpsImage />
      <Footer onScroll={scroll} onOpenModal={openModal} />
      <FixedButtons onScroll={scroll} onOpenModal={openModal} />
      {isModalShow && <ProjectForm onCloseModal={closeModal} />}
    </div>
  );
};

export default Main;
