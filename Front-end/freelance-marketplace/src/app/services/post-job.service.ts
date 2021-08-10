import { Injectable } from '@angular/core';
import { BehaviorSubject , Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class postjob {

  constructor() { }


    postjobProcess:any = {
      description:"",
      attachment:"",
      job_title:"",
      client_id:0,
      payment_amount:0,
      category_id:0,
      language_id:0,
      payment_style_id: 0,
      experience_id:0,
      duration_id:0,
    }

}
