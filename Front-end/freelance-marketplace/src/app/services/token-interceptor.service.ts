import { UserService } from 'src/app/services/user.service';
import { Injectable , Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector : Injector) { }

  intercept(req : any , next : any){
    let userService = this.injector.get(UserService)
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${userService.getToken()}`
      }
    })

    return next.handle(tokenizedReq);

  }//end of intercept

}
