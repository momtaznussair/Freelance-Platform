import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class FreelancerAuthorization implements CanActivate {
  constructor(private userService : UserService , private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isFreelancer = this.userService.isUserFreelancer();
      if(!isFreelancer){
        this.router.navigateByUrl('/user/login')
        return false;
      }

    return true;
  }

}
