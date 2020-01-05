import { utils } from './../../_util/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-check-item',
  templateUrl: './survey-check-item.component.html',
  styleUrls: ['./survey-check-item.component.scss']
})
export class SurveyCheckItemComponent implements OnInit {

  @Input()
  options: string[] = [];
  @Input()
  selected: string;
  id = utils.uniqueIdGenerator();
  @Input()
  colNumber = 3;

  constructor() { }

  ngOnInit() {
  }

  isCheck(opt: string) {
    if (this.selected) {
      return this.selected === opt;
    } else {
      return false;
    }
  }

}
