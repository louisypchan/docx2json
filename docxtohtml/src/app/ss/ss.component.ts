import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SS} from '../_model/SS';
import {SurveyService} from '../_service/survey.service';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.scss']
})
export class SsComponent implements OnInit {

  ppsOptions: string[];
  indicates: string[];
  @Input() last: boolean;
  @Output() done = new EventEmitter<SS>();


  constructor(public surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.ss = {
      step: 0,
      pps: {
        options: [],
        otherOption: ''
      },
      well: {
        wwp: '',
        status: '',
        material: '',
        waterQuality: '',
        waterQuality_desc: ''
      },
      spetic: {
        spetic: '',
        speticProblem: '',
        speticProblem_desc: '',
        iosf: [],
        otherIOSF: ''
      }
    };
    this.ppsOptions = ['Natural Gas', 'Electricity', 'Telephone', 'Cable', 'Storm Sewer', 'Pipelines', 'Roadways', 'Sanitary Sewer',
    'Municipal Water', 'Entrances/Exits', 'Parking Lots', 'Rail Lines', 'Other'];
    this.indicates = ['Odors', 'Soft Ground', 'Pooling', 'Seepage', 'Other (please specify)'];
  }

  nextStep() {
    this.surveyService.ss.step++;
  }

  previousStep() {
    this.surveyService.ss.step--;
  }

  pickPPS(p: string) {
    const index = this.surveyService.ss.pps.options.indexOf(p);
    if (index > -1) {
      this.surveyService.ss.pps.options.splice(index, 1);
    } else {
      this.surveyService.ss.pps.options.push(p);
    }
  }

  pickIndicate(p: string) {
    const index = this.surveyService.ss.spetic.iosf.indexOf(p);
    if (index > -1) {
      this.surveyService.ss.spetic.iosf.splice(index, 1);
    } else {
      this.surveyService.ss.spetic.iosf.push(p);
    }
    if (this.surveyService.ss.spetic.iosf.indexOf('Other (please specify)') === -1) {
      this.surveyService.ss.spetic.otherIOSF = '';
    }
  }

  clearWaterQualityDesc() {
    this.surveyService.ss.well.waterQuality_desc = '';
  }

  clearSpeticDesc() {
    this.surveyService.ss.spetic.speticProblem_desc = '';
  }

  handover() {
    this.done.emit(this.surveyService.ss);
  }
}
