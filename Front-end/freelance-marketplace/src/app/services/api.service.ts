import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }


  get(url : string){
    this.httpClient.get(`${environment.apiUrl}/${url}`);
  }


  post(url : string , body : any){
    this.httpClient.post(`${environment.apiUrl}/${url}` , body)
  }


  put(url: string , body : any){
    this.httpClient.put(`${environment.apiUrl}/${url}` , body)
  }

  delete(url : string){
    this.httpClient.delete(`${environment.apiUrl}/${url}`)
  }

}
