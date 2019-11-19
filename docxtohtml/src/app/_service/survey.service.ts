import { Injectable } from '@angular/core';
import {Section} from '../_model/Section';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resp} from '../_model/Resp';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public options: Section[];

  public selectedSurvey: Section[];

  public resp: Resp;

  constructor(private http: HttpClient) {
    this.options = [
      {name: 'General Site Information', checked: false, show: false, order: 1},
      {name: 'Natural Site Characteristics', checked: false, show: false, order: 2},
      {name: 'Structures on the Property', checked: false, show: false, order: 3},
      {name: 'Site Services', checked: false, show: false, order: 4},
      {name: 'Materials Used and Stored', checked: false, show: false, order: 5},
      {name: 'Wastes', checked: false, show: false, order: 6},
      {name: 'Other On-site Activities', checked: false, show: false, order: 7},
    ];
    this.selectedSurvey = [];
  }

  getData(): Observable<Resp> {
    return this.http.post<Resp>(`/ErisExt/emobile_test/MobileService.svc/callOra`, {PROCEDURE: 'getmobilesurveyinfo',
      ORDER_NUM: '20181031078', SESSION_ID: 'dMgFDEQnOLOlgxtlSPffBLjtLJUbkZHrGmQPkoWIrdJiPiKrxS'}, {
      headers: new HttpHeaders({'Content-Type':  'application/json'}),
      responseType: 'json'
    });
  }
}
