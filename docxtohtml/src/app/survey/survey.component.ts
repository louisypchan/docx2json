import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../_service/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  showOptions = true;

  constructor(public surveyService: SurveyService) { }

  ngOnInit() {
    console.log(this.surveyService);
  }

  pickUpSurvey(index: number) {
    const idx = this.surveyService.selectedSurvey.findIndex(s => s.name === this.surveyService.options[index].name);
    if (idx > -1) {
      this.surveyService.options[index].checked = false;
      this.surveyService.selectedSurvey.splice(idx, 1);
    } else {
      this.surveyService.options[index].checked = true;
      this.surveyService.selectedSurvey.push(this.surveyService.options[index]);
    }
  }

  nextToSelectedSections() {
    if (this.surveyService.selectedSurvey.length > 0) {
      this.showOptions = false;
      // show first section
      this.surveyService.selectedSurvey[0].show = true;
    }
  }
}
