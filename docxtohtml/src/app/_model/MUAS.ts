import {Tank} from './muas/Tank';
import {OSA} from './muas/OSA';

export interface MUAS {
  step: number;
  tank: Tank;
  osa: OSA;
}
