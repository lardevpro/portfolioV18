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
          Desarrollé una aplicación que conecta el frontend, desarrollado en Angular, con una API REST en Spring Boot 
          mediante peticiones HTTP. La aplicación gestiona datos temporalmente sin el uso de una base de datos. 
          Este proyecto demuestra una interacción eficiente entre el frontend y el backend.
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
        Crear este juego en Java SE con Java Swing fue todo un reto. Debido a su éxito, el profesor lo utilizó para 
        promocionar el siguiente curso en otros centros educativos donde no se impartían estos ciclos. Aquí dejo el archivo
        .jar para que puedas probarlo.
        (Archivo .jar disponible para descargar).
        `,
        websiteUrl: 'https://www.youtube.com/watch?v=wxjLiR8M8uw',
        imageUrl: 'assets/images/street_fighter_prject.jpg',
        gitHubUrl: 'https://github.com/lardevpro/Street-Figther-Maven',
        downloadUrl: 'assets/games/StreetFighter-0.0.1-SNAPSHOT.jar',
      },
      {
        title: 'PoKemon ',
        subtitle: 'Android Studio - Java ',
        description: `
        Juego de memoria desarrollado en Android Studio donde los jugadores deben emparejar cartas de Pikachu.
        Incorpora captura de fotos, sonidos, animaciones y manejo de hilos para una experiencia interactiva. 
        Utiliza almacenamiento local para guardar puntajes y configuraciones.
        (Pronto dispobible en para descargar).
        `,
        websiteUrl: 'https://youtu.be/D6yzhVNGWMU',
        imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/11/pikachu-pokemon-escarlata-purpura-2888180.jpg?tf=1200x',
        gitHubUrl: '',
        downloadUrl: '',
      },
    ];
    return of(this.projects);
  }
}
