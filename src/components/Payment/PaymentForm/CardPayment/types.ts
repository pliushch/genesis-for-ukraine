import { PaymentOrderDescription } from 'src/types';

export type OrderResponse = {
  order: PaymentOrderDescription;
};

export type OrderStatusMessage = {
  type: 'orderStatus';
  response: OrderResponse;
};

export type TCardMessage = {
  type: 'card';
  card: {
    brand: string;
  };
};

export type MessageEventData = OrderStatusMessage | TCardMessage;

export interface PaymentForm {
  on(eventName: string, listener: (event: MessageEvent) => void): void;
  unsubscribe(eventName: string, listener: (event: MessageEvent) => void): void;
  unsubscribeAll(): void;
}
