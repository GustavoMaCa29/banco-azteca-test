import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  slideOptions = {
    slidesPerView: 1.3,
    centeredSlides: false,
    // spaceBetween: 15,
  };

  valueRange1 = 1;
  maxValueRange1 = 2;

  valueRange2 = '500.00';
  maxValueRange2 = '4,000.00';

  currencyRange2 = "$"

  cards = [

      {"title": "Crédito de movilidad", "description": "María Velázquez Gómez", "hour": "11:00 AM"},
      {"title": "Compromiso de pago", "description": "María de los Angeles Ibarra Monterubio", "hour": "1:00 PM"}
  ]

  constructor() {
  }

  ngOnInit() {
  }
}
