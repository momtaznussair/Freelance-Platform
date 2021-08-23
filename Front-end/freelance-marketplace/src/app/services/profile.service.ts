import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private profile : ApiService) { }
  
  // private update = `${environment.apiUrl}/portfolios`;

 
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
    return this.profile.post(`${environment.apiUrl}/userLanguages/${url}` , body)

  }

  deleteLang(id:number){
    return this.profile.delete(`${environment.apiUrl}/userLanguages/delete/${id}`)

  }

  updateJobTitle(url : any, body : any){
    return this.profile.post(`${environment.apiUrl}/freelancer/updateJobTitle/${url}` , body)
  }

  updateHourly(url : any, body : any){
    return this.profile.post(`${environment.apiUrl}/freelancer/updateHourlyRate/${url}` , body)

  }

  updateOver(url : any, body : any){
    return this.profile.post(`${environment.apiUrl}/freelancer/updateOverview/${url}` , body)

  }

  updateportfilo(url : any , body : any)
  {
    return this.profile.post(`${environment.apiUrl}/portfolios${url}`, body)
  }


}

