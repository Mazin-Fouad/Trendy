import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-scroll-down-nav',
  templateUrl: './scroll-down-nav.component.html',
  styleUrls: ['./scroll-down-nav.component.scss'],
})
export class ScrollDownNavComponent {
  @Output() showLogin = new EventEmitter<void>();
  @Output() showRegister = new EventEmitter<void>();

  isShiny: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = this.getScrollPosition();
    this.isShiny = scrollPosition >= 50;
  }

  private getScrollPosition(): number {
    return document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  showRegistrationForm() {
    this.showRegister.emit();
  }

  viewLoginForm() {
    this.showLogin.emit();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
