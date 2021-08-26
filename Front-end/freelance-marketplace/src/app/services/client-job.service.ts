import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientJobService {

  constructor(private api:ApiService) { }
  
  getJob(id:string):Observable<any>{
    return this.api.get("http://127.0.0.1:8000/api/client/jobs/"+id);
  }

//  getJobs():Observable<any>{
//    return this.api.get("http://127.0.0.1:8000/api/client/jobs");
  
//  }
//  addJob(body:any):Observable<any>{
//    return this.api.post("http://127.0.0.1:8000/api/client/jobs",body);
//  }
}
