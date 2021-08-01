import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {
  private registerProcess = new BehaviorSubject({
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
  });
  
  currentApprovalStageMessage = this.registerProcess.asObservable();
  
  constructor() { }

  updateApprovalMessage(message: any) {
    this.registerProcess.next(message)
    }
//service to get all registration process
    // registerProcess:any = {
    //   "registrationData" : {},
    //   "category":"",
    //   "overview":"",
    //   "jobTitle":"",
    //   "skills": [],
    //   "experienceLevel":2,
    //   "education":"",
    //   "language":[],
    //   "hourlyRate":0,
    //   "location":{}
    // }
    
}
