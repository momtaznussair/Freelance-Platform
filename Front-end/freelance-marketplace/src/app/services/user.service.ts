import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';

@Injectable(
  {providedIn: 'root'}
  )
export class UserService {

  logged = new Subject<boolean>();

  private registerUrl = `${environment.apiUrl}/register`;
  private regSocialUrl = `${environment.apiUrl}/register/socialite`
  private loginUrl = `${environment.apiUrl}/login`;
  private logoutUrl = `${environment.apiUrl}/logout`;

  constructor(private apiService : ApiService , private router : Router)
  {
    this.logged.next(this.isLogged());
  }//end of constructor


  register(body : any)
  {
    return this.apiService.post(this.registerUrl , body)
  }//end of registerUser

  registerWithSocialite(body : any)
  {
    return this.apiService.post(this.regSocialUrl,body);
  }//end of registerUser

  login(body : any)
  {
    this.logged.next(true);
    return this.apiService.post(this.loginUrl, body );
  }//end of loginUser

  logout()
  {
    localStorage.clear();
    this.router.navigateByUrl('/user')
    this.setLoggedStatus(false);
  }//end of logout

  setLoggedStatus(status : boolean)
  {
    return this.logged.next(status);
  }

  getLoggedStatus()
  {
    return this.logged.asObservable();
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  isLogged():boolean
  {
    const token = localStorage.getItem('token');
    if(!token) return false;
    return true;
  }

  isUserFreelancer():boolean
  {
    const freelancerType = localStorage.getItem('freelancerType');
    if(!freelancerType) return false;
    return true;
  }

  isUserClient():boolean
  {
    const clientType = localStorage.getItem('clientType');
    if(!clientType) return false;
    return true;
  }

}
