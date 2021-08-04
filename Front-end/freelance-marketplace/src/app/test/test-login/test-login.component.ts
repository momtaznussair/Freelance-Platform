import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.component.html',
  styleUrls: ['./test-login.component.css']
})
export class TestLoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  // Generic method to sign out, regardless of Auth provider
  signOut(): void {
  this.authService.signOut();
  }

}
