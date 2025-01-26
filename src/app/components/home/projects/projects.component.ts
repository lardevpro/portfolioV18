import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardModule, ButtonModule,SpeedDialModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class ProjectsComponent {
  @Input() projects!:Project[];


  githubImage = 'assets/images/github.png';
  items: MenuItem[] = []; 

  
  navigateToSite(url: string): void {
    window.open(url, '_blank');
  }

  downloadFile(filePath: string, fileName: string): void {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  }
}
