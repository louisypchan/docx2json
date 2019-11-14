import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nsc',
  templateUrl: './nsc.component.html',
  styleUrls: ['./nsc.component.scss']
})
export class NscComponent implements OnInit {

  step: number;
  swd: string[];
  selectedSWD: string[];

  constructor() { }

  ngOnInit() {
    this.step = 0;
    this.selectedSWD = [];
    this.swd = ['Wetlands', 'Ditches', 'Ponds', 'Rivers/Streams', 'Creeks', 'Other'];
  }

}
