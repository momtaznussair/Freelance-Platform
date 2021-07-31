import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged = new Subject<boolean>();

  private registerUrl = '';
  private loginUrl = '';
  constructor(private apiService : ApiService) {
    this.logged.next(this.isLogged());
  }//end of constructor

  register(body : any)
  {
    return this.apiService.post(this.registerUrl , body)
  }//end of registerUser

  login(body : any)
  {
    return this.apiService.post(this.loginUrl , body , {withCredentials:true});
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

  isLogged(){
    const token = localStorage.getItem('token');
    if(!token) return false;
    return true;
  }
}
