import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { AboutComponent } from "./about/about.component";
import { AboutService } from './services/about.service';
import { About } from './models/about';
import { error } from 'console';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  aboutModel: About = new About();

  constructor(private aboutService: AboutService) {}


  ngOnInit(): void {
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
  }
}
