import { Component, Inject } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  // Inject the authentication service into your component through the constructor
  //constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
  constructor(public auth: AuthService) {}
  isAuthenticated$ = this.auth.isAuthenticated$
  //constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
  //constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}
