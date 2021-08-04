import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  get(url:string , headers ? :any){
<<<<<<< HEAD
    return this.httpClient.get(url , headers);
  }

  post(url:string , body:any , condition ? : any){
    return this.httpClient.post(url , body , condition);
=======
    return this.httpClient.get<any>(url , headers);
  }

  post(url:string , body:any , condition ? : any){
    return this.httpClient.post<any>(url , body , condition);
    // .subscribe(response=>{alert('done'+response);}, error=>{alert('error'+error);});
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
  }

  put(url:string , body:any){
    this.httpClient.put<any>(url , body);
  }

  delete(url:string){
    return this.httpClient.delete(url);
  }

}
