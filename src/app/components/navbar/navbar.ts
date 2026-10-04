import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
}
