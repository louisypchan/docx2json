import {BI} from './sotp/BI';
import {Asbestos} from './sotp/Asbestos';
import {Lead} from './sotp/Lead';
import {PCBs} from './sotp/PCBs';

export interface SOTP {
  bi: BI;
  asbestos: Asbestos;
  lead: Lead;
  pcb: PCBs;
}
