import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {utils} from '../_util';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Output() changed = new EventEmitter<string>();
  id: string;
  focus: boolean;
  value: string;

  constructor() { }

  ngOnInit() {
    this.id = +(new Date()) +  '_' + utils.uniqueIdGenerator();
  }

  onFocus() {
    this.focus = true;
  }

  onBlur() {
    this.focus = false;
  }

  onInput() {
    this.changed.emit(this.value);
  }
}
