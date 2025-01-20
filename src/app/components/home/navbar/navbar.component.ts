import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isUnderlined = false;

  toggleUnderline(event: Event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    this.isUnderlined = !this.isUnderlined;
  }
}
