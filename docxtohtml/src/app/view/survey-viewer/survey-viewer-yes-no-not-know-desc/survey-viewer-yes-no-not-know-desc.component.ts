import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-viewer-yes-no-not-know-desc',
  templateUrl: './survey-viewer-yes-no-not-know-desc.component.html',
  styleUrls: ['./survey-viewer-yes-no-not-know-desc.component.scss']
})
export class SurveyViewerYesNoNotKnowDescComponent implements OnInit {
  @Input()
  question: string;
  @Input()
  value: string;
  @Input()
  valueDesc: string;

  constructor() { }

  ngOnInit() {
  }

}
