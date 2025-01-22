import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,
})
export class ContactComponent {

  title  = 'Portfolio';
  name  = 'Juan Gabriel Lara';
  urlLinkedin  = 'https://www.linkedin.com/in/lardevpro/';
  urlGithub  = 'https://github.com/lardevpro';
  urlMail  = 'mailto:lardevpro@gmail.com';
  urlCurriculum  = 'https://rxresu.me/lardevpro/desarrollador-de-software';
  email  = 'lardevpro@gmail.com';


  cvImage = 'assets/images/cv_icono.png';
  linkedinImage = 'assets/images/linkedin.png';
  githubImage = 'assets/images/github.png';
  mailImage = 'assets/images/mail.png';


  sendEmailTooltip = 'Envíame un correo';
  linkedinTooltip = 'Visita mi perfil de LinkedIn';
  githubTooltip = 'Visita mi perfil de GitHub';
  mailTooltip = 'Envíame un correo';
  copyEmailTooltip = 'Copiar email al portapapeles';
  cvTooltip = 'Descarga mi CV';

  copyEmail(): void {
    navigator.clipboard.writeText(this.email).then(() => {
      alert('Correo electrónico "lardevpro@gmail.com" copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el correo electrónico: ', err);
    });
  }

}
