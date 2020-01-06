import { Directive, ElementRef } from '@angular/core';

// to use <a apDarkenOnHover> is necessary to put the selector name into brackets
@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {
  constructor(private el: ElementRef) {}

  darkenOn() {
    console.log('darken ON');
  }

  darkenOff() {
    console.log('darken OFF');
  }
}
