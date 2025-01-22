import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService  {
  experience?: Experience[];

  constructor() { }

  getExperience$():Observable <Experience[]> {
    this.experience = [{
      company: 'Accuro Technology',
      location: 'Las Rozas de Madrid (Madrid)',
      logo: 'assets/images/accuro.png',
      date: 'sep 2024 - actualidad',
      position: 'Asistente de Desarrollo de Software y Sistemas',
      description: `Apoyo en el desarrollo frontend de aplicaciones web 
      usando Angular.Colaboración en la implementación y personalización de sistemas ERP.
      Maquetación y diseños de sitios web en WordPress.
      Resolución de incidencias técnicas y soporte en la documentación.`,
      technologies: ['Angular','Odoo','WordPress', 'Python','HTML', 'CSS', 
                    'JavaScript', 'TypeScript'],
    },{
      company: 'Kortimed',
      logo: 'assets/images/kortimed.png',
      position: 'Conductor Profeisonal',
      location: 'Riba Roja de Túria (Valencia)',
      date: '2015 - 2018',
      description: `Transporte de productos alimenticios en cisternas acondicionadas de gran 
      tonelaje.`,
      technologies: ['Transporte', 'Logística', 
      'Conducción', 'Seguridad', 'Mantenimiento','Responsabilidad'],	
    },
  {
    company: 'Repsol SA',
    logo: 'assets/images/repsol.png',
    position:'Encargado de Estación de Servicios',
    location: 'Ciudad Real (Ciudad Real)',
    date: '2015 - 2018',
    description: `Encargado de tienda y repostaje de cobustibles en estación de servicio Repsol.`,
    technologies: ['Producción', 'Automoción', 'Trabajo en equipo', 'Responsabilidad'],
  }];
    return of(this.experience);
  }
}
