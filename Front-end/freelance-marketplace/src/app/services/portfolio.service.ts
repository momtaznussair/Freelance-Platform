import { environment } from '../../environments/environment';
// import { environment } from './environments/environment.prod';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private port:ApiService) { }

  get():Observable<any>{
    return this.port.get(`${environment.apiUrl}/portfolios`);
  }

  post(body:any){
    return this.port.post(`${environment.apiUrl}/portfolios`, body);
  }

  delete(id:number){
    return this.port.delete(`http://127.0.0.1:8000/api/portfolios/delete/`+id);
  }

}
