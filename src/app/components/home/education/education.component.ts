import {  Component, Input } from '@angular/core';
import { Education } from '../models/education';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',

})

export class EducationComponent {
  @Input() education!:Education[]; 

}
