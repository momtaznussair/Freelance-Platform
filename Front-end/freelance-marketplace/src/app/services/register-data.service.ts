import { Injectable } from '@angular/core';
import { BehaviorSubject , Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FreelancerRegisterProcess {

  constructor() { }

    registerProcess:any = {
      "category":"",
      "overview":"",
      "jobTitle":"",
      "experienceLevel":0,
      "hourlyRate":0,
    }

}
