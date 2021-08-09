import { Injectable } from '@angular/core';
import { BehaviorSubject , Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class postjob {

  constructor() { }


    postjobProcess:any = {
      "description":"",
      "attachment":"",
      "job_title":"",
      "client_id":0,
      "payment_amount":0,
      "category_id":0,
      "language_id":0,
      "payment_style_id": 0,
      "time_project":  0 ,
      "experience_id":0,
      "duration_id":0
    }

}
/**term_work: string = ""
  job_title: string = ""
  category_id: number = 0
  description: string = ""
  attachment: string = ""
  duration_id: number = 0
  experience_id: number = 0
  visbilty: string = ""
  payment_amount: number = 0
  payment_style_id: number = 0
  time_project: number = 0 */

  /*--------------------------*/
// id:number=0
// description:string=""
// created_at:any
// updated_at:any
// payment_amount:number=0
// job_title:string=""
// attachment:string=""
// client_id:number=0
// duration_id:number=0
// experience_id:number=0
// payment_style_id:number=0
// category_id:number=0
// language_id:number=0
// language:number=0
