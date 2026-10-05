import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar,Footer } from '@components';

@Component({
  imports: [RouterOutlet, Navbar, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('phoenix-paradox-website');
}
