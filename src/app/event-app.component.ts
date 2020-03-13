import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'event-app-root',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>`,
})
export class EventAppComponent {
  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();

  }

}
