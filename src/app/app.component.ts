import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crousorama-front';
  opened = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  shouldDisplayToolbar() {
    return this.router.url !== '/';
  }

  toggleSidenav() {
    this.opened = !this.opened;
  }

  get user() {
    return this.authService.user;
  }
}
