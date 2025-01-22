import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../models/experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  @Input() experiences!:Experience[];

  constructor() { } 
  ngOnInit(): void {
    console.log('LLega '+this.experiences);
  }
}
