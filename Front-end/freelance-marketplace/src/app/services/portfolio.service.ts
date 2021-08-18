import { environment } from '../../environments/environment';
// import { environment } from './environments/environment.prod';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

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

  delete(id:number){
    return this.http.delete("http://127.0.0.1:8000/api/portfolios/delete/"+id, {'headers': {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${this.token}`
    }});
  }

}

