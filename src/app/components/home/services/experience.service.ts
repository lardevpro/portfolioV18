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
      description: `Desarrollo web con Angular en el proyecto OPPO Community, creando soluciones adaptadas a las necesidades del cliente.
                    Implementación y personalización de sistemas ERP Odoo para Metalistería Madrid, optimizando la gestión empresarial.
                    Maquetación y diseño web con WordPress para la empresa Accuro Technology.
                    Resolución de incidencias técnicas y soporte en la documentación de proyectos.
                    Participación en el Hackathon GInPS (Global Innovation in Problem Solving) y eventos tecnológicos.
                    Impartición de una masterclass sobre RPAs en colaboración con Rocketbot®  for RPA.`,
      technologies: ['Angular','Odoo','WordPress', 'Python','HTML', 'CSS', 
                    'JavaScript', 'TypeScript'],
    },{
      company: 'Logintia - Logística y Transporte',
      logo: 'assets/images/kortimed.png',
      position: 'Conductor Profeisonal (internacional)',
      location: 'Córdoba (Andalucía, España)',
      date: 'may 2024 - ago 2024',
      description: `Revisión y mantenimiento de flota de vehículos → Atención al detalle.
                    Gestión y administración de documentación de transporte → Organización.
                    Planificación y optimización de rutas → Gestión del tiempo.
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
      description: `Transporte de mercancías por carretera → Responsabilidad.
                    Coordinación con compañeros → Trabajo en equipo.
                    Interacción clara y profesional con clientes → Atención al cliente.`,
      technologies: ['Transporte', 'Logística', 
      'Conducción', 'Seguridad', 'Mantenimiento','Responsabilidad'],	
    },
  {
    company: 'Taisa Logistcs',
    logo: 'assets/images/repsol.png',
    position:'Conductor Profesional',
    location: 'Madrid (Madrid)',
    date: 'feb 2020 - nov 2020',
    description: `Resolución de problemas ante imprevistos → Gestión de incidencias.
                  Optimización e implementación de mejoras continuas → Pensamiento crítico.
                  Adaptabilidad a retrasos y cambios en rutas sin perder eficiencia → Gestión del estrés.
                  `,
    technologies: ['Producción', 'Automoción', 'Trabajo en equipo', 'Responsabilidad'],
  },
  {
    company: 'Kortimed SRL',
    logo: 'assets/images/repsol.png',
    position:'Conductor Profesional (internacional)',
    location: 'Ribarroja de Turia (Valencia)',
    date: 'abr 2017 - dic 2019',
    description: `Seguimiento de pedidos y entregas → Adaptabilidad.
                  Supervisión de la calidad del servicio → Empatía.
                  Gestión de recursos logísticos → Planificación.`,
    technologies: ['Producción', 'Automoción', 'Trabajo en equipo', 'Responsabilidad'],
  }];
    return of(this.experience);
  }
}
