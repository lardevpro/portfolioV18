import { Component, Input } from '@angular/core';
import { About } from '../models/about';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';




@Component({
    selector: 'app-about',
    imports: [
      CardModule,
      ImageModule,
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    standalone: true,
})
export class AboutComponent {
  @Input() about!: About;
  
}
