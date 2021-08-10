import { environment } from './../../../../../environments/environment';
import { ApiService } from './../../../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import { RegisterDataService } from 'src/app/services/register-data.service';
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { UserService } from 'src/app/services/user.service';
import { postjob } from 'src/app/services/post-job.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  form : FormGroup = new FormGroup({});


  constructor(private formBuilder : FormBuilder  , private router : Router ,private jobprocess:postjob , private apiService : ApiService) { }


  // currentRegisterData : any;
  ngOnInit(): void {

    // this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      job_title : ['' , [ Validators.required ,, Validators.minLength(20) ]],
      // category_id : ['' , [ Validators.required]],

    })
  }
  isLogged : boolean = false;
  next()
  {
    if(this.form.valid)
    {
      this.jobprocess.postjobProcess.job_title=this.form.controls.title;

      // this.jobprocess.postjobProcess.category_id=this.form.controls.category_id;

      localStorage.setItem('job_prosess',JSON.stringify(this.jobprocess.postjobProcess));
      // this.currentRegisterData = JSON.parse(this.currentRegisterData)
      // this.currentRegisterData.title = this.form.controls.title.value;
      // localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
      this.router.navigateByUrl("/client/post-job/description");
    }
    else
    {
      this.isLogged = true;
    }
  }

  //=====================================test request =====================//
  data = {
    description : 'this is test desc',
    payment_amount : 20,
    job_title : 'this is test title',
    skill : ['html' , 'css'],
    client_id : 5,
    duration_id : 1,
    payment_type : 1,
    attatchment : 'this is test attatchment',
    experience_id : 2,
    payment_style_id : 1,
    category_id : 1,
    language_id : 1,
    language_level_id : 1,
  }

  callDb()
  {
    // this.apiService.post(`${environment.apiUrl}/jobs` , this.data).subscribe(response=>{
    //   console.log(response);
    // })
  }



}
