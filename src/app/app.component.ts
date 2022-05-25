import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'customers', url: '/customers', icon: 'people' },
    { title: 'cities', url: '/cities', icon: 'location' },
    { title: 'login', url: '/login', icon: 'log-in' },
  ];
  constructor() {}
}
