import { Injectable } from '@angular/core';
import { BehaviorSubject , Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FreelancerRegisterProcess {

  constructor() { }

  formAndLocationData = {
    username : '',
    first_name : '',
    last_name : '',
    email : '',
    password : '',
    password_confirmation : '',
    img_link : '',
    phone_number :'',
    country : '',
    city : '',
    street : '',
    zip_code :'',
    gender : '',
    type : ''
  }

    registerProcess:any = {
      "category_id":"",
      "overview":"",
      "job_title":"",
      "experience_id":0,
      "hourly_rate":0,
    }

}
