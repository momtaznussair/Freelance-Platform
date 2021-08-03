import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';

@Injectable(
  {providedIn: 'root'}
  )
export class UserService {

  logged = new Subject<boolean>();

  private registerUrl = `${environment.apiUrl}/register`;
  private loginUrl = `${environment.apiUrl}/login`;
  private logoutUrl = `${environment.apiUrl}/logout`;

  constructor(private apiService : ApiService)
  {
    this.logged.next(this.isLogged());
  }//end of constructor

  register(body : any)
  {
    return this.apiService.post(this.registerUrl , body)
  }//end of registerUser

  login(body : any)
  {
    return this.apiService.post(this.loginUrl, body );
  }//end of loginUser

  logout()
  {
    localStorage.removeItem('token');
    this.logged.next(false);
  }//end of logout

  setLoggedStatus(status : boolean)
  {
    this.logged.next(status)
  }

  getLoggedStatus(){
    return this.logged.asObservable();
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogged():boolean{
    const token = localStorage.getItem('token');
    if(!token) return false;
    return true;
  }
}
