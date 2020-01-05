import { KEYS } from './../../_service/Keys';
import { PostCustomerBase } from './PostCustomerBase';
export class PostSurveyBase extends PostCustomerBase {
  constructor(
    public ORDER_NUM: string,
  ) {
    super();
    this.CUSTOMER_ID = Number(localStorage.getItem(KEYS.CUSTOMER_ID));
  }
  CUSTOMER_ID: number;
}
