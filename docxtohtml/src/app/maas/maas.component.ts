import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MUAS} from '../_model/MUAS';
import {SurveyService} from '../_service/survey.service';

@Component({
  selector: 'app-maas',
  templateUrl: './maas.component.html',
  styleUrls: ['./maas.component.scss']
})
export class MaasComponent implements OnInit {

  step: number;
  @Input() last: boolean;
  evidence: string[];
  conditions: string[];
  msapOps: string[];
  waysToStore: string[];
  stockpiled: string[];
  @Output() done = new EventEmitter<MUAS>();


  constructor(public surveyService: SurveyService) { }

  ngOnInit() {
    this.step = 0;
    this.surveyService.muas = {
      tank: {
        utank: '',
        utankAmount: '',
        evidence: [],
        tankInUse: '',
        ageOfTankOutOfService: '',
        emptied: '',
        atank: '',
        atankAmount: '',
        tankConditions: [],
        spill: false,
        spillDetail: '',
        spills: '',
        spills_desc: ''
      },
      osa: {
        msop: false,
        msap: false,
        msapOps: [],
        otherMsap: '',
        waysToStore: [],
        otherWayToStore: '',
        observed: [],
        cst2: '',
        c2l: '',
        drums: '',
        tanks: '',
        stockpiled: [],
        otherMaterial: '',
        secure: true,
        insecure_desc: '',
        ssa: true,
        ssa_desc: '',
        krhp: false,
        krhpDetail: ''
      }
    };
    this.evidence = ['Vent Pipe', 'Staining', 'Fill Pipe', 'Depression', 'Mound'];
    this.conditions = ['Dented', 'New', 'Old', 'Rusty'];
    this.msapOps = ['Solvents', 'Fuels', 'Paints', 'Paint thinners', 'Antifreeze', 'Oils', 'Glues', 'Batteries', 'Compressed Gas',
      'Pesticides', 'Herbicides', 'Radioactive Materials', 'Other'];
    this.waysToStore = ['In sealed containers', 'Properly labelled', 'Evidence of leaking or rusty containers',
    'Close to drains, sumps or waterways', 'In secure storage areas', 'No labels', 'Containers outside, in the open', 'Other'];
    this.stockpiled = ['Tires', 'Metal', 'Wood', 'Paper', 'Glass', 'Cardboard', 'Plastic', 'Other'];
  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  clearUA() {
    this.surveyService.muas.tank.utankAmount = '';
  }

  pickEvidence(p: string) {
    const index = this.surveyService.muas.tank.evidence.indexOf(p);
    if (index > -1) {
      this.surveyService.muas.tank.evidence.splice(index, 1);
    } else {
      this.surveyService.muas.tank.evidence.push(p);
    }
  }
  pickCondition(p: string) {
    const index = this.surveyService.muas.tank.tankConditions.indexOf(p);
    if (index > -1) {
      this.surveyService.muas.tank.tankConditions.splice(index, 1);
    } else {
      this.surveyService.muas.tank.tankConditions.push(p);
    }
  }

  pickMsap(p: string) {
    const index = this.surveyService.muas.osa.msapOps.indexOf(p);
    if (index > -1) {
      this.surveyService.muas.osa.msapOps.splice(index, 1);
    } else {
      this.surveyService.muas.osa.msapOps.push(p);
    }
    if (this.surveyService.muas.osa.msapOps.indexOf('Other') === -1) {
      this.surveyService.muas.osa.otherMsap = '';
    }
  }
  pickWay(p: string) {
    const index = this.surveyService.muas.osa.waysToStore.indexOf(p);
    if (index > -1) {
      this.surveyService.muas.osa.waysToStore.splice(index, 1);
    } else {
      this.surveyService.muas.osa.waysToStore.push(p);
    }
    if (this.surveyService.muas.osa.waysToStore.indexOf('Other') === -1) {
      this.surveyService.muas.osa.otherWayToStore = '';
    }
  }

  pickMaterial(p: string) {
    const index = this.surveyService.muas.osa.stockpiled.indexOf(p);
    if (index > -1) {
      this.surveyService.muas.osa.stockpiled.splice(index, 1);
    } else {
      this.surveyService.muas.osa.stockpiled.push(p);
    }
    if (this.surveyService.muas.osa.stockpiled.indexOf('Other') === -1) {
      this.surveyService.muas.osa.otherMaterial = '';
    }
  }

  handleSwitch(obj: string, prop: string) {
    this.surveyService.muas[obj][prop] = !this.surveyService.muas[obj][prop];
    switch (obj) {
      case 'osa':
        if (prop === 'secure') {
          if (this.surveyService.muas[obj][prop]) {
            this.surveyService.muas.osa.insecure_desc = '';
          }
        }
        if (prop === 'ssa') {
          if (this.surveyService.muas[obj][prop]) {
            this.surveyService.muas.osa.ssa_desc = '';
          }
        }
        break;
      case 'tank':
        break;
    }
  }

  handover() {
    this.done.emit(this.surveyService.muas);
  }
}
