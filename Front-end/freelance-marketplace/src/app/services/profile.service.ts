import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

<<<<<<< HEAD
  constructor(private profile : ApiService) { }

  private update = `${environment.apiUrl}/portfolios`;
=======
token = localStorage.getItem('token');

  constructor(private profile:ApiService) { }
>>>>>>> c1f9ecc620446f4a43f3e782dd72d079c855e389

 
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
<<<<<<< HEAD
  updateportfilo(url : any , body : any)
  {
    return this.profile.post(`${this.update}/${url}`, body)
  }
=======

  // Languages

  updateLanguage(url : any , body : any) {
    return this.profile.post(`${environment.apiUrl}/languages/${url}` , body)

  }

  deleteLang(id:number){
    return this.profile.delete(`${environment.apiUrl}/languages/delete/${id}`)

  }

>>>>>>> c1f9ecc620446f4a43f3e782dd72d079c855e389
}

