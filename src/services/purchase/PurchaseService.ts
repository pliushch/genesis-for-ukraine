import { BaseService } from '../BaseService';
import { convertAmount } from 'src/utils/convertAmount';
import { ProductName } from 'src/components/ProjectForm/ProjectForm';
import { apiUrl } from 'src/contexts';

export type PaymentDescriptionDTO = {
  cardPaymentUrl: {
    merchant: string;
    paymentIntent: string;
    signature: string;
  };
};

export type UserDTO = {
  type: string;
  description: string;
  contacts: string;
  files: string[];
  issuer: {
    name: string;
    email: string;
    project: string;
    phone_number: string;
    telegram_id: string;
  };
  receiver: {
    type: string;
    name: string;
    contacts: string;
    location: string;
  };
};

export class PurchaseService extends BaseService {
  async donationOneTime(project: string, amount: number | string): Promise<PaymentDescriptionDTO> {
    const paymentsData = await this.httpClient.post('/donations/one-time', {
      project,
      amount: convertAmount(amount),
      currency: 'UAH',
    });

    return {
      cardPaymentUrl: {
        merchant: paymentsData.merchant,
        paymentIntent: paymentsData.paymentIntent,
        signature: paymentsData.signature,
      },
    };
  }

  async subscriptionDonation(
    project: string,
    product: ProductName,
  ): Promise<PaymentDescriptionDTO> {
    const paymentsData = await this.httpClient.post('/donations/subscription', {
      project,
      product,
    });

    return {
      cardPaymentUrl: {
        merchant: paymentsData.merchant,
        paymentIntent: paymentsData.paymentIntent,
        signature: paymentsData.signature,
      },
    };
  }

  async helps(userData: UserDTO): Promise<{ success: boolean }> {
    const data = await this.httpClient.post('/help-requests', userData);
    return data;
  }

  async uploadFiles(files: Array<File>): Promise<Array<{ url: string }>> {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    const response = await fetch(`${apiUrl}/files/upload`, {
      method: 'post',
      body: formData,
    });

    const { data } = await response.json();

    return data;
  }
}
