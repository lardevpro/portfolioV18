import { Injectable } from '@angular/core';
import { About } from '../models/about';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutModel:About = new About();

  constructor() { }

  getAboutModel$():Observable <About> {
    this.aboutModel = {
      titleSection: `Sobre Mi`,
      welcome: `Bienvenido a mi Portfolio`,
      presentation: `Hola, soy Juan, un apasionado de la programación y la tecnología,`,
      imageUrl: `/assets/images/photo.png`,
      description: `Titulado como técnico superior en desarrollo de 
      aplicaciones multiplataforma con experiencia en proyectos como OPPO 
      Community, utilizando Angular, y en trabajos internos con WordPress. 
      También he trabajado en la configuración personalizada de módulos en el 
      sistema ERP Odoo para Metalistería Madrid.`,
      observation: `Aunque el sector está lleno de jóvenes talentosos, mi experiencia y 
      habilidades como constancia, compromiso, disciplina y toma de decisiones en 
      contextos exigentes me permiten marcar la diferencia y aportar valor a sus 
      proyectos.`
    };
      return of(this.aboutModel);
    }
}
