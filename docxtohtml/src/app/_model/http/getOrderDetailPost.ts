import { PostOrderBase } from './PostOrderBase';

export class GetOrderDetailPost extends PostOrderBase {
  constructor(
    public ORDER_NUM: string,
  ) {
    super(ORDER_NUM);
    this.PROCEDURE = 'getorderdetail';
  }
}
