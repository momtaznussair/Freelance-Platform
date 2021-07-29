import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged = new Subject<boolean>();
  constructor() {
    this.logged.next(this.islogged());
  }

  login(email : string){
    localStorage.setItem('email' , email);
    this.logged.next(true);
  }

  logout(){
    localStorage.removeItem('email');
    this.logged.next(false);
  }

  setLoggedStatus(status : boolean){
    this.logged.next(status)
  }

  getLoggedStatus(){
    return this.logged.asObservable();
  }




  islogged():boolean{
    const email = localStorage.getItem('email');
    if(!email) return false;
    return true;
  }


}
