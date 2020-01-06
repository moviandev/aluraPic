import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// to use <a apDarkenOnHover> is necessary to put the selector name into brackets
@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.removeStyle(this.el.nativeElement, 'filter');
  }
}
