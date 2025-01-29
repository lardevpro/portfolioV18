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
      description: `Técnico Superior en Desarrollo de Aplicaciones Multiplataforma con experiencia en proyectos como OPPO 
      Community, utilizando Angular, y en trabajos internos con WordPress. También he trabajado en la configuración y 
      personalización de módulos en el sistema ERP Odoo para Metalistería Madrid.
                    Participante en el Hackathon GInPS 2024, con el reto proporcionado por el grupo Aena (ver en certificados).
                    Actualmente, me encuentro cursando una especialización en Angular avanzado para seguir ampliando mis 
                    conocimientos, aunque no me importaría aprender otras tecnologías, ya que este sector me apasiona.
                    Mi experiencia en el mundo laboral me ha dotado de habilidades como constancia, compromiso, disciplina y 
                    toma de decisiones en contextos exigentes, lo que me permite marcar la diferencia y aportar valor a sus
                    proyectos.`,
      observation: `Mi experiencia en el mundo laboral me ha dotado de habilidades como constancia, compromiso, disciplina y toma de
                    decisiones en contextos exigentes, lo que me permite marcar la diferencia y aportar valor a sus proyectos.`
    };
      return of(this.aboutModel);
    }
}
