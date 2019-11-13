import {AfterContentInit, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements AfterContentInit, OnChanges {

  @Input() public appFocus: boolean;

  constructor(private el: ElementRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('appFocus' in changes) {
      if (changes.appFocus.currentValue) {
        this.focusAndSelect();
      }
    }
  }

  ngAfterContentInit() {
    this.focusAndSelect();
  }

  private focusAndSelect() {
    if (this.appFocus) {
      this.el.nativeElement.focus();
      setTimeout(() => {
        this.el.nativeElement.select();
      }, 50);
    }
  }
}
