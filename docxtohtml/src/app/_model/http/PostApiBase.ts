import { KEYS } from './../../_service/Keys';
export class PostAPIBase {

  constructor() {
    this.SESSION_ID = localStorage.getItem(KEYS.SESSION_ID);
  }
  PROCEDURE: string;
  SESSION_ID: string;
}
