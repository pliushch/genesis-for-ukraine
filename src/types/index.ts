export enum PurchaseProductName {
  SOME_PRODUCT = 'some product',
}

export enum LoadingStatuses {
  IDLE = 1,
  PENDING = 2,
  FULFILLED,
  FAILED,
}

export enum PaymentOrderStatus {
  APPROVED = 'approved',
  REFUNDED = 'refunded',
  DECLINED = 'declined',
  PROCESSING = 'processing',
}

export type PaymentOrderDescription = {
  status: PaymentOrderStatus;
  order_id: string;
  amount: number;
  currency: string;
  descriptor: string;
  fraudulent: boolean;
  processing_amount: number;
  processing_currency: number;
  refunded_amount: number;
};

