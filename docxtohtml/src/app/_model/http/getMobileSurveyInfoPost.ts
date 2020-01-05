import { PostOrderBase } from './PostOrderBase';

export class GetMobileSurveyInfoPost extends PostOrderBase {
  constructor(
    public ORDER_NUM: string,
  ) {
    super(ORDER_NUM);
    this.PROCEDURE = 'getmobilesurveyinfo';
  }
}
