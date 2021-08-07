import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _apiservice:ApiService,private http:HttpClient) { }

  get(){
    return this._apiservice.get("http://127.0.0.1:8000/api/jobs");
  
  }
  addJob(body:any){
    return this._apiservice.post("http://127.0.0.1:8000/api/jobs",body);
  }

  // delete(id:number){
//   return this._apiservice.put(""+id);

// }
}
