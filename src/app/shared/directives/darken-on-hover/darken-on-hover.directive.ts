import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input
} from '@angular/core';

// to use <a apDarkenOnHover> is necessary to put the selector name into brackets
@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {
  @Input() brightness = '70%';

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(
      this.el.nativeElement,
      'filter',
      `brightness(${this.brightness})`
    );
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.removeStyle(this.el.nativeElement, 'filter');
  }
}
