import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private api:ApiService) { }
  getSkills(url:string):Observable<any>{
   return this.api.get(url)
  }
 
}
