import { PostAPIBase } from './PostApiBase';

export class PostOrderBase extends PostAPIBase {
  constructor(
    public ORDER_NUM: string,
    public BUFFER_SIZE = 0
  ) {
    super();
  }
}
