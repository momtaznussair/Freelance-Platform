import { UserService } from 'src/app/services/user.service';
import { Injectable , Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userService : UserService) { }

  intercept(req : HttpRequest<any> , next : HttpHandler){
    const tokenizedReq= req.clone({
      setHeaders : {
        Authorization : `Bearer ${this.userService.getToken()}`,
        Accept : 'application/json'
      }
    })
    return next.handle(tokenizedReq);
  }//end of intercept

}//end of class
