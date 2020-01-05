export interface ORDER {
  ORDER_ID: number;
  ORDER_NUM: string;
  PROJECT_NUM: string;
  SITE_NAME: string;
  FULL_ADDRESS: string;
  COUNTRY: string;
  PREVIEW: string;
  MOBILE_CHECK_STATUS: string;
  MOBILE_ASSIGNED_USER: string;
}

export interface GetOrderListResult {
  CUSTOMER_ID: number;
  SESSION_ID: string;
  KEYWORD: string;
  RESPONSE_MSG: string;
  ERRORCODE: string;
  TOTAL: number;
  ORDERS: ORDER[];
}
