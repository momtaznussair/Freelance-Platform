import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//  import {RegisterDataService} from "../../../../../services/register-data.service";
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { postjob } from 'src/app/services/post-job.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder ,private router : Router, private userService : UserService ,private jobprocess:postjob) { }

  post_job : any;
  ngOnInit(): void {

    this.post_job = localStorage.getItem('postjob');
    console.log(this.post_job);
    this.form = this.formBuilder.group({
      level : ['' ,  [Validators.required]],
    })



  }
  isLogged : boolean = false;

  next(){
    if(this.form.valid)
    {

      this.jobprocess.postjobProcess.level=this.form.controls.expertise;


      this.post_job = JSON.parse(this.post_job)
      this.post_job.level = this.form.controls.level.value;
      localStorage.setItem('postjob' ,JSON.stringify(this.post_job));
      this.router.navigateByUrl("/client/post-job/visibility");
    }
    else
    {
      this.isLogged = true;
    }
  }
  }




