import { SurveyObject } from './../../_model/http/surveyObject';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-viewer',
  templateUrl: './survey-viewer.component.html',
  styleUrls: ['./survey-viewer.component.scss']
})
export class SurveyViewerComponent implements OnInit {
  @Input()
  data: SurveyObject;
  landUseOptions = ['Industrial', 'Residential', 'Federal Land', 'Commercial',
    'Transportation', 'Vacant', 'Agricultural', 'Park/Conservation Area', 'Other (please specify)'];
  constructor() { }

  ngOnInit() {
  }

}
