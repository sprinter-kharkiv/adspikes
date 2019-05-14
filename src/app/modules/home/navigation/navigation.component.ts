import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent {

  subnavExpanded = false;

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.hideSubNav();
    }
  }

  toggleSubNav(): void {
    this.subnavExpanded = !this.subnavExpanded;
  }

  hideSubNav(): void {
    this.subnavExpanded = false;
  }

}
