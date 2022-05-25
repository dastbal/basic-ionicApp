import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

interface User {
  id: string;
  name: string;
  title: string;
  content: string;
  img: string;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  users: User[];
  searchFilter: User[];
  constructor(private router: Router, private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<User[]>('assets/files/customers.json')
      .pipe(map((res: any) => res.data));
  }

  ngOnInit() {
    this.getUsers().subscribe((x) => {
      this.users = x;
      this.searchFilter = this.users;
      console.log('x', x);
    });
  }
  goToHome() {
    this.router.navigate(['/home']);
  }

  onSearchChange(event) {
    const text = event.target.value.toLowerCase();
    this.searchFilter = this.users;
    console.log(text);
    if (text && text.trim() !== '') {
      this.searchFilter = this.users.filter(
        (user) => user.name.toLocaleLowerCase().indexOf(text) > -1
      );
    }
  }

  doRefresh(event) {
    this.getUsers();
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
