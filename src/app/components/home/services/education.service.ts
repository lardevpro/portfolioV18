import { Injectable } from '@angular/core';
import { Education } from '../models/education';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private education!: Education[];
  
  constructor() { }

  getEducation$(): Observable<Education[]> {
    this.education = [
      {
        title: 'Técnico Superior de Desarrollo de Aplicaciones Multiplataforma',
        institute: 'IES Gregorio Prieto (Valdepeñas)',
        description: `Estudié el Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma
        (DAM) en el Instituto Gregorio Prieto de Valdepeñas.
        Durante este período, adquirí sólidos conocimientos en programación, desarrollo de 
        aplicaciones web y móviles, y diseño de algoritmos eficientes. Aprendí a trabajar en 
        equipo de forma colaborativa y a gestionar proyectos con enfoque en la resolución de 
        problemas complejos. Gracias a mi dedicación y habilidades técnicas, superé todas las 
        asignaturas y proyectos con éxito.`,
        date: 'sep 2021 - dic 2024'
      },
      {
        title: 'Acceso a La Universidad para Mayores de 25 Años',
        institute: 'UNED (Valdepeñas)',
        description: `Este proceso me permitió reforzar mis conocimientos en diversas áreas académicas y desarrollar habilidades 
                      clave como la organización, la autodisciplina y la gestión del tiempo, fundamentales para el estudio autónomo. 
                      Gracias a mi esfuerzo y dedicación, logré superar con éxito las pruebas de acceso, demostrando así mi capacidad para 
                      afrontar retos académicos de manera eficiente.`,
        date: 'sep 2020 - jun 2021'
      }
    ];
    return of(this.education); 
  }
}
