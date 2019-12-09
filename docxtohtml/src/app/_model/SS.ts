import {PPS} from './ss/PPS';
import {Well} from './ss/Well';
import {Spetic} from './ss/Spetic';

export interface SS {
  step: number;
  pps: PPS;
  well: Well;
  spetic: Spetic;
}
