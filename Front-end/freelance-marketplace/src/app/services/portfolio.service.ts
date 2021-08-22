import { environment } from '../../environments/environment';
// import { environment } from './environments/environment.prod';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  token : any;
  constructor(private http:ApiService) { }

  get(){
    return this.http.get(`${environment.apiUrl}/portfolios`);
  }

  post(body:any){
    this.token = localStorage.getItem('token');
    console.log(this.token)
    return this.http.post(`${environment.apiUrl}/portfolios`, body, {'headers': {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${this.token}`
    }})
  }
}


