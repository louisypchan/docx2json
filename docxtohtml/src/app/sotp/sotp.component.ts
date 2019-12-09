import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SOTP} from '../_model/SOTP';
import {SurveyService} from '../_service/survey.service';

@Component({
  selector: 'app-sotp',
  templateUrl: './sotp.component.html',
  styleUrls: ['./sotp.component.scss']
})
export class SotpComponent implements OnInit {

  step: number;
  @Input() last: boolean;
  heatingTypes: string[];
  asbestosProperties: string[];
  @Output() done = new EventEmitter<SOTP>();


  constructor(public surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.sotp = {
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
        pss_desc: '',
        otherTransform: ''
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
    this.surveyService.sotp[obj][prop] = !this.surveyService.sotp[obj][prop];
  }

  pickHeatingType(ops: string) {
    const index = this.surveyService.sotp.bi.heatingTypes.indexOf(ops);
    if (index > -1) {
      this.surveyService.sotp.bi.heatingTypes.splice(index, 1);
    } else {
      this.surveyService.sotp.bi.heatingTypes.push(ops);
    }
  }

  onBIChanged(val: string, prop: string) {
    this.surveyService.sotp.bi[prop] = val;
  }

  pickProperties(ops: string) {
    const index = this.surveyService.sotp.asbestos.properties.indexOf(ops);
    if (index > -1) {
      this.surveyService.sotp.asbestos.properties.splice(index, 1);
    } else {
      this.surveyService.sotp.asbestos.properties.push(ops);
    }
  }

  clearLead() {
    this.surveyService.sotp.lead.desc = '';
  }

  clearPCBs() {
    this.surveyService.sotp.pcb = {
      pcbs: this.surveyService.sotp.pcb.pcbs,
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
      otherTransform: '',
      pss_desc: ''
    };
  }

  clearOtherTransform() {
    this.surveyService.sotp.pcb.otherTransform = '';
  }

  clearAsbestos() {
    this.surveyService.sotp.asbestos.properties = [];
  }

  handover() {
    this.done.emit(this.surveyService.sotp);
  }
}
