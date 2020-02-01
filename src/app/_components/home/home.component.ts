import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.currentUserObservable.subscribe((loggedIn) => {
      if (loggedIn) {
        this.loggedIn = true;
      }
    });
  }

  loginWithGoogle() {
    if (this.loggedIn) {
      return this.router.navigate(['/search']);
    }
    this.authService.doGoogleLogin().then(() => {
      this.router.navigate(['/search']);
    });
  }

}
