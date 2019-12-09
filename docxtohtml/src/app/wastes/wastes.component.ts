import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WASTE} from '../_model/WASTE';
import {SurveyService} from '../_service/survey.service';

@Component({
  selector: 'app-wastes',
  templateUrl: './wastes.component.html',
  styleUrls: ['./wastes.component.scss']
})
export class WastesComponent implements OnInit {
  @Input() last: boolean;

  airEmissionTypes: string[];
  treatTypes: string[];
  materials: string[];
  natureWastes: string[];
  @Output() done = new EventEmitter<WASTE>();


  constructor(public surveyService: SurveyService) { }

  ngOnInit() {
    if (!this.surveyService.waste) {
      this.surveyService.waste = {
        step: 0,
        generate: false,
        emission: {
          airEmission: '',
          airEmissionTypes: [],
          explainVS: '',
          odors_desc: '',
          monitoring: '',
          treatment: false,
          treatment_desc: '',
          certificate: false,
          indications: false
        },
        liquid: {
          wotds: false, // wastes other than domestic sewage
          whereToTreat: '',
          treatTypes: [],
          treatment_desc: ''
        },
        solid: {
          landfills: '',
          materials: [],
          otherMaterial: '',
          avgQuaWaste: '',
          recycled: '',
          recycled_desc: '',
          disposed: '',
          uncontrolled: false,
          uncontrolled_desc: '',
        },
        chemical: {
          fuel: '',
          natureWastes: [],
          otherNatureWaste: '',
          management: '',
          management_desc: '',
          disposed: '',
          fuelOnSite: '',
          fuelOnSite_desc: ''
        }
      };
    }
    this.airEmissionTypes = ['Odors', 'Vent stacks (on roof)', 'Wall Vents', 'Visible Particles', 'Build-up dusts', 'Soot'];
    this.treatTypes = ['Collection Pond', 'Sludge Lagoon', 'Drains', 'Sumps', 'Oil interceptor', 'Treatment System'];
    this.materials = ['Metal', 'Paper', 'Cardboard', 'Wood', 'Batteries', 'Glass', 'Plastic', 'Tires', 'Other'];
    this.natureWastes = ['Solvents', 'Fuels', 'Antifreeze', 'Paints', 'Oil Lubricants', 'Chlorofluorocarbons', 'Thinners',
    'Radioactive Wastes', 'Pesticides/Herbicides', 'Other'];
  }

  nextStep() {
    this.surveyService.waste.step++;
  }

  previousStep() {
    this.surveyService.waste.step--;
  }

  handleWaste() {
    this.surveyService.waste.generate = !this.surveyService.waste.generate;
  }

  pickAirEmissionType(p: string) {
    const index = this.surveyService.waste.emission.airEmissionTypes.indexOf(p);
    if (index > -1) {
      this.surveyService.waste.emission.airEmissionTypes.splice(index, 1);
    } else {
      this.surveyService.waste.emission.airEmissionTypes.push(p);
    }
    if (this.surveyService.waste.emission.airEmissionTypes.indexOf('Vent stacks (on roof)') === -1) {
      this.surveyService.waste.emission.explainVS = '';
    }
    if (this.surveyService.waste.emission.airEmissionTypes.indexOf('Odors') === -1) {
      this.surveyService.waste.emission.odors_desc = '';
    }
  }

  pickMaterial(p: string) {
    const index = this.surveyService.waste.solid.materials.indexOf(p);
    if (index > -1) {
      this.surveyService.waste.solid.materials.splice(index, 1);
    } else {
      this.surveyService.waste.solid.materials.push(p);
    }
    if (this.surveyService.waste.solid.materials.indexOf('Other') === -1) {
      this.surveyService.waste.solid.otherMaterial = '';
    }
  }

  pickNatureWaste(p: string) {
    const index = this.surveyService.waste.chemical.natureWastes.indexOf(p);
    if (index > -1) {
      this.surveyService.waste.chemical.natureWastes.splice(index, 1);
    } else {
      this.surveyService.waste.chemical.natureWastes.push(p);
    }
    if (this.surveyService.waste.chemical.natureWastes.indexOf('Other') === -1) {
      this.surveyService.waste.solid.otherMaterial = '';
    }
  }

  pickTreatType(p: string) {
    const index = this.surveyService.waste.liquid.treatTypes.indexOf(p);
    if (index > -1) {
      this.surveyService.waste.liquid.treatTypes.splice(index, 1);
    } else {
      this.surveyService.waste.liquid.treatTypes.push(p);
    }
  }

  aveQuaWaste(val: string) {
    this.surveyService.waste.solid.avgQuaWaste = val;
  }

  disposeWaste(val: string) {
    this.surveyService.waste.solid.disposed = val;
  }
  disposeFuelWaste(val: string) {
    this.surveyService.waste.chemical.disposed = val;
  }

  descTreatmentSystem(val: string) {
    this.surveyService.waste.liquid.treatment_desc = val;
  }

  handleSwitch(obj: string, prop: string) {
    this.surveyService.waste[obj][prop] = !this.surveyService.waste[obj][prop];
    switch (obj) {
      case 'emission':
        if (prop === 'treatment') {
          if (!this.surveyService.waste[obj][prop]) {
            this.surveyService.waste.emission.treatment_desc = '';
          }
        }
        break;
      case 'liquid':
        if (prop === 'wotds') {
          if (!this.surveyService.waste[obj][prop]) {
            this.surveyService.waste.liquid.whereToTreat = '';
            this.surveyService.waste.liquid.treatTypes = [];
            this.surveyService.waste.liquid.treatment_desc = '';
          }
        }
        break;
      case 'solid':
        if (prop === 'uncontrolled') {
          if (!this.surveyService.waste[obj][prop]) {
            this.surveyService.waste.solid.uncontrolled_desc = '';
          }
        }
        break;
      default:
        break;
    }
  }

  handover() {
    this.done.emit(this.surveyService.waste);
  }
}
