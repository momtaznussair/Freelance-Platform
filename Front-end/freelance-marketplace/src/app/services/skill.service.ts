import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private api:ApiService) { }
  getSkills():Observable<any>{
   return this.api.get("http://127.0.0.1:8000/api/skills")
  }
 
}
