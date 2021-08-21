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
      // setHeaders : {
      //   Authorization : `Bearer ${this.userService.getToken()}`,
      //   Accept : 'application/json'

        //header for countries and cities
        // Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtb210YXpfbnVzc2FpckB5YWhvby5jb20iLCJhcGlfdG9rZW4iOiJZbUJNQnVfZUE5OVB5dlJ3bTFWRlNJWWZYQkZ0WjR6cmJ1UTMzakJrYUQ5N2d6OVk5eEJacVkzME5SQjZFU2J4OFU0In0sImV4cCI6MTYyNzkyNjAzNH0.BiJp1Za9pdFSZOLlKtU3ktU5TIILqTmpzbJS1CvkkSU`,
      // }
    })
    return next.handle(tokenizedReq);
  }//end of intercept

}//end of class
