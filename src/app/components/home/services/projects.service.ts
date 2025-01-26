import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects!: Project [];


  constructor() { }

  getProjects$(): Observable <Project[]> {

    this.projects = [
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
        description: `
        Fue todo un reto crear este juego en Java SE con JavaSwing. Debido a su éxito, el 
        profesorado lo utilizó para promocionar el siguiente curso en otros centros 
        de estudio donde no se impartían estos ciclos. (archivo .jar disponible para descargar).
        `,
        websiteUrl: 'https://www.linkedin.com/posts/lardevpro_me-alegra-comunicar-que-de-entre-todos-los-activity-7195437767886045184-eeu4?utm_source=share&utm_medium=member_desktop',
        imageUrl: 'assets/images/street_fighter_prject.jpg',
        gitHubUrl: 'https://github.com/lardevpro/Street-Figther-Maven',
        downloadUrl: 'assets/games/StreetFighter-0.0.1-SNAPSHOT.jar',
      }
    ];
    return of(this.projects);
  }
}
