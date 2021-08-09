import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(private _apiservice:ApiService) { }

addproposal(body:any){
  return this._apiservice.post("http://127.0.0.1:8000/api/proposals",body);
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
