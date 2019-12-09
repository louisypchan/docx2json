import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GSI} from '../_model/GSI';
import {SurveyService} from '../_service/survey.service';

@Component({
  selector: 'app-nsc',
  templateUrl: './nsc.component.html',
  styleUrls: ['./nsc.component.scss']
})
export class NscComponent implements OnInit {

  topography: string[];
  swd: string[];
  vsPicks: string[];
  vegetation: string[];
  geology: string[];
  socotgs: string[];
  @Input() last: boolean;
  @Output() done = new EventEmitter<any>();

  constructor(public surveyService: SurveyService) {
  }

  ngOnInit() {
    this.surveyService.nsc = {
      step: 0,
      topography: [],
      drainage: [],
      otherDrainage: '',
      contamination: 'No',
      visibleSigns : [],
      isVegetationOnSite: false,
      vegetation: [],
      stressedVegetation: false,
      stressedVegetationDesc: '',
      geology: [],
      socotg: false,
      socotgs: []
    };
    this.vsPicks = ['Oily Films', 'Sheen', 'Staining/Discoloration', 'Odours'];
    this.vegetation = ['Crops', 'Grass', 'Landscaping', 'Tress', 'Shrubs'];
    this.geology = ['Fill', 'Clay', 'Rocky outcrops', 'Sand', 'Gravel', 'Other', 'Not Known', 'Silt'];
    this.topography = ['Lowland', 'Hill', 'Flat', 'Slope'];
    this.swd = ['Wetlands', 'Ditches', 'Ponds', 'Rivers/Streams', 'Creeks', 'Other'];
    this.socotgs = ['Staining/Discoloration', 'Odors', 'Oily Films'];
  }

  nextStep() {
    this.surveyService.nsc.step++;
  }
  previousStep() {
    this.surveyService.nsc.step--;
  }

  onClickVS() {
    this.surveyService.nsc.contamination = this.surveyService.nsc.contamination === 'Yes' ? 'No' : 'Yes';
    if (this.surveyService.nsc.contamination === 'No') {
      this.surveyService.nsc.visibleSigns.length = 0;
    }
  }

  onClickVegetation() {
    this.surveyService.nsc.isVegetationOnSite = !this.surveyService.nsc.isVegetationOnSite;
  }

  onClickSV() {
    this.surveyService.nsc.stressedVegetation = !this.surveyService.nsc.stressedVegetation;
    if (!this.surveyService.nsc.stressedVegetation) {
      this.surveyService.nsc.stressedVegetationDesc = '';
    }
  }

  onClicksocotg() {
    this.surveyService.nsc.socotg = !this.surveyService.nsc.socotg;
  }

  picksocotg(p: string) {
    const index = this.socotgs.indexOf(p);
    if (index > -1) {
      this.surveyService.nsc.socotgs.splice(index, 1);
    } else {
      this.surveyService.nsc.socotgs.push(p);
    }
  }

  pickGeology(p: string) {
    const index = this.surveyService.nsc.geology.indexOf(p);
    if (index > -1) {
      this.surveyService.nsc.geology.splice(index, 1);
    } else {
      this.surveyService.nsc.geology.push(p);
    }
  }

  pickVegetation(p: string) {
    const index = this.surveyService.nsc.vegetation.indexOf(p);
    if (index > -1) {
      this.surveyService.nsc.vegetation.splice(index, 1);
    } else {
      this.surveyService.nsc.vegetation.push(p);
    }
  }

  pickTopography(p: string) {
    const index = this.surveyService.nsc.topography.indexOf(p);
    if (index > -1) {
      this.surveyService.nsc.topography.splice(index, 1);
    } else {
      this.surveyService.nsc.topography.push(p);
    }
  }
  pickVS(p: string) {
    const index = this.surveyService.nsc.visibleSigns.indexOf(p);
    if (index > -1) {
      this.surveyService.nsc.visibleSigns.splice(index, 1);
    } else {
      this.surveyService.nsc.visibleSigns.push(p);
    }
  }

  pickSWD(p: string) {
    const index = this.surveyService.nsc.drainage.indexOf(p);
    if (index > -1) {
      this.surveyService.nsc.drainage.splice(index, 1);
    } else {
      this.surveyService.nsc.drainage.push(p);
    }
    if (this.surveyService.nsc.drainage.indexOf('Other') === -1) {
      this.surveyService.nsc.otherDrainage  = '';
    }
  }
  onDrainage(val: string) {
    this.surveyService.nsc.otherDrainage = val;
  }

  handover() {
    this.done.emit(this.surveyService.nsc);
  }
}
