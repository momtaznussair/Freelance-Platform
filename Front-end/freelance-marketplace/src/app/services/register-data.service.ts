import { Injectable } from '@angular/core';
import { BehaviorSubject , Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor() { }
//service to get all registration process

// private registerProcess = new BehaviorSubject<Object>({});

// private registerProcess = new Subject<Object>();

// getRegisterStatus(){
//   return this.registerProcess.asObservable();
// }

// setRegisterStatus(data : any){
//   this.registerProcess.next(data);
// }

    registerProcess:any = {
      // "registrationData" : {},
      "category":"",
      "overview":"",
      "jobTitle":"",
      // "skills": [],
      "experienceLevel":0,
      // "education":"",
      // "language":[],
      "hourlyRate":0,
      "location":{}
    }

}
