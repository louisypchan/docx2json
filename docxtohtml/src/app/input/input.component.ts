import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {utils} from '../_util';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() focus: boolean;
  @Input() invalid: boolean;
  @Output() changed = new EventEmitter<string>();
  id: string;
  focused: boolean;
  value: string;

  constructor() { }

  ngOnInit() {
    this.id = +(new Date()) +  '_' + utils.uniqueIdGenerator();
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

  onInput() {
    this.changed.emit(this.value);
  }
}
