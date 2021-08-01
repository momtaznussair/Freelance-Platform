import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor() { }
//service to get all registration process
    registerProcess:any = {
      "registrationData" : {},
      "category":"",
      "overview":"",
      "jobTitle":"",
      "skills": [],
      "experienceLevel":2,
      "education":"",
      "language":[],
      "hourlyRate":0,
      "location":{}
    }
    
}
