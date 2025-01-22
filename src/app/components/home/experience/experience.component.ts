import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../models/experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() experiences!:Experience[];

  splitDescription(description: string): string[] {
    return description
      .split('.')
      .map(item => item.trim())  // Eliminamos los espacios en blanco al inicio y final
      .filter(item => item.length > 0); // Eliminamos los elementos vacíos
  }
}
