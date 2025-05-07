import { createContext } from 'react';
import { PurchaseService } from 'src/services/purchase';
import HttpClient from 'src/services/HttpClient';
import { RokitService } from '../services/rokit';

export interface Services {
  purchaseService: PurchaseService;
  rokitService: RokitService;
}

export const apiUrl = 'https://api.genesis-for-ukraine.com'

export const initServices = async (): Promise<Services> => {
  const httpClient = new HttpClient(apiUrl);
  const purchaseService = new PurchaseService(httpClient);
  const rokitService = new RokitService(httpClient)
  return {
    purchaseService,
    rokitService,
  };
};

export const ServicesContext = createContext<Services>(undefined!);
