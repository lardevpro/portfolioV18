import { Injectable } from '@angular/core';
import { About } from '../models/about';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutModel!:About;

  constructor() { }

  getAboutModel$():Observable <About> {
    this.aboutModel = {
      titleSection: `Sobre Mi`,
      welcome: `¡Bienvenido a Mi Portfolio!`,
      presentation: `Mi nombre es Juan:`,
      imageUrl: `/assets/images/photo.webp`,
      description: `He invertido mi carrera profesional en el ámbito del desarrollo de software, especializándome en entornos 
                    backend con Java Spring Boot, Node.js, bases de datos SQL y soluciones frontend con Angular. A lo largo de mi trayectoria, 
                    he colaborado en proyectos tecnológicos para diferentes sectores, trabajando en estrecha coordinación con equipos de
                    desarrollo, producto y negocio a nivel nacional.`,
      observation: `Mi experiencia incluye el diseño, desarrollo e implementación de funcionalidades en sistemas de gestión 
                    empresarial (ERP), plataformas web y soluciones a medida, adaptadas a las necesidades específicas de cada cliente. He
                    participado en todas las fases del ciclo de vida del software, desde el análisis hasta la puesta en producción, aportando 
                    soluciones eficientes y escalables..
                    `
    };
      return of(this.aboutModel);
    }
}
