import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
<<<<<<< HEAD

token = localStorage.getItem('token');

  constructor(private profile:ApiService) { }

=======
  constructor(private profile : ApiService) { }
  
  // private update = `${environment.apiUrl}/portfolios`;
>>>>>>> 70f22226b9a2932e27aef4192950d4f6567f8261

  get():Observable<any>
  {
    return this.profile.get(`${environment.apiUrl}/freelancers`);
  }
<<<<<<< HEAD

=======
  getById(){
    return this.profile.get(`${environment.apiUrl}/freelancers/id`);
  }
>>>>>>> 70f22226b9a2932e27aef4192950d4f6567f8261
  delete(id:number){
    return this.profile.delete(`${environment.apiUrl}/portfolios/delete/${id}`);
  }

<<<<<<< HEAD
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

=======
  updateportfilo(url : any , body : any)
  {
    return this.profile.post(`${environment.apiUrl}/portfolios/${url}`, body)
  }

  
>>>>>>> 70f22226b9a2932e27aef4192950d4f6567f8261
}
