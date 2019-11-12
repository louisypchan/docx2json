import { Injectable } from '@angular/core';
import {Section} from '../_model/Section';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public options: Section[];

  public selectedSurvey: Section[];

  constructor() {
    this.options = [
      {name: 'General Site Information', checked: false, show: false},
      {name: 'Natural Site Characteristics', checked: false, show: false},
      {name: 'Structures on the Property', checked: false, show: false},
      {name: 'Site Service', checked: false, show: false},
      {name: 'Materials Used and Stored', checked: false, show: false},
      {name: 'Wastes', checked: false, show: false},
      {name: 'Other On-site Activities', checked: false, show: false},
    ];
    this.selectedSurvey = [];
  }
}
