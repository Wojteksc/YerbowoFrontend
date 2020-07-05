import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const photoUrl = localStorage.getItem('photoUrl');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (photoUrl) {
      this.authService.photoUrl = photoUrl;
    }
  }
}
