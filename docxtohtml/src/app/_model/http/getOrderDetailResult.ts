export interface ORDERGEOMETRY {
  LON: number;
  LAT: number;
}

export interface CENTERPOINT {
  LON: number;
  LAT: number;
}

export interface ORDERPOINT {
  ID: number;
  DS_OID: number;
  SOURCE: string;
  COMPANY_NAME: string;
  ADDRESS: string;
  CITY: string;
  X: number;
  Y: number;
  ON_SITE: string;
  MAP_KEY_LOC: string;
  MAP_KEY_NO?: any;
  DISTANCE?: any;
  DISTANCE_MILES?: any;
  DIRECTION: string;
  ELEV_METERS?: any;
  ELEV_FEET?: any;
  ELEV_METERS_DIF: number;
  ELEV_FEET_DIF: number;
  MAP_KEY_NO_TOT?: any;
  REPORT_EXTRA: any[];
}

export interface GetOrderDetailResult {
  ORDER_NUM: string;
  FULL_ADDRESS: string;
  SITE_NAME: string;
  COUNTRY: string;
  SESSION_ID: string;
  RESPONSE_MSG: string;
  ERRORCODE: string;
  BUFFER_SIZE: number;
  UNIT: string;
  ORDER_GEOMETRY: ORDERGEOMETRY[];
  GEOMETRY_TYPE: string;
  CENTER_POINT: CENTERPOINT[];
  ORDER_POINTS: ORDERPOINT[];
  ORDER_PARCELS: any[];
}
