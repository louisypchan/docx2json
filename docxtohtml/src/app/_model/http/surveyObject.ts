import { OOSA } from './../OOSA';
import { WASTE } from './../WASTE';
import { MUAS } from './../MUAS';
import { SS } from './../SS';
import { SOTP } from './../SOTP';
import { NSC } from './../NSC';
import { GSI } from './../GSI';
import { Section } from './../Section';
export interface SurveyObject {
  selectedSurvey: Section[];
  gsi: GSI;
  nsc: NSC;
  sotp: SOTP;
  ss: SS;
  muas: MUAS;
  waste: WASTE;
  oosa: OOSA;

}
