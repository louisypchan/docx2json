import { KEYS } from './../../_service/Keys';
import { PostAPIBase } from './PostApiBase';

export class PostCustomerBase extends PostAPIBase {
  constructor() {
    super();
    this.CUSTOMER_ID = Number(localStorage.getItem(KEYS.CUSTOMER_ID));
  }
  CUSTOMER_ID: number;
}
