import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-connection-type',
  templateUrl: './connection-type.component.html',
  styleUrls: ['./connection-type.component.css']
})
export class ConnectionTypeComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }

  user: SocialUser = new SocialUser();
  GoogleLoginProvider = GoogleLoginProvider;
  loggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  username : string = '';
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }


  signOut(): void {
    this.authService.signOut();
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }



}
