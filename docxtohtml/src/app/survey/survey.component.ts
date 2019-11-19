import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SurveyService} from '../_service/survey.service';
import {Section} from '../_model/Section';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  showOptions = true;

  @ViewChild('nav') nav: ElementRef;

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
    this.surveyService.selectedSurvey.sort((a, b) => a.order - b.order);
  }

  nextToSelectedSections() {
    if (this.surveyService.selectedSurvey.length > 0) {
      this.showOptions = false;
      // show first section
      this.surveyService.selectedSurvey[0].show = true;
    }
  }

  handover(data: any, section: Section) {
    section.data = JSON.stringify(data);
    section.show = false;
    const index = this.surveyService.selectedSurvey.findIndex(s => s.name === section.name);
    this.surveyService.selectedSurvey[index] = section;
    if (this.surveyService.selectedSurvey[index + 1]) {
      this.surveyService.selectedSurvey[index + 1].show = true;
    }
  }

  switchPage(section: Section) {
    const index = this.surveyService.selectedSurvey.findIndex(s => s.name === section.name);
    this.surveyService.selectedSurvey.forEach(s => {
      s.show = false;
    });
    this.surveyService.selectedSurvey[index].show = true;
    // scroll to #TODO:
  }
}
