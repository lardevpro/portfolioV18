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
  // Control del estado del colapso de la navbar
  isNavbarCollapsed = true;

  // Navegación dinámica
  navItems = [
    { label: 'Sobre Mi', link: '' },
    { label: 'Proyectos', link: 'projects' },
    { label: 'Experiencia Profesional', link: 'experience' },
    { label: 'Formación', link: 'education' },
    { label: 'Certificados', link: 'certificates' },
    { label: 'Contacto', link: 'contact' },
  ];

  // Método para abrir o cerrar la navbar
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  // Método para cerrar la navbar cuando se hace clic en un enlace
  closeNavbar() {
    this.isNavbarCollapsed = true;
    const navbarNav = document.getElementById('navbarNav');
    if (navbarNav) {
      navbarNav.classList.remove('show');  // Cierra el menú si está abierto
    }
  }

  // Detecta clics fuera de la barra de navegación para cerrarla
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar-collapse') && !target.closest('.navbar-toggler')) {
      this.closeNavbar();
    }
  }

  
}
