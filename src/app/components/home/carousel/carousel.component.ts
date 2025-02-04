import { Component, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule, 
            NgbCarouselModule, 
            FormsModule,
            ImageModule],
  standalone: true,
})
export class CarouselComponent {
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;
  @Input() pauseOnHover = true;
  @Input() pauseOnFocus = true;
  paused = false;

  images = [
    'assets/images/scrum_tecnico.jpg',
    'assets/images/c++_introduccion.jpg',
    'assets/images/crud_spring_boot.jpg',
    'assets/images/html5_css3.jpg',
    'assets/images/introduccion_spring_framework.jpg',
    'assets/images/ionic_moviles.jpg',
    'assets/images/java_desde_cero.jpg',
    'assets/images/java_xml.jpg',
    'assets/images/jekyll_github_pages.jpg',
    'assets/images/junit5.jpg',
    'assets/images/primera_app_spring_boot.jpg',
    'assets/images/spring_boot_angular.jpg',
    'assets/images/spring_core_5.jpg',
    'assets/images/spring_data_JPA.jpg',
    'assets/images/test_javascript.jpg',
    'assets/images/test_mysql.jpg',
  ];

  urls = [
    
  ];

  onSlide(event: NgbSlideEvent) {
    if (event.paused && event.source === NgbSlideEventSource.INDICATOR) {
      this.carousel.cycle();
    }
  }

  togglePaused() {
    this.paused = !this.paused;
    this.paused ? this.carousel.pause() : this.carousel.cycle();
  }
}