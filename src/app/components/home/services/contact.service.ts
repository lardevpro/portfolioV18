import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacModel?:Contact;








    getContact$():Observable <Contact> {

      this.contacModel = {
        title: 'Portfolio',
        copyright: '© 2025 Juan Gabriel Lara',
        cpyrigthtext: 'Todos los derechos reservados',
        urlLinkedin: 'https://www.linkedin.com/in/lardevpro/',
        urlGithub :'https://github.com/lardevpro',
        urlMail:'mailto:lardevpro@gmail.com',
        urlCurriculum: 'https://rxresu.me/lardevpro/desarrollador-de-software',
        email: 'lardevpro@gmail.com',
        cvImage: 'assets/images/cv_icono.png',
        linkedinImage: 'assets/images/linkedin.png',
        githubImage: 'assets/images/github.png',
        mailImage: 'assets/images/mail.png',
        sendEmailTooltip: 'Envíame un correo',
        linkedinTooltip: 'Visita mi perfil de LinkedIn',
        githubTooltip: 'Visita mi perfil de GitHub',
        mailTooltip: 'Envíame un correo',
        copyEmailTooltip: 'Copiar email al portapapeles',
        cvTooltip: 'Descarga mi CV',
        };
        return of(this.contacModel);
    }
}


