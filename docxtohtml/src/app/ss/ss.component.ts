import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SS} from '../_model/SS';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.scss']
})
export class SsComponent implements OnInit {

  step: number;
  ppsOptions: string[];
  indicates: string[];
  @Input() last: boolean;
  ss: SS;
  @Output() done = new EventEmitter<SS>();


  constructor() { }

  ngOnInit() {
    this.step = 0;
    this.ss = {
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
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  pickPPS(p: string) {
    const index = this.ss.pps.options.indexOf(p);
    if (index > -1) {
      this.ss.pps.options.splice(index, 1);
    } else {
      this.ss.pps.options.push(p);
    }
  }

  pickIndicate(p: string) {
    const index = this.ss.spetic.iosf.indexOf(p);
    if (index > -1) {
      this.ss.spetic.iosf.splice(index, 1);
    } else {
      this.ss.spetic.iosf.push(p);
    }
    if (this.ss.spetic.iosf.indexOf('Other (please specify)') === -1) {
      this.ss.spetic.otherIOSF = '';
    }
  }

  clearWaterQualityDesc() {
    this.ss.well.waterQuality_desc = '';
  }

  clearSpeticDesc() {
    this.ss.spetic.speticProblem_desc = '';
  }

  handover() {
    this.done.emit(this.ss);
  }
}
