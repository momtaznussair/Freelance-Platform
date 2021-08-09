import { Injectable } from '@angular/core';
import { BehaviorSubject , Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FreelancerRegisterProcess {

  constructor() { }

    registerProcess:any = {
      "category_id":"",
      "overview":"",
      "job_title":"",
      "experience_id":0,
      "hourly_rate":0,
    }

}
