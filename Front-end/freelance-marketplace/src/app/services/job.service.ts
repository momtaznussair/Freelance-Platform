import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _apiservice:ApiService) { }

  get(){
    return this._apiservice.get("");
  
  }
  addJob(body:any){
    return this._apiservice.post("",body);
  }

  // delete(id:number){
//   return this._apiservice.put(""+id);

// }
}
