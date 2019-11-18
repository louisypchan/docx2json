import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.scss']
})
export class SsComponent implements OnInit {

  step: number;
  @Input() last: boolean;
  constructor() { }

  ngOnInit() {
    this.step = 0;
  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }
}
