import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsUrl = `${environment.apiUrl}/skills`;
  constructor(private apiService : ApiService) { }


  showSkills()
  {
    return this.apiService.get(this.skillsUrl)
  }
 addSkill(skill :string){
  return this.apiService.get(this.skillsUrl , skill)
 }
}
