import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class ProjectsComponent {
  githubImage = 'assets/images/github.png';

  projects = [
    {
      title: 'API REST',
      subtitle: 'Spring - Angular',
      description: `
        Desarrollé una aplicación que conecta un frontend Angular
        con una API REST en Spring Boot mediante peticiones HTTP.
        Gestiona datos temporalmente sin usar base de datos.
        El proyecto demuestra la interacción eficiente entre frontend y backend.
      `,
      websiteUrl: 'https://api-angular-spring.web.app',
      imageUrl: 'assets/images/api_rest_img.jpeg',
      gitHubUrl: 'https://github.com/lardevpro/srping-angular',
      downloadUrl: '',
    },
    {
      title: 'Street Figther',
      subtitle: 'Java SE',
      description: `E este proyecto le tengo mucho cariño por que el juego de Street Figther es uno de mis favoritos.
      fue creado en Java SE que y debido a su éxito, fue utilizado para promocionar
      el curso del centro educativo (archivo .jar para descargar).
      `,
      websiteUrl: '',
      imageUrl: 'assets/images/street_fighter_prject.jpg',
      gitHubUrl: 'https://github.com/lardevpro/Street-Figther',
      downloadUrl: 'https://drive.google.com/file/d/12gwWbLQ4N5BiV2zIijxaZbUACyE3Z6Qw/view?usp=sharing',
    }
  ];

  navigateToSite(url: string): void {
    window.open(url, '_blank');
  }

  downloadFile(filePath: string, fileName: string): void {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  }
}
