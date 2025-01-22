import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterModule ,CommonModule],
})
export class NavbarComponent {
  isNavbarCollapsed = true;

  // Navegación dinámica
  navItems = [
    { label: 'Sobre Mi', link: '' },
    { label: 'Experiencia Profesional', link: 'experience' },
    { label: 'Formación', link: 'education' },
    { label: 'Certificados', link: 'certificates' },
    { label: 'Contacto', link: 'contact' },
  ];

  closeNavbar() {
    this.isNavbarCollapsed = true;
    const navbarNav = document.getElementById('navbarNav');
    if (navbarNav) {
      navbarNav.classList.remove('show');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar-collapse') && !target.closest('.navbar-toggler')) {
      this.closeNavbar();
    }
  }
}
