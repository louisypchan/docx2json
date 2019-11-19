import {Emission} from './waste/Emission';
import {Liquid} from './waste/Liquid';
import {Solid} from './waste/Solid';
import {Chemical} from './waste/Chemical';

export interface WASTE {
  generate: boolean;
  emission: Emission;
  liquid: Liquid;
  solid: Solid;
  chemical: Chemical;
}
