import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private api:ApiService) { }

  getJobs(url:string):Observable<any>{
    return this.api.get(url);
   
  }
  addJob(url:string,body:any):Observable<any>{
    return this.api.post("url",body);
  }

  // delete(id:number){
//   return this._apiservice.put(""+id);

// }
}
