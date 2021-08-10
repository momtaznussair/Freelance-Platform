// import { environment } from './environments/environment.prod';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PortofolioService {

  constructor(private port:ApiService) { }

  get(){
    return this.port.get(`http://127.0.0.1:8000/api/portfolios`);

  }

  post(body:any){
    return this.port.post("http://127.0.0.1:8000/api/portfolios", body);

  }

   postImage(body:any){
    return this.port.post("http://127.0.0.1:8000/api/portfolios/images", body);

  }


}
