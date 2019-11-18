import {Component, Input, OnInit} from '@angular/core';
import {SOTP} from '../_model/SOTP';

@Component({
  selector: 'app-sotp',
  templateUrl: './sotp.component.html',
  styleUrls: ['./sotp.component.scss']
})
export class SotpComponent implements OnInit {

  step: number;
  @Input() last: boolean;
  sotp: SOTP;
  heatingTypes: string[];
  asbestosProperties: string[];

  constructor() { }

  ngOnInit() {
    this.sotp = {
      bi: {
        nob: '',
        toc: '',
        doc: '',
        uses: '',
        size: '',
        nof: '',
        basement: false,
        renovations: false,
        renovations_desc: '',
        staining: false,
        heating: false,
        heatingTypes: [],
        ageOfHeating: '',
        psu: '',
        cooling: false
      },
      asbestos: {
        hasAsbestos: '',
        properties: [],
        uffi: ''
      },
      lead: {
        hasLeadPaint: '',
        desc: ''
      },
      pcb: {
        pcbs: '',
        transforms: false,
        transformType: '',
        sampling: false,
        flf: false,
        flfAmount: '',
        ooee: false,
        ooee_desc: '',
        lamps: false,
        lampsAmount: '',
        pss: false,
        pss_desc: ''
      }
    };
    this.heatingTypes = ['Natural Gas', 'Oil', 'Steam', 'Propane', 'Electric', 'Not Known', 'Wood', 'Coal'];
    this.asbestosProperties = ['Sprayed-on fire proofing (walls, ceiling)', 'Acoustical plaster', 'Insulation on furnace or boiler',
    'Roof shingles', 'Pipe insulation (other than pink fiberglass)', 'Vinyl floor tiles', 'Acoustic ceiling tiles',
      'Sheeting (interior or exterior)', 'Other'];
    this.step = 0;
  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  handleSwitch(obj: string, prop: string) {
    this.sotp[obj][prop] = !this.sotp[obj][prop];
  }

  pickHeatingType(ops: string) {
    const index = this.sotp.bi.heatingTypes.indexOf(ops);
    if (index > -1) {
      this.sotp.bi.heatingTypes.splice(index, 1);
    } else {
      this.sotp.bi.heatingTypes.push(ops);
    }
  }

  onBIChanged(val: string, prop: string) {
    this.sotp.bi[prop] = val;
  }

  pickProperties(ops: string) {
    const index = this.sotp.asbestos.properties.indexOf(ops);
    if (index > -1) {
      this.sotp.asbestos.properties.splice(index, 1);
    } else {
      this.sotp.asbestos.properties.push(ops);
    }
  }

  clearLead() {
    this.sotp.lead.desc = '';
  }

  clearPCBs() {
    this.sotp.pcb = {
      pcbs: this.sotp.pcb.pcbs,
      transforms: false,
      transformType: '',
      sampling: false,
      flf: false,
      flfAmount: '',
      ooee: false,
      ooee_desc: '',
      lamps: false,
      lampsAmount: '',
      pss: false,
      pss_desc: ''
    };
  }

  clearAsbestos() {
    this.sotp.asbestos.properties = [];
  }
}
