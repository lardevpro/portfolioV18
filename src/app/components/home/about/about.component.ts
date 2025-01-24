import { Component, Input } from '@angular/core';
import { About } from '../models/about';



@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    standalone: true,
})
export class AboutComponent {
  @Input() about!: About;
  
}
