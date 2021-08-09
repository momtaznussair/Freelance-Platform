import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortofolioService {

  constructor(private port:HttpClient) { }

  get(){
    return this.port.get("http://127.0.0.1:8000/portfolios");

  }

  // post(body:any){
  //   return this.port.post("http://127.0.0.1:8000/portfolios", body);

  // }


}
