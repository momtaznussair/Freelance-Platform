import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private api:ApiService) { }
  get(url : string):Observable<any>{
    return this.api.get(`${environment.apiUrl}/${url}`)
  }
  post(url : string,body:any):Observable<any>{
    return this.api.post(`${environment.apiUrl}/${url}`,body)
  }
}
