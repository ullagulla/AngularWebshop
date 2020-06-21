import OrderRow from './OrderRow';

export default class Order {
  id: number;
  companyId: 8008;
  // created: Date;
  customer: {
    firstname: string,
    lastname: string,
    address: {
      street: string,
      zip: string,
      city: string,
    },
  }
  paymentmethod: string;
  totalPrice: number;
  products: OrderRow[]
}
