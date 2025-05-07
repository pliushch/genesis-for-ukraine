import { useContext } from 'react';
import { ServicesContext } from 'src/contexts';

export default function useServices() {
  return useContext(ServicesContext);
}
