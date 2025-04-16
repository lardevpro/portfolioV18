import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
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
  @Output('copyEmail') eventEmitter = new EventEmitter<string>();
  @Input() minimizado: boolean = false;
  lastScroll = 0;


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

  
  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
