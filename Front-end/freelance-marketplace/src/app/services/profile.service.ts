import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private profile:HttpClient ,private apiService : ApiService) { }

  private update = `${environment.apiUrl}/freelancer/work/profile`;

  get(){
    return this.profile.get("http://127.0.0.1:8000/freelancers");
  }
    getById(){
    return this.profile.get("http://127.0.0.1:8000/freelancers/id");
  }
  delete(id:number){
    return this.profile.delete("http://127.0.0.1:8000/api/portfolios/delete/"+id);
  }
  updateportfilo(url : any , body : any)
  {
    return this.apiService.post(`${this.update}/${url}`, body)
  }
}
