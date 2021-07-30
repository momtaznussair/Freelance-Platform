import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  get(url:string){
    return this.httpClient.get(url);
  }

  post(url:string , body:any , condition ? : any){
    return this.httpClient.post<any>(url , body , condition);
  }

  put(url:string , body:any){
    this.httpClient.put(url , body);
  }

  delete(url:string){
    return this.httpClient.delete(url);
  }

}
