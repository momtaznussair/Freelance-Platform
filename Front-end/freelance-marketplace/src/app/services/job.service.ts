import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  // id:string;

  constructor(private api:ApiService) {
    // this.id = this.route.snapshot.params['id'];

   }
   getJob(id:string):Observable<any>{
     return this.api.get("http://127.0.0.1:8000/api/jobs/"+id);
   }

  getJobs():Observable<any>{
    return this.api.get("http://127.0.0.1:8000/api/jobs");
   
  }
  addJob(body:any):Observable<any>{
    return this.api.post("http://127.0.0.1:8000/api/jobs",body);
  }

  // delete(id:number){
//   return this._apiservice.put(""+id);

// }
}
