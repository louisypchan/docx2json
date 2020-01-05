import { GetSurveyListResult } from './../_model/http/getSurveyListResult';
import { GetMobileSurveyInfoResult } from './../_model/http/getMobileSurveyInfoResult';
import { GetMobileSurveyInfoPost } from './../_model/http/getMobileSurveyInfoPost';
import { GetOrderDetailResult } from './../_model/http/getOrderDetailResult';
import { GetOrderDetailPost } from './../_model/http/getOrderDetailPost';
import { GetSurveyListPost } from './../_model/http/getSurveyListPost';
import { GetOrderListResult, ORDER } from './../_model/http/getOrderListResult';
import { GetOrderListPost } from './../_model/http/getOrderListPost';
import { KEYS } from './Keys';
import { CustomerLoginResult } from './../_model/http/loginResult';
import { CustomerLogin } from './../_model/http/login';
import { Section } from './../_model/Section';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resp } from '../_model/Resp';
import { environment } from '../../environments/environment';
import { GSI } from '../_model/GSI';
import { NSC } from '../_model/NSC';
import { SOTP } from '../_model/SOTP';
import { SS } from '../_model/SS';
import { MUAS } from '../_model/MUAS';
import { WASTE } from '../_model/WASTE';
import { OOSA } from '../_model/OOSA';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private _auth: CustomerLoginResult;


  public options: Section[];

  public selectedSurvey: Section[];

  public resp: Resp;
  public gsi: GSI;
  public nsc: NSC;
  public sotp: SOTP;
  public ss: SS;
  public muas: MUAS;
  public waste: WASTE;
  public oosa: OOSA;

  constructor(private http: HttpClient) {
    this.options = [
      { name: 'General Site Information', checked: true, show: false, order: 1 },
      { name: 'Natural Site Characteristics', checked: true, show: false, order: 2 },
      { name: 'Structures on the Property', checked: true, show: false, order: 3 },
      { name: 'Site Services', checked: true, show: false, order: 4 },
      { name: 'Materials Used and Stored', checked: true, show: false, order: 5 },
      { name: 'Wastes', checked: true, show: false, order: 6 },
      { name: 'Other On-site Activities', checked: true, show: false, order: 7 },
    ];
    this.selectedSurvey = [];
  }

  get apiUrl() {
    return `${environment.api.hostName}${environment.api.callOra}`;
  }

  login(userName: string, password: string) {
    const data: CustomerLogin = {
      USERNAME: userName,
      PASSWORD: password,
      PROCEDURE: 'customerlogin'
    };
    return this.callAPI<CustomerLoginResult>(data);
  }


  getSessionId() {
    return localStorage.getItem(KEYS.SESSION_ID);
  }

  get isAuthentication() {
    const isAuth = !!this.getSessionId();
    return isAuth;
  }


  public get auth(): CustomerLoginResult {
    if (!this._auth && this.isAuthentication) {
      this._auth = JSON.parse(localStorage.getItem(KEYS.LOGIN_USER));
    }
    return this._auth;
  }
  public set auth(value: CustomerLoginResult) {
    this._auth = value;
    localStorage.setItem(KEYS.LOGIN_USER, JSON.stringify(this.auth));
    localStorage.setItem(KEYS.CUSTOMER_ID, this._auth.CUSTOMER_ID.toString());
    localStorage.setItem(KEYS.SESSION_ID, this.auth.SESSION_ID);
  }

  getOrderList() {
    const data = new GetOrderListPost();
    return this.callAPI<GetOrderListResult>(data);
  }


  getOrderDetail(order: ORDER) {
    const data = new GetOrderDetailPost(order.ORDER_NUM);
    return this.callAPI<GetOrderDetailResult>(data);
  }

  getMobileSurveyInfo(order: ORDER) {
    const data = new GetMobileSurveyInfoPost(order.ORDER_NUM);
    return this.callAPI<GetMobileSurveyInfoResult>(data);
  }


  getSurveyList(order: ORDER) {
    const data = new GetSurveyListPost(order.ORDER_NUM);
    return this.callAPI<GetSurveyListResult>(data);
  }

  getSurveyListByOrderNum(orderNum: string) {
    const data = new GetSurveyListPost(orderNum);
    return this.callAPI<GetSurveyListResult>(data);
  }

  getSurveyObject(data: GetSurveyListResult) {
    if (!data.SURVEY_LIST) {
      return data;
    }
    data.SURVEY_LIST.forEach(survey => {
      if (survey.SURVEY_JSON) {
        let obj = JSON.parse(survey.SURVEY_JSON + '');
        if (typeof obj === 'string') {
          obj = JSON.parse(obj);
        }
        survey.SURVEY_OBJECT = {
          selectedSurvey: [].concat(obj.selecteditems || []),
          gsi: obj.gsi || {},
          nsc: obj.nsc || {},
          sotp: obj.sotp || {},
          ss: obj.ss || {},
          muas: obj.muas || {},
          waste: obj.waste || {},
          oosa: obj.oosa || {},
        };
      }
    });
    return data;
  }

  async callAPI<T>(data: any) {
    return this.awaitWrap<T, any>(this.http.post<T>(this.apiUrl, data).toPromise());
  }

  async awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {
    return promise
      .then<[null, T]>((data: T) => [null, data])
      .catch<[U, null]>(err => [err, null]);
  }

  //
  // getData(): Observable<Resp> {
  //   return this.http.post<Resp>(environment.api.callOra, {PROCEDURE: 'getmobilesurveyinfo',
  //     ORDER_NUM: '20181031078', SESSION_ID: 'LFQxUqXiHddIekpKEntsFKXEQotDHjJVWPpZPNDBZafGVxXZuE'}, {
  //     headers: new HttpHeaders({'Content-Type':  'application/json'}),
  //     responseType: 'json'
  //   });
  // }
}
