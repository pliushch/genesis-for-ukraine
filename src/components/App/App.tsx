import React from 'react';
import { Route, HashRouter as Routes } from 'react-router-dom';
import Main from 'src/pages/Main';
import { ROUTES } from 'src/constants';
import Form from 'src/pages/Form';
import Failed from 'src/pages/Failed';
import Success from 'src/pages/Success';
import { useApp } from 'src/hooks/useApp';
import { ServicesContext } from 'src/contexts/ServicesContext';
import Spinner from '../Spinner';
import styles from './App.module.scss';
import Terms from 'src/pages/Terms';
import Policy from 'src/pages/Policy';

const App = () => {
  const { isAppLoaded, services } = useApp();

  if (!isAppLoaded || !services) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <ServicesContext.Provider value={services}>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.FORM} element={<Form />} />
        <Route path={ROUTES.FAILED} element={<Failed />} />
        <Route path={ROUTES.SUCCESS} element={<Success />} />
        <Route path={ROUTES.TERMS} element={<Terms />} />
        <Route path={ROUTES.POLICY} element={<Policy />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </ServicesContext.Provider>
  );
};

export default App;
