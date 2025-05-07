import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { initServices, Services } from 'src/contexts';

export const useApp = () => {
  const location = useLocation();
  const [appServices, setAppServices] = useState<Services>();
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    async function fetchServices() {
      const services = await initServices();
      setAppServices(services);
      setIsAppLoaded(true);
    }

    fetchServices();
  }, []);

  return {
    services: appServices,
    isAppLoaded,
  };
};
