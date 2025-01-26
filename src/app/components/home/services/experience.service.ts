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
      date: 'sep. 2024 -dic. 2024',
      position: 'Asistente de Desarrollo de Software y Sistemas',
      description: `Apoyo en el desarrollo frontend de aplicaciones web 
      usando Angular.Colaboración en la implementación y personalización de sistemas ERP.
      Maquetación y diseños de sitios web en WordPress.
      Resolución de incidencias técnicas y soporte en la documentación.`,
      technologies: ['Angular','Odoo','WordPress', 'Python','HTML', 'CSS', 
                    'JavaScript', 'TypeScript'],
    },{
      company: 'Logintia - Logística y Transporte',
      logo: 'assets/images/kortimed.png',
      position: 'Conductor Profeisonal (internacional)',
      location: 'Córdoba (Andalucía, España)',
      date: 'may. 2024 - ago. 2024',
      description: `Revisión y mantenimiento de flota de vehículos.
                    Gestion administrativa de documentación de transporte.
                    Gestión del Tiempo y Planificación de Rutas.
                    `,
      technologies: ['Transporte', 'Logística', 
      'Conducción', 'Seguridad', 'Mantenimiento','Responsabilidad'],	
    },
    {
      company: 'Redur',
      logo: 'assets/images/kortimed.png',
      position: 'Conductor Profeisonal',
      location: 'Madrid (Madird)',
      date: 'jun. 2023 - ago. 2023',
      description: `Transporte de mercancías por carretera.
                    Gestión del Tiempo y Planificación de Rutas.
                    Revisión y mantenimiento de flota de vehículos.`,
      technologies: ['Transporte', 'Logística', 
      'Conducción', 'Seguridad', 'Mantenimiento','Responsabilidad'],	
    },
  {
    company: 'Taisa Logistcs',
    logo: 'assets/images/repsol.png',
    position:'Conductor Profesional',
    location: 'Madrid (Madrid)',
    date: 'feb. 2020 - nov. 2020',
    description: `Conducción segura y cumplimiento de las normas de circulación.
                  Mantenimiento de vehiculos.
                  Gestión de documentación de transporte.
                  `,
    technologies: ['Producción', 'Automoción', 'Trabajo en equipo', 'Responsabilidad'],
  },
  {
    company: 'Kortimed SRL',
    logo: 'assets/images/repsol.png',
    position:'Conductor Profesional (internacional)',
    location: 'Ribarroja de Turia (Valencia)',
    date: 'abr. 2017 - dic. 2019',
    description: `Gestión de documentación.
                  Encargado de mecánica y mantenimiento de vehiculos.
                  Conducción segura y cumplimiento de las normas de circulación.`,
    technologies: ['Producción', 'Automoción', 'Trabajo en equipo', 'Responsabilidad'],
  }];
    return of(this.experience);
  }
}
