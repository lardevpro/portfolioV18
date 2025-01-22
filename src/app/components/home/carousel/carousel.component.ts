import { Component, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule, NgbCarouselModule, FormsModule],
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
    'assets/images/jekyll_github_pages.jpg'
  ];

  onSlide(event: NgbSlideEvent) {
    if (event.paused && event.source === NgbSlideEventSource.INDICATOR) {
      this.carousel.cycle();
    }
  }

  togglePaused() {
    this.paused = !this.paused;
    if (this.paused) {
      this.carousel.pause();
    } else {
      this.carousel.cycle();
    }
  }
}