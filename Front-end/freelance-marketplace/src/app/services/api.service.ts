import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  get(url:string , headers ? :any){
    return this.httpClient.get(`${environment.apiUrl}/${url}`, headers);
  }

  post(url:string , body:any , condition ? : any){
    return this.httpClient.post(`${environment.apiUrl}/${url}` , body , condition);
  }

  put(url:string , body:any){
    this.httpClient.put(`${environment.apiUrl}/${url}` , body);
  }

  delete(url:string){
    return this.httpClient.delete(`${environment.apiUrl}/${url}`);
  }

}
