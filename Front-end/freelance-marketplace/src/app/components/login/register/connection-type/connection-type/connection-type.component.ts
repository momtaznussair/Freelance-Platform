import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider , FacebookLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-connection-type',
  templateUrl: './connection-type.component.html',
  styleUrls: ['./connection-type.component.css']
})
export class ConnectionTypeComponent implements OnInit {

  constructor(private authService: SocialAuthService , private router : Router , private userService : UserService) { }

  user: SocialUser = new SocialUser();
  GoogleLoginProvider = GoogleLoginProvider;
  loggedIn: boolean = false;
  responseChecked : any;

  ngOnInit(): void {

    //check if user logged
    if(this.userService.isLogged())
    {
      this.userService.logout();
    }

    this.authService.authState.subscribe(user => {
      this.loggedIn = (user != null);
      this.user = user;
      console.log(this.user);

      //check email
      this.userService.checkEmail(this.user).subscribe(response=>{

        this.responseChecked = response;
        console.log(this.responseChecked);
        if(this.responseChecked.data != false){
          localStorage.setItem('token' , this.responseChecked.data.token);
          localStorage.setItem('user_data' , JSON.stringify(this.responseChecked.data.user));
          localStorage.setItem('user_id' , this.responseChecked.data.user.user_id);
          if(this.responseChecked.data.user.client_id)
          {
            localStorage.setItem('client_id' , this.responseChecked.data.user.client_id);
          }else{
            localStorage.setItem('freelancer_id' , this.responseChecked.data.user.freelancer_id);
          }

          //redirect user
          if(this.responseChecked.data.user.client_id != null)
          {
            localStorage.setItem('clientType' , 'client');
            this.router.navigateByUrl('/client/main');
          }
          else if(this.responseChecked.data.user.freelancer_id != null)
          {
            localStorage.setItem('freelancerType' , 'freelancer');
            this.router.navigateByUrl('/freelancer');
          }

        }else{
          localStorage.setItem('user_data' ,JSON.stringify(this.user));
          this.router.navigateByUrl('/user/signup/register');
        }

      })//End Of Check Email

    });
  }

  username : string = '';
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }


  signOut(): void {
    this.authService.signOut();
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
