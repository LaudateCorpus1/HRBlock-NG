import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  appHighlight: string;

  constructor(private element: ElementRef) {
    // console.log('directive is applied')
    // console.log(this.element.nativeElement)
    // //setting back ground color
    // this.element.nativeElement.style.backgroundColor = 'yellow'
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('entering', this.appHighlight)
    // this.highLight('yellow')
    this.highLight(this.appHighlight)
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('leaving')
    this.highLight(null)

  }
  private highLight(color: string) {
    this.element.nativeElement.style.backgroundColor = color

  }

}
