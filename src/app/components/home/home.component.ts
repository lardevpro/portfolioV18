import { Component, OnInit } from '@angular/core';
import { AboutService } from './services/about.service';
import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { ProjectsService } from './services/projects.service';
import { ContactService } from './services/contact.service';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-home',
    imports: [
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    CarouselComponent,
    ContactComponent
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
  contactModel!:any;

  constructor(
              private aboutService: AboutService,
              private edicationService: EducationService,
              private experienceService: ExperienceService,
              private projectsService: ProjectsService,
              private contactService: ContactService,
  ) {}

  ngOnInit(): void {
    //SECTION About
    this.aboutService.getAboutModel$().subscribe({next:a=> {this.aboutModel = a}});
    //SECTION Education
    this.edicationService.getEducation$().subscribe({next:e=> {this.educationModel = e}});
    //SECTION Experience
    this.experienceService.getExperience$().subscribe({next:n=> {this.experienceModel = n}});
    //SECTION Projects
    this.projectsService.getProjects$().subscribe({next:p=> {this.projectsModel = p}});
    //SECTION Contact
    this.contactService.getContact$().subscribe({next:c=> {this.contactModel = c}});
  }
}
