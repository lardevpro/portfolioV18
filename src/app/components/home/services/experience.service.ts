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
      position: 'Desarrollador de Software y Sistemas',
      description: `Creando soluciones para el desarrollo web usando Angular en el proyecto OPPO Community.
                    Implementación y personalización de sistemas ERP Odoo para el proyecto Metalistería Madrid.
                    Maquetación y diseñando de sitios web en WordPress para la empresa Accuro Technology.
                    Solucioné incidencias técnicas y brindandé soporte en la documentación.
                    Participé en un Hackathon GInPS (Global Innovation in Problem Solving) y en algunos eventos de tecnología.
                    Hice una masterclass sobre el dominio e implementación de RPAs, impartida por la compañía Rocket® Host Access for RPA.`,
      technologies: ['Angular','Odoo','WordPress', 'Python','HTML', 'CSS', 
                    'JavaScript', 'TypeScript'],
    },{
      company: 'Logintia - Logística y Transporte',
      logo: 'assets/images/kortimed.png',
      position: 'Conductor Profeisonal (internacional)',
      location: 'Córdoba (Andalucía, España)',
      date: 'may 2024 - ago 2024',
      description: `Revisando y manteniendo la flota de vehículos.
                    Gestionando y administrando la documentación de transporte.
                    Gestionando el tiempo y la planificando Rutas.
                    `,
      technologies: ['Transporte', 'Logística', 
      'Conducción', 'Seguridad', 'Mantenimiento','Responsabilidad'],	
    },
    {
      company: 'Redur',
      logo: 'assets/images/kortimed.png',
      position: 'Conductor Profeisonal',
      location: 'Madrid (Madird)',
      date: 'jun 2023 - ago 2023',
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
    date: 'feb 2020 - nov 2020',
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
    date: 'abr 2017 - dic 2019',
    description: `Gestión de documentación.
                  Encargado de mecánica y mantenimiento de vehiculos.
                  Conducción segura y cumplimiento de las normas de circulación.`,
    technologies: ['Producción', 'Automoción', 'Trabajo en equipo', 'Responsabilidad'],
  }];
    return of(this.experience);
  }
}
