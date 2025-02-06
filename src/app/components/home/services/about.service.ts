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
      description: `Técnico Superior en Desarrollo de Aplicaciones Multiplataforma recién titulado.
                    Fui participante en el Hackathon GInPS 2024, con el reto proporcionado por el grupo Aena.
                    Gracias a mi experiencia laboral, he desarrollado habilidades clave como la constancia, el compromiso,
                    la disciplina y la toma de decisiones en entornos exigentes.`,
      observation: `He dado soluciones a retos en el proyecto OPPO Community con Angular además de configurar y 
                    generar módulos personalizados para  Metalisterías Madrid con el  sistemas de gestión empresarial (ERP)  Odoo.
                    Estoy abierto a aprender cualquier tipo de tecnología puesto que este sector me apasiona.
                    Actualmente me sigo formando tanto en backend con java (Spring Boot) como en frontend (Angular) para tener una visión
                    más amplia del sector.
                    `
    };
      return of(this.aboutModel);
    }
}
