import {PI} from './gsi/PI';
import {PO} from './gsi/PO';
import {LU} from './gsi/LU';
import {AP} from './gsi/AP';
import {RO} from './RO';

export interface GSI {
  step: number;
  pi: PI;
  po: PO;
  lu: LU;
  ap: AP[];
  heritage: RO;
}
