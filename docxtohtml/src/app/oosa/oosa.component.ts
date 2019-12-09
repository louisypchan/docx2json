import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OOSA} from '../_model/OOSA';
import {SurveyService} from '../_service/survey.service';

@Component({
  selector: 'app-oosa',
  templateUrl: './oosa.component.html',
  styleUrls: ['./oosa.component.scss']
})
export class OosaComponent implements OnInit {
  step: number;
  @Input() last: boolean;
  @Output() done = new EventEmitter<OOSA>();

  constructor(public surveyService: SurveyService) { }

  ngOnInit() {
    this.step = 0;
    this.surveyService.oosa = {
      gas: {
        oil: '',
        oil_desc: '',
        pipelines: '',
        pipelines_desc: ''
      },
      mine: {
        activity: '',
        activity_desc: '',
        abandonedActivity: '',
        abandonedActivity_desc: '',
        number: '',
        type: ''
      }
    };
  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  clearAbandonActivity() {
    this.surveyService.oosa.mine.abandonedActivity_desc = '';
    this.surveyService.oosa.mine.number = '';
    this.surveyService.oosa.mine.type = '';
  }

  onNumberChange(val: string) {
    this.surveyService.oosa.mine.number = val;
  }

  onTypeChange(val: string) {
    this.surveyService.oosa.mine.type = val;
  }

  handover() {
    this.done.emit(this.surveyService.oosa);
  }
}
