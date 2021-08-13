import { environment } from '../../environments/environment';
// import { environment } from './environments/environment.prod';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private port:ApiService) { }

  get(){
    return this.port.get(`${environment.apiUrl}/portfolios`);
  }

  post(body:any){
    return this.port.post(`${environment.apiUrl}/portfolios`, body);
  }

  postImage(body:any){
    return this.port.post(`${environment.apiUrl}/portfolios/images`, body);
  }


}
