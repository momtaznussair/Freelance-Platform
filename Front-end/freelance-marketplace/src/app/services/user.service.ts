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
  }

  register(body : any){
    return this.apiService.post(this.registerUrl , body)
  }

  login(body : any){
    return this.apiService.post(this.registerUrl , body , {withCredentials:true});
  }

  // login(email : string){
  //   localStorage.setItem('email' , email);
  //   this.logged.next(true);
  // }

  logout(){
    localStorage.removeItem('token');
    this.logged.next(false);
  }

  setLoggedStatus(status : boolean){
    this.logged.next(status)
  }

  getLoggedStatus(){
    return this.logged.asObservable();
  }


  getToken(){
    return localStorage.getItem('token');
  }

  isLogged():boolean{
    const email = localStorage.getItem('email');
    if(!email) return false;
    return true;
  }


}
