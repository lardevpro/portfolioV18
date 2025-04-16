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
    'assets/images/scrum_tecnico.webp',
    'assets/images/c++_introduccion.webp',
    'assets/images/crud_spring_boot.webp',
    'assets/images/html5_css3.webp',
    'assets/images/introduccion_spring_framework.webp',
    'assets/images/ionic_moviles.webp',
    'assets/images/java_desde_cero.webp',
    'assets/images/java_xml.webp',
    'assets/images/jekyll_github_pages.webp',
    'assets/images/junit5.webp',
    'assets/images/primera_app_spring_boot.webp',
    'assets/images/spring_boot_angular.webp',
    'assets/images/spring_core_5.webp',
    'assets/images/spring_data_JPA.webp',
    'assets/images/test_javascript.webp',
    'assets/images/test_mysql.webp',
    'assets/images/accenture_java.webp',
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