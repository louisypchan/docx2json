import { PostSurveyBase } from './PostSurveyBase';
import { PostOrderBase } from './PostOrderBase';

export class GetSurveyListPost extends PostSurveyBase {
  constructor(
    public ORDER_NUM: string,
  ) {
    super(ORDER_NUM);
    this.PROCEDURE = 'getsurveylist';
  }
}
