import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-down-nav',
  templateUrl: './scroll-down-nav.component.html',
  styleUrls: ['./scroll-down-nav.component.scss'],
})
export class ScrollDownNavComponent {
  isShiny: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = this.getScrollPosition();
    this.isShiny = scrollPosition >= 50;
  }

  private getScrollPosition(): number {
    return document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}
