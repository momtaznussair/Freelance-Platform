import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  token : any;

  constructor(private _apiservice:ApiService) { }

addproposal(body:any){
  // return this._apiservice.post("http://127.0.0.1:8000/api/proposals",body);
  this.token = localStorage.getItem('token');
  console.log(this.token)
  return this._apiservice.post(`${environment.apiUrl}/proposals`, body, {'headers': {
    'Accept' : 'application/json',
    'Authorization' : `Bearer ${this.token}`
  }})

}
update(body:any){
  return this._apiservice.put("http://127.0.0.1:8000/api/proposals",body);
}
get(){
  return this._apiservice.get("http://127.0.0.1:8000/api/proposals");

}
// delete(id:number){
//   return this._apiservice.put(""+id);

// }

  // get(url:string , headers ? :any){
  //   return this._apiservice.get(url , headers);
  // }

  // post(url:string , body:any , condition ? : any){
  //   return this._apiservice.post(url , body , condition);
  // }
}
