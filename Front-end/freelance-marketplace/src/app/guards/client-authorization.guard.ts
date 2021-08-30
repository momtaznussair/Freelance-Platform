import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthorizationGuard implements CanActivate {
  constructor(private userService : UserService , private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isClient = this.userService.isUserClient();
      if(!isClient){
        this.router.navigateByUrl('/user/login')
        return false;
      }

    return true;
  }

}
