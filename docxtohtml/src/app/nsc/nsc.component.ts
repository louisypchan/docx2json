import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nsc',
  templateUrl: './nsc.component.html',
  styleUrls: ['./nsc.component.scss']
})
export class NscComponent implements OnInit {

  step: number;
  swd: string[];
  selectedSWD: string[];
  topography: string;
  vs: string;
  vsCheck: string;
  @Input() last: boolean;

  constructor() { }

  ngOnInit() {
    this.step = 0;
    this.selectedSWD = [];
    this.vs = 'No';
    this.topography = 'Lowland';
    this.swd = ['Wetlands', 'Ditches', 'Ponds', 'Rivers/Streams', 'Creeks', 'Other'];
  }

  nextStep() {
    this.step++;
  }

  onClickVS() {
    this.vs = this.vs === 'Yes' ? 'No' : 'Yes';
    if (this.vs === 'No') {
      this.vsCheck = '';
    }
  }

  pickSWD(p: string) {
    const index = this.selectedSWD.indexOf(p);
    if (index > -1) {
      this.selectedSWD.splice(index, 1);
    } else {
      this.selectedSWD.push(p);
    }
  }
}
