import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id: any;
  profile: any;
  constructor(private router: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('profileId');
    console.log(this.id);
    this.getUsers().subscribe((users) => {
      // eslint-disable-next-line eqeqeq
      this.profile = users.filter((user) => user.id == this.id);
      console.log(this.profile);
    });
  }
  getUsers() {
    return this.http
      .get('assets/files/customers.json')
      .pipe(map((res: any) => res.data));
  }
}
