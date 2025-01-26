import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../models/experience';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-experience',
  imports: [CommonModule,
            AccordionModule
            ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() experiences!:Experience[];
  openedPanels: number[] = [0];

  splitDescription(description: string): string[] {
    return description
      .split('.')
      .map(item => item.trim())  // Eliminamos los espacios en blanco al inicio y final
      .filter(item => item.length > 0); // Eliminamos los elementos vacíos
  }
}
