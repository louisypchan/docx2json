import {Component, Input, OnInit} from '@angular/core';
import {MUAS} from '../_model/MUAS';

@Component({
  selector: 'app-maas',
  templateUrl: './maas.component.html',
  styleUrls: ['./maas.component.scss']
})
export class MaasComponent implements OnInit {

  step: number;
  @Input() last: boolean;
  muas: MUAS;
  evidence: string[];
  conditions: string[];
  msapOps: string[];
  waysToStore: string[];
  stockpiled: string[];
  constructor() { }

  ngOnInit() {
    this.step = 0;
    this.muas = {
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
    this.muas.tank.utankAmount = '';
  }

  pickEvidence(p: string) {
    const index = this.muas.tank.evidence.indexOf(p);
    if (index > -1) {
      this.muas.tank.evidence.splice(index, 1);
    } else {
      this.muas.tank.evidence.push(p);
    }
  }
  pickCondition(p: string) {
    const index = this.muas.tank.tankConditions.indexOf(p);
    if (index > -1) {
      this.muas.tank.tankConditions.splice(index, 1);
    } else {
      this.muas.tank.tankConditions.push(p);
    }
  }

  pickMsap(p: string) {
    const index = this.muas.osa.msapOps.indexOf(p);
    if (index > -1) {
      this.muas.osa.msapOps.splice(index, 1);
    } else {
      this.muas.osa.msapOps.push(p);
    }
    if (this.muas.osa.msapOps.indexOf('Other') === -1) {
      this.muas.osa.otherMsap = '';
    }
  }
  pickWay(p: string) {
    const index = this.muas.osa.waysToStore.indexOf(p);
    if (index > -1) {
      this.muas.osa.waysToStore.splice(index, 1);
    } else {
      this.muas.osa.waysToStore.push(p);
    }
    if (this.muas.osa.waysToStore.indexOf('Other') === -1) {
      this.muas.osa.otherWayToStore = '';
    }
  }

  pickMaterial(p: string) {
    const index = this.muas.osa.stockpiled.indexOf(p);
    if (index > -1) {
      this.muas.osa.stockpiled.splice(index, 1);
    } else {
      this.muas.osa.stockpiled.push(p);
    }
    if (this.muas.osa.stockpiled.indexOf('Other') === -1) {
      this.muas.osa.otherMaterial = '';
    }
  }

  handleSwitch(obj: string, prop: string) {
    this.muas[obj][prop] = !this.muas[obj][prop];
    switch (obj) {
      case 'osa':
        if (prop === 'secure') {
          if (this.muas[obj][prop]) {
            this.muas.osa.insecure_desc = '';
          }
        }
        if (prop === 'ssa') {
          if (this.muas[obj][prop]) {
            this.muas.osa.ssa_desc = '';
          }
        }
        break;
      case 'tank':
        break;
    }
  }
}
