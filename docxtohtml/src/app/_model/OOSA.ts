import {Gas} from './oosa/Gas';
import {Mine} from './oosa/Mine';

export interface OOSA {
  step: number;
  gas: Gas;
  mine: Mine;
}
