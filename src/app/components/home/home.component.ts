import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { AboutComponent } from "./about/about.component";
import { AboutService } from './services/about.service';
import { NavbarComponent } from "./navbar/navbar.component";
import { EducationComponent } from "./education/education.component";
import { EducationService } from './services/education.service';
import { ExperienceComponent } from "./experience/experience.component";
import { ExperienceService } from './services/experience.service';
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectsService } from './services/projects.service';

@Component({
    selector: 'app-home',
    imports: [
    CarouselComponent,
    AboutComponent,
    NavbarComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent, 
    ProjectsComponent,
  ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
})
export class HomeComponent implements OnInit {

  aboutModel!: any;
  educationModel!:any[];
  experienceModel!:any[];
  projectsModel!:any[];

  constructor(
              private aboutService: AboutService,
              private edicationService: EducationService,
              private experienceService: ExperienceService,
              private projectsService: ProjectsService,
  ) {}

  ngOnInit(): void {
    //SECTION About
    this.aboutService.getAboutModel$().subscribe({next:a=> {this.aboutModel = a}});
    //SECTION Education
    this.edicationService.getEducation$().subscribe({next:e=> {this.educationModel = e}});
    //SECTION Experience
    this.experienceService.getExperience$().subscribe({next:n=> {this.experienceModel = n}});
    //SECTION Projects
    this.projectsService.getProjects$().subscribe({next:p=> {this.projectsModel = p
      console.log(this.projectsModel);
    }});
  }
}
