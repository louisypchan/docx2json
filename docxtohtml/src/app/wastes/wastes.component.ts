import {Component, Input, OnInit} from '@angular/core';
import {WASTE} from '../_model/WASTE';

@Component({
  selector: 'app-wastes',
  templateUrl: './wastes.component.html',
  styleUrls: ['./wastes.component.scss']
})
export class WastesComponent implements OnInit {
  step: number;
  @Input() last: boolean;
  waste: WASTE;

  airEmissionTypes: string[];
  treatTypes: string[];
  materials: string[];
  natureWastes: string[];

  constructor() { }

  ngOnInit() {
    this.step = 0;
    this.waste = {
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
    this.airEmissionTypes = ['Odors', 'Vent stacks (on roof)', 'Wall Vents', 'Visible Particles', 'Build-up dusts', 'Soot'];
    this.treatTypes = ['Collection Pond', 'Sludge Lagoon', 'Drains', 'Sumps', 'Oil interceptor', 'Treatment System'];
    this.materials = ['Metal', 'Paper', 'Cardboard', 'Wood', 'Batteries', 'Glass', 'Plastic', 'Tires', 'Other'];
    this.natureWastes = ['Solvents', 'Fuels', 'Antifreeze', 'Paints', 'Oil Lubricants', 'Chlorofluorocarbons', 'Thinners',
    'Radioactive Wastes', 'Pesticides/Herbicides', 'Other'];
  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  handleWaste() {
    this.waste.generate = !this.waste.generate;
    if (!this.waste.generate) {
      this.step = 0;
      this.waste = {
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
  }

  pickAirEmissionType(p: string) {
    const index = this.waste.emission.airEmissionTypes.indexOf(p);
    if (index > -1) {
      this.waste.emission.airEmissionTypes.splice(index, 1);
    } else {
      this.waste.emission.airEmissionTypes.push(p);
    }
    if (this.waste.emission.airEmissionTypes.indexOf('Vent stacks (on roof)') === -1) {
      this.waste.emission.explainVS = '';
    }
    if (this.waste.emission.airEmissionTypes.indexOf('Odors') === -1) {
      this.waste.emission.odors_desc = '';
    }
  }

  pickMaterial(p: string) {
    const index = this.waste.solid.materials.indexOf(p);
    if (index > -1) {
      this.waste.solid.materials.splice(index, 1);
    } else {
      this.waste.solid.materials.push(p);
    }
    if (this.waste.solid.materials.indexOf('Other') === -1) {
      this.waste.solid.otherMaterial = '';
    }
  }

  pickNatureWaste(p: string) {
    const index = this.waste.chemical.natureWastes.indexOf(p);
    if (index > -1) {
      this.waste.chemical.natureWastes.splice(index, 1);
    } else {
      this.waste.chemical.natureWastes.push(p);
    }
    if (this.waste.chemical.natureWastes.indexOf('Other') === -1) {
      this.waste.solid.otherMaterial = '';
    }
  }

  pickTreatType(p: string) {
    const index = this.waste.liquid.treatTypes.indexOf(p);
    if (index > -1) {
      this.waste.liquid.treatTypes.splice(index, 1);
    } else {
      this.waste.liquid.treatTypes.push(p);
    }
  }

  aveQuaWaste(val: string) {
    this.waste.solid.avgQuaWaste = val;
  }

  disposeWaste(val: string) {
    this.waste.solid.disposed = val;
  }
  disposeFuelWaste(val: string) {
    this.waste.chemical.disposed = val;
  }

  descTreatmentSystem(val: string) {
    this.waste.liquid.treatment_desc = val;
  }

  handleSwitch(obj: string, prop: string) {
    this.waste[obj][prop] = !this.waste[obj][prop];
    switch (obj) {
      case 'emission':
        if (prop === 'treatment') {
          if (!this.waste[obj][prop]) {
            this.waste.emission.treatment_desc = '';
          }
        }
        break;
      case 'liquid':
        if (prop === 'wotds') {
          if (!this.waste[obj][prop]) {
            this.waste.liquid.whereToTreat = '';
            this.waste.liquid.treatTypes = [];
            this.waste.liquid.treatment_desc = '';
          }
        }
        break;
      case 'solid':
        if (prop === 'uncontrolled') {
          if (!this.waste[obj][prop]) {
            this.waste.solid.uncontrolled_desc = '';
          }
        }
        break;
      default:
        break;
    }
  }
}
