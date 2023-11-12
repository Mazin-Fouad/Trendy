import { HighlightOnClickDirective } from './highlight-on-click.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightOnClickDirective', () => {
  let el: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    // Mock ElementRef
    el = { nativeElement: document.createElement('div') } as ElementRef;

    // Mock Renderer2
    renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
  });

  it('should create an instance', () => {
    const directive = new HighlightOnClickDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
