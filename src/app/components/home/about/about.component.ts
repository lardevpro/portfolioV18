import { Component, Input } from '@angular/core';
import { About } from '../models/about';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() about!: About;
  
}
