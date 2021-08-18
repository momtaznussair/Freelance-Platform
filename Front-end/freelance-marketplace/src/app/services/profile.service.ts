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
    return this.profile.delete(`${environment.apiUrl}/portfolios/delete/${id}`);
  }

  deleteEdu(id:number){
    return this.profile.delete(`${environment.apiUrl}/educations/delete/${id}`);
  }

  updateEducation(url : any , body : any) {
    return this.profile.post(`${environment.apiUrl}/educations/${url}` , body)

  }

  // Languages

  updateLanguage(url : any , body : any) {
    return this.profile.post(`${environment.apiUrl}/languages/${url}` , body)

  }

  deleteLang(id:number){
    return this.profile.delete(`${environment.apiUrl}/languages/delete/${id}`)

  }

}
