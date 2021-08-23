import { UserService } from 'src/app/services/user.service';
import { Injectable , Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userService : UserService) { }
  intercept(req : HttpRequest<any> , next : HttpHandler){

    // check if it's get countries and cities domain
    if (req.url.search('www.universal-tutorial.com') != -1)
    {
      console.log('countries: req')
      console.log(req);
      return next.handle(req);
    }
    console.log('shit shit');
    let headers = {};
    let userToken = this.userService.getToken();

    // check if user token exists
    if (userToken != null)
    {
        headers = {
          Authorization : `Bearer ${this.userService.getToken()}`,
          Accept : 'application/json'
        };
    }

    let tokenizedReq= req.clone({
      setHeaders : headers
    })
    console.log('user token: ');
    console.log(userToken);
    console.log('headers: ');
    console.log(headers);
    console.log(tokenizedReq);
    return next.handle(tokenizedReq);
  }//end of intercept
 
}//end of class