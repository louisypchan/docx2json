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
}
