import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GSI} from '../_model/GSI';

@Component({
  selector: 'app-nsc',
  templateUrl: './nsc.component.html',
  styleUrls: ['./nsc.component.scss']
})
export class NscComponent implements OnInit {

  step: number;
  topography: string[];
  swd: string[];
  selectedSWD: string[];
  otherDrainage: string;
  selectedTopography: string[];
  vs: string;
  vsPicks: string[];
  vsPicked: string[];
  vegetation: string[];
  selectedVegetation: string[];
  isVegetationOnSite: boolean;
  sv: boolean;
  geology: string[];
  selectedGeology: string[];
  socotg: boolean;
  socotgs: string[];
  selectedsocotg: string[];
  stressedVegetationDesc: string;
  @Input() last: boolean;
  @Output() done = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.step = 0;
    this.selectedSWD = [];
    this.selectedTopography = [];
    this.vsPicked = [];
    this.selectedVegetation = [];
    this.selectedGeology = [];
    this.selectedsocotg = [];
    this.vsPicks = ['Oily Films', 'Sheen', 'Staining/Discoloration', 'Odours'];
    this.vegetation = ['Crops', 'Grass', 'Landscaping', 'Tress', 'Shrubs'];
    this.geology = ['Fill', 'Clay', 'Rocky outcrops', 'Sand', 'Gravel', 'Other', 'Not Known', 'Silt'];
    this.vs = 'No';
    this.topography = ['Lowland', 'Hill', 'Flat', 'Slope'];
    this.swd = ['Wetlands', 'Ditches', 'Ponds', 'Rivers/Streams', 'Creeks', 'Other'];
    this.socotgs = ['Staining/Discoloration', 'Odors', 'Oily Films'];
  }

  nextStep() {
    this.step++;
  }
  previousStep() {
    this.step--;
  }

  onClickVS() {
    this.vs = this.vs === 'Yes' ? 'No' : 'Yes';
    if (this.vs === 'No') {
      this.vsPicked.length = 0;
    }
  }

  onClickVegetation() {
    this.isVegetationOnSite = !this.isVegetationOnSite;
  }

  onClickSV() {
    this.sv = !this.sv;
    if (!this.sv) {
      this.stressedVegetationDesc = '';
    }
  }

  onClicksocotg() {
    this.socotg = !this.socotg;
  }

  picksocotg(p: string) {
    const index = this.socotgs.indexOf(p);
    if (index > -1) {
      this.selectedsocotg.splice(index, 1);
    } else {
      this.selectedsocotg.push(p);
    }
  }

  pickGeology(p: string) {
    const index = this.selectedGeology.indexOf(p);
    if (index > -1) {
      this.selectedGeology.splice(index, 1);
    } else {
      this.selectedGeology.push(p);
    }
  }

  pickVegetation(p: string) {
    const index = this.selectedVegetation.indexOf(p);
    if (index > -1) {
      this.selectedVegetation.splice(index, 1);
    } else {
      this.selectedVegetation.push(p);
    }
  }

  pickTopography(p: string) {
    const index = this.selectedTopography.indexOf(p);
    if (index > -1) {
      this.selectedTopography.splice(index, 1);
    } else {
      this.selectedTopography.push(p);
    }
  }
  pickVS(p: string) {
    const index = this.vsPicked.indexOf(p);
    if (index > -1) {
      this.vsPicked.splice(index, 1);
    } else {
      this.vsPicked.push(p);
    }
  }

  pickSWD(p: string) {
    const index = this.selectedSWD.indexOf(p);
    if (index > -1) {
      this.selectedSWD.splice(index, 1);
    } else {
      this.selectedSWD.push(p);
    }
    if (this.selectedSWD.indexOf('Other') === -1) {
      this.otherDrainage  = '';
    }
  }
  onDrainage(val: string) {
    this.otherDrainage = val;
  }

  handover() {
    this.done.emit({
      topography: this.selectedTopography,
      drainage: this.selectedSWD,
      otherDrainage: this.otherDrainage,
      contamination: this.vs,
      visibleSigns : this.vsPicked,
      isVegetationOnSite: this.isVegetationOnSite,
      vegetation: this.selectedVegetation,
      stressedVegetation: this.sv,
      stressedVegetationDesc: this.stressedVegetationDesc,
      geology: this.selectedGeology,
      socotg: this.socotg,
      socotgs: this.socotgs
    });
  }
}
