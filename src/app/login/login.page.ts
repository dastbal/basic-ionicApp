import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  token = 'fnjnfanjrnjafr452';
  constructor(private route: Router) {}

  ngOnInit() {}
  login() {
    localStorage.setItem('token', this.token);
    this.route.navigate(['/']);
  }
}
