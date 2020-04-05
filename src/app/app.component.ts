import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crousorama-front';
  opened = false;

  links = [
    {
      label: 'Actualités',
      url: '/news'
    },
    {
      label: 'Palmarès',
      url: '/palmares'
    },
    {
      label: 'Rechercher',
      url: '/search'
    },
    {
      label: 'Mes actions',
      url: '/my-shares'
    },
    {
      label: 'Calendrier de la bourse',
      url: '/calendar'
    }
  ];

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

  getUrl() {
    return this.router.url;
  }

  toggleSidenav() {
    this.opened = !this.opened;
  }

  navigate(url) {
    this.opened = false;
    this.router.navigate([url]);
  }

  get user() {
    return this.authService.user;
  }
}
