import { Injectable } from '@angular/core';
import { BehaviorSubject , Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class postjob {

  constructor() { }


    postjobProcess:any = {
      client_id : localStorage.getItem('client_id'),
      job_title:"",
      description:"",
      attachment:"",
      payment_amount:0,
      category_id:0,
      payment_style_id: 0,
      experience_id:0,
      duration_id:1,
      skill : [],
    }

}
