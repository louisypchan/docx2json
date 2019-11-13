import { Component, OnInit } from '@angular/core';
import {utils} from '../_util';

@Component({
  selector: 'app-gsi',
  templateUrl: './gsi.component.html',
  styleUrls: ['./gsi.component.scss']
})
export class GsiComponent implements OnInit {

  step: number;
  options: string[];
  landUse: string[];
  preLandUse: string[];
  zoning: string[];

  constructor() { }

  ngOnInit() {
    this.landUse = [];
    this.preLandUse = [];
    this.zoning = [];
    this.step = 0;
    this.options = ['Industrial', 'Residential', 'Federal Land', 'Commercial',
      'Transportation', 'Vacant', 'Agricultural', 'Park/Conservation Area', 'Other (please specify)'];
  }
  generateUID() {
    return utils.uniqueIdGenerator();
  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  landUsePick(p: string) {
    const index = this.landUse.indexOf(p);
    if (index > -1) {
      this.landUse.splice(index, 1);
    } else {
      this.landUse.push(p);
    }
  }
  prevLandUsePick(p: string) {
    const index = this.preLandUse.indexOf(p);
    if (index > -1) {
      this.preLandUse.splice(index, 1);
    } else {
      this.preLandUse.push(p);
    }
  }

  zoningPick(p: string) {
    const index = this.zoning.indexOf(p);
    if (index > -1) {
      this.zoning.splice(index, 1);
    } else {
      this.zoning.push(p);
    }
  }
}
