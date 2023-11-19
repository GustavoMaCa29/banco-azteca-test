import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  slideOptions = {
    slidesPerView: 1.4,
    centeredSlides: false,
    spaceBetween: 0
  };

  cards = [

      {"title": "Crédito de movilidad", "description": "María Velázquez Gómez", "hour": "11:00 AM"},
      {"title": "Compromiso de pago", "description": "María de los Angeles Ibarra Monterubio", "hour": "1:00 PM"}
  ]

  constructor() {
  }

  ngOnInit() {
  }
}
