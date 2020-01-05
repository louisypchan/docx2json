import { utils } from './../../_util/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-option-item',
  templateUrl: './survey-option-item.component.html',
  styleUrls: ['./survey-option-item.component.scss']
})
export class SurveyOptionItemComponent implements OnInit {

  @Input()
  options: string[] = [];
  @Input()
  selected: string[];
  id = utils.uniqueIdGenerator();
  @Input()
  colNumber = 3;

  constructor() { }

  ngOnInit() {
  }

  isCheck(opt: string) {
    if (this.selected) {
      return this.selected.indexOf(opt) > -1;
    } else {
      return false;
    }
  }
}
