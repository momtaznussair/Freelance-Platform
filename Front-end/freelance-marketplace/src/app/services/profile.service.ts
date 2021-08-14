import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private profile:ApiService) { }


  get():Observable<any>
  {
    return this.profile.get(`${environment.apiUrl}/freelancers`);
  }
    getById(){
    return this.profile.get(`${environment.apiUrl}/freelancers/id`);
  }
}
