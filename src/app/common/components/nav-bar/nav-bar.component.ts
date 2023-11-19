import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {

  tabs: any;
  selected: number = 0;
  constructor(private router: Router) { }

  ngOnInit() {
    this.generateTabs();
  }

  generateTabs() {
    this.tabs = [
      {
        label: 'Inicio',
        icon: 'home-outline',
        url:'home'
      },
      {
        label: 'Agenda',
        icon: 'folder-outline',
        url:'measurements'
      },
      {
        label: 'Salud',
        icon: 'home-outline',
        url:''
      },
      {
        label: 'Gestión',
        icon: 'folder-outline',
        url:'management'
      },
      {
        label: 'SES',
        icon: 'home-outline',
        url:'ses'
      },
    ]
  }

  route(url: any, i: number) {
    this.selected = i;
    this.router.navigate([url]);
  }

}
