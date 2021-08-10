import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { postjob } from 'src/app/services/post-job.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder ,private router : Router, private userService : UserService) { }

  currentJobProcess : any;
  ngOnInit(): void {

    this.currentJobProcess = localStorage.getItem('job_process');
    this.currentJobProcess = JSON.parse(this.currentJobProcess);
    console.log(this.currentJobProcess);

    this.form = this.formBuilder.group({
      duration_id : ['' ,  [Validators.required]],
      expectproject : ['' ,  [Validators.required]],
      payment_style_id : ['' ,  [Validators.required]],


    })
  }

  isLogged : boolean = false;

  next(){
    if(this.form.valid)
    {
      console.log(this.form.value);
      this.currentJobProcess.payment_style_id = this.form.controls.payment_style_id.value;
      this.currentJobProcess.duration_id = this.form.controls.duration_id.value;
      localStorage.setItem('job_process' , JSON.stringify(this.currentJobProcess));
      console.log(this.currentJobProcess);
      this.router.navigateByUrl("/client/post-job/review");
    }
    else
    {
      this.isLogged = true;
    }
  }
  }
