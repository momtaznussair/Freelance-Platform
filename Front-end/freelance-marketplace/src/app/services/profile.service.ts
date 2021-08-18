import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

token = localStorage.getItem('token');

  constructor(private profile:ApiService) { }

 
  get():Observable<any>
  {
    return this.profile.get(`${environment.apiUrl}/freelancers`);
  }

  delete(id:number){
    return this.profile.delete("http://127.0.0.1:8000/api/portfolios/delete/"+id, {'headers': {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${this.token}`
    }});
  }

  deleteEdu(id:number){
    return this.profile.delete(`${environment.apiUrl}/educations/delete/`+ id, {'headers': {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${this.token}`
    }});
  }

  updateEducation(url : any , body : any) {
    return this.profile.post(`${environment.apiUrl}/educations/${url}` , body, {'headers': {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${this.token}`
    }})

  }

  // Languages

  updateLanguage(url : any , body : any) {
    return this.profile.post(`${environment.apiUrl}/languages/${url}` , body, {'headers': {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${this.token}`
    }})

  }

  deleteLang(id:number){
    return this.profile.delete(`${environment.apiUrl}/languages/delete/`+ id, {'headers': {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${this.token}`
    }});

  }

}

