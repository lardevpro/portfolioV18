import { Component, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-carousel',
	standalone: true,
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss',
	imports: [NgbCarouselModule, FormsModule],
})
export class CarouselComponent {


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
		'assets/images/publicar_playstore.jpg',
		'assets/images/spring_angular.png',
		'assets/images/spring_boot_angular.jpg',
		'assets/images/spring_core_5.jpg',
		'assets/images/spring_data_JPA.jpg',
		'assets/images/test_javascript.jpg',
		'assets/images/test_mysql.jpg',
	];

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}

