import { Directive, ElementRef, HostListener } from '@angular/core';

// to use <a apDarkenOnHover> is necessary to put the selector name into brackets
@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  darkenOn() {
    console.log('darken ON');
  }

  @HostListener('mouseleave')
  darkenOff() {
    console.log('darken OFF');
  }
}
