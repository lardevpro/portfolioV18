import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { AboutComponent } from "./about/about.component";
import { AboutService } from './services/about.service';
import { About } from './models/about';
import { error } from 'console';
import { NavbarComponent } from "./navbar/navbar.component";
import { EducationComponent } from "./education/education.component";
import { EducationService } from './services/education.service';
import { Education } from './models/education';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, AboutComponent, NavbarComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  aboutModel!: About;
  educationModel!:Education[];

  constructor(private aboutService: AboutService,
              private edicationService: EducationService,
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
        console.log(`About Cargado`)
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
        console.log(`Education Caragado`)
      }
    });
  }
}
