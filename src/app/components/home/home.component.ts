import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { AboutComponent } from "./about/about.component";
import { AboutService } from './services/about.service';
import { NavbarComponent } from "./navbar/navbar.component";
import { EducationComponent } from "./education/education.component";
import { EducationService } from './services/education.service';
import { ExperienceComponent } from "./experience/experience.component";
import { ExperienceService } from './services/experience.service';






@Component({
    selector: 'app-home',
    imports: [CarouselComponent,
    AboutComponent,
    NavbarComponent,
    EducationComponent,
    ExperienceComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
})
export class HomeComponent implements OnInit {

  aboutModel!: any;
  educationModel!:any[];
  experienceModel!:any[];

  constructor(
              private aboutService: AboutService,
              private edicationService: EducationService,
              private experienceService: ExperienceService,
  ) {}




  ngOnInit(): void {
    //SECTION About
    this.aboutService.getAboutModel$().subscribe({
      next:a=> {
        this.aboutModel = a
      },
      error:e=> {
        console.error(`Error al cargar About` + e)
      },
      complete: ()=> {
        console.log(`About Cargado --> `+this.aboutModel)
      }
    });


    //SECTION Education
    this.edicationService.getEducation$().subscribe({
      next:e=> {
        this.educationModel = e
      },
      error:e=> {
        console.error(`Error al cargar Education` + e);
      },
      complete: ()=> {
        console.log(`Education Caragado --> `+this.educationModel)
      }
    });

    //SECTION Experience
    this.experienceService.getExperience$().subscribe({
      next:n=> {
        this.experienceModel = n
      },
      error:e=> {
        console.error(`Error al cargar Experience` + e);
      },
      complete:()=> {
        console.log(`Experience Cargado --> `+this.experienceModel)
      }
    });
  }
}
