import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HighlightOnClick]',
})
export class HighlightOnClickDirective {
  static currentHighlighted: ElementRef | null = null; // Static property to store the current highlighted element.

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    // If there's a currently highlighted element, remove its highlight.
    if (HighlightOnClickDirective.currentHighlighted) {
      this.renderer.setStyle(
        HighlightOnClickDirective.currentHighlighted.nativeElement,
        'borderBottom',
        'none'
      );
    }

    // Highlight the clicked element.
    this.renderer.setStyle(
      this.el.nativeElement,
      'borderBottom',
      '2px solid black'
    );

    // Update the current highlighted element.
    HighlightOnClickDirective.currentHighlighted = this.el;
  }
}
