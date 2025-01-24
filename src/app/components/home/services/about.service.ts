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
      imageUrl: `/assets/images/photo.png`,
      description: `Técnico superior en desarrollo de 
      aplicaciones multiplataforma con experiencia en proyectos como OPPO 
      Community, utilizando Angular, y en trabajos internos con WordPress. 
      También he trabajado en la configuración personalizada de módulos en el 
      sistema ERP Odoo para Metalistería Madrid.`,
      observation: `Mi experiencia en el mundo laboral me ha dotado de 
      habilidades como constancia, compromiso, disciplina y toma de decisiones en 
      contextos exigentes me permiten marcar la diferencia y aportar valor a sus 
      proyectos.`
    };
      return of(this.aboutModel);
    }
}
