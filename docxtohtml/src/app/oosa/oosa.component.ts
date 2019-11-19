import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OOSA} from '../_model/OOSA';

@Component({
  selector: 'app-oosa',
  templateUrl: './oosa.component.html',
  styleUrls: ['./oosa.component.scss']
})
export class OosaComponent implements OnInit {
  step: number;
  @Input() last: boolean;
  oosa: OOSA;
  @Output() done = new EventEmitter<OOSA>();

  constructor() { }

  ngOnInit() {
    this.step = 0;
    this.oosa = {
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
    this.oosa.mine.abandonedActivity_desc = '';
    this.oosa.mine.number = '';
    this.oosa.mine.type = '';
  }

  onNumberChange(val: string) {
    this.oosa.mine.number = val;
  }

  onTypeChange(val: string) {
    this.oosa.mine.type = val;
  }

  handover() {
    this.done.emit(this.oosa);
  }
}
