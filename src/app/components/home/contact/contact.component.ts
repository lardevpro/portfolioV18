import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { Contact } from '../models/contact';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';





@Component({
  selector: 'app-contact',
  imports: [EditorModule, InputTextModule,
            FormsModule, CommonModule,
            ToastModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,
  providers: [MessageService]
})
export class ContactComponent {
  @Input() contact!:Contact;

  constructor(private messageService: MessageService) { }

  text?:string;
  name?:string;
  company?:string;
  email?:string;
  message?:string;
  subject?:string;



  


  copyEmail(): void {
    navigator.clipboard.writeText(this.contact.email!).then(() => {
      alert('Correo electrónico "lardevpro@gmail.com" copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el correo electrónico: ', err);
    });
  }


  onSubmit() {
    // Validación de los campos del formulario
    if (!this.name) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'El nombre es obligatorio.'});
      console.log('Nombre vacío');
    }
    if (!this.email || !this.isValidEmail(this.email)) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Ingresa un correo válido.'});
      console.log('Correo no válido');
    }
    if (!this.subject) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'El asunto es obligatorio.'});
      console.log('Asunto vacío');
    }
    if (!this.text || this.text.length < 100) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'El mensaje debe tener al menos 100 caracteres.'});
      console.log('Mensaje corto');
    } 
  
    // Si todo está bien, puedes enviar el formulario
    if (this.name && this.email && this.subject && this.text && this.text.length >= 100 && this.text.split(' ').length >= 10) {
      this.messageService.add({severity: 'success', summary: 'Correo Enviado', detail: 'Tu mensaje ha sido enviado correctamente.', life: 3000});
      console.log('Formulario enviado');
  
      // Limpiar los campos después del envío
      this.name = '';
      this.email = '';
      this.subject = '';
      this.text = '';
    }
  }
  
  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
