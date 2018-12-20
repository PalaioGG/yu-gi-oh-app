import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleable]'
})
export class ToggleableDirective {

  display = true;
  selectedCard = false;

  constructor() { }

  @HostListener('window: resize', ['$event'])
  onResize() {
    if (this.viewIsSmall() && this.selectedCard) {
      this.display = false;
    } else { this.display = true; }
  }

  toggleDeck(): boolean {
    this.display = !this.display;

    return this.display;
  }

  viewIsSmall(): boolean {
    return window.innerWidth < 990;
  }

}
