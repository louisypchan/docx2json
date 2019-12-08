import { Injectable } from '@angular/core';
import {Section} from '../_model/Section';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resp} from '../_model/Resp';
import {environment} from '../../environments/environment';
import {GSI} from '../_model/GSI';
import {NSC} from '../_model/NSC';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public options: Section[];

  public selectedSurvey: Section[];

  public resp: Resp;
  public gsi: GSI;
  public nsc: NSC;

  constructor(private http: HttpClient) {
    this.options = [
      {name: 'General Site Information', checked: true, show: false, order: 1},
      {name: 'Natural Site Characteristics', checked: true, show: false, order: 2},
      {name: 'Structures on the Property', checked: true, show: false, order: 3},
      {name: 'Site Services', checked: true, show: false, order: 4},
      {name: 'Materials Used and Stored', checked: true, show: false, order: 5},
      {name: 'Wastes', checked: true, show: false, order: 6},
      {name: 'Other On-site Activities', checked: true, show: false, order: 7},
    ];
    this.selectedSurvey = [];
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
