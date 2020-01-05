import { PostCustomerBase } from './PostCustomerBase';

export class GetOrderListPost extends PostCustomerBase {
  constructor() {
    super();
    this.PROCEDURE = 'getorderlist';
  }
  KEYWORD = '';
}
