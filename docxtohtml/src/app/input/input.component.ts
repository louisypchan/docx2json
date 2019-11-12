import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  id: string;
  focus: boolean;

  constructor() { }

  ngOnInit() {
    this.id = +(new Date()) +  '';
  }

  onFocus() {
    this.focus = true;
  }
}
