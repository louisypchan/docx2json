import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {utils} from '../_util';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() label: string;
  @Input() focus: boolean;
  @Input() invalid: boolean;
  @Input() placeholder: string;
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

  ngOnChanges(changes: SimpleChanges): void {
    if ('placeholder' in changes) {
      if (changes.placeholder.currentValue) {
        this.value = changes.placeholder.currentValue;
      }
    }
  }
}
