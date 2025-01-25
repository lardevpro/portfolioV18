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
      repoUrl: 'https://github.com/lardevpro/spring-angular',
      websiteUrl: 'https://api-angular-spring.web.app',
      imageUrl: 'assets/images/api_rest_img.jpeg',
      gitHubUrl: 'https://github.com/lardevpro/srping-angular',
      downloadUrl: '',
    },
    {
      title: 'Street Figther',
      subtitle: 'Java SE',
      description: `
        Desarrollé una aplicación que conecta un frontend Angular
        con una API REST en Spring Boot mediante peticiones HTTP.
        Gestiona datos temporalmente sin usar base de datos.
        El proyecto demuestra la interacción eficiente entre frontend y backend.
      `,
      repoUrl: 'https://github.com/lardevpro/spring-angular',
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
