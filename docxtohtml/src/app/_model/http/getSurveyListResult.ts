import { SurveyObject } from './surveyObject';

export interface SURVEYLIST {
  SURVEY_ID: number;
  SURVEY_URL: string;
  SURVEY_TITLE: string;
  SURVEY_JSON: string;
  SURVEY_OBJECT: SurveyObject;
}

export interface GetSurveyListResult {
  ORDER_NUM: string;
  ADDRESS: string;
  CITY: string;
  PROVSTATE: string;
  POSTAL_CODE: string;
  FULL_ADDRESS: string;
  PROJECT_NUM: string;
  SITE_NAME: string;
  SESSION_ID: string;
  RESPONSE_MSG: string;
  ERRORCODE: string;
  SURVEY_LIST: SURVEYLIST[];
}
