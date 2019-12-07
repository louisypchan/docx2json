import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {utils} from '../_util';
import {Section} from '../_model/Section';
import {GSI} from '../_model/GSI';
import {Resp} from '../_model/Resp';
import {SurveyService} from '../_service/survey.service';

@Component({
  selector: 'app-gsi',
  templateUrl: './gsi.component.html',
  styleUrls: ['./gsi.component.scss']
})
export class GsiComponent implements OnInit, OnChanges {

  @Input() section: Section;
  @Input() last: boolean;
  @Input() resp: Resp;
  step: number;
  options: string[];
  landUse: string[];
  preLandUse: string[];
  zoning: string[];
  gsi: GSI;
  @Output() done = new EventEmitter<GSI>();

  constructor(private surveyService: SurveyService) {
  }

  ngOnInit() {
    this.landUse = [];
    this.preLandUse = [];
    this.zoning = [];
    this.step = 0;
    const d = new Date();
    this.gsi = {
      pi: {
        pn: '',
        addr: '',
        city: '',
        prov: '',
        zip: '',
        ld: '',
        mailAddr: '',
        parcel: '',
        ocn: '',
        ocnum: '',
        pi: '',
        pici: '',
        dosv: `${d.getDate()}/${d.getMonth() + 1} ${d.getFullYear()}`
      },
      po: {
        pon: '',
        addr: '',
        phone: '',
        email: ''
      },
      lu: {
        lu: [],
        lu_desc: '',
        plu: [],
        plu_desc: '',
        zoning: [],
        zoning_desc: ''
      },
      ap: [{
        location: 'North',
        noo: '',
        details: ''
      }],
      heritage: {
        q1: '',
        q2: '',
        q2_desc: ''
      }
    };
    this.options = ['Industrial', 'Residential', 'Federal Land', 'Commercial',
      'Transportation', 'Vacant', 'Agricultural', 'Park/Conservation Area', 'Other (please specify)'];

    this.reset();
    // just for testing
    // this.surveyService.getData().subscribe(resp => {
    //   this.surveyService.resp = resp;
    //   this.gsi.pi.pn = resp.SITE_NAME;
    //   this.gsi.pi.city = resp.CITY;
    //   this.gsi.pi.addr = resp.ADDRESS;
    //   this.gsi.pi.mailAddr = resp.FULL_ADDRESS;
    //   this.gsi.pi.prov = resp.PROVSTATE;
    //   this.gsi.pi.zip = resp.POSTAL_CODE;
    // });
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

  test() {
    console.log(this.gsi);
  }

  landUsePick(p: string) {
    const index = this.landUse.indexOf(p);
    if (index > -1) {
      this.landUse.splice(index, 1);
    } else {
      this.landUse.push(p);
    }
    if (this.landUse.indexOf('Other (please specify)') === -1) {
      this.gsi.lu.lu_desc = '';
    }
    this.gsi.lu.lu = this.landUse;
  }
  prevLandUsePick(p: string) {
    const index = this.preLandUse.indexOf(p);
    if (index > -1) {
      this.preLandUse.splice(index, 1);
    } else {
      this.preLandUse.push(p);
    }
    if (this.preLandUse.indexOf('Other (please specify)') === -1) {
      this.gsi.lu.plu_desc = '';
    }
    this.gsi.lu.plu = this.preLandUse;
  }

  zoningPick(p: string) {
    const index = this.zoning.indexOf(p);
    if (index > -1) {
      this.zoning.splice(index, 1);
    } else {
      this.zoning.push(p);
    }
    if (this.zoning.indexOf('Other (please specify)') === -1) {
      this.gsi.lu.zoning_desc = '';
    }
    this.gsi.lu.zoning = this.zoning;
  }

  onPIChanged(val: string, prop: string) {
    this.gsi.pi[prop] = val;
  }
  onPOChanged(val: string, prop: string) {
    this.gsi.po[prop] = val;
  }
  onAPChange(val: string, index: number, prop: string) {
    this.gsi.ap[index][prop] = val;
  }
  luDesc(val: string) {
    this.gsi.lu.lu_desc = val;
  }
  pluDesc(val: string) {
    this.gsi.lu.plu_desc = val;
  }
  zoningDesc(val: string) {
    this.gsi.lu.zoning_desc = val;
  }
  clearDesc() {
    this.gsi.heritage.q2_desc = '';
  }
  handover() {
    this.done.emit(this.gsi);
  }

  reset() {
    this.gsi.pi.pn = this.resp.SITE_NAME;
    this.gsi.pi.city = this.resp.CITY;
    this.gsi.pi.addr = this.resp.ADDRESS;
    this.gsi.pi.prov = this.resp.PROVSTATE;
    this.gsi.pi.zip = this.resp.POSTAL_CODE;
    this.gsi.pi.mailAddr = this.resp.FULL_ADDRESS;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('resp' in changes) {
      if (changes.resp.currentValue && this.gsi) {
        this.reset()
      }
    }
  }
}
