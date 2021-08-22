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
  fixedForm : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder ,private router : Router, private userService : UserService) { }

  currentJobProcess : any;
  ngOnInit(): void {

    this.currentJobProcess = localStorage.getItem('job_process');
    this.currentJobProcess = JSON.parse(this.currentJobProcess);

    this.form = this.formBuilder.group({
      duration_id : ['' ,  [Validators.required]],
      payment_style_id : ['' ,  [Validators.required]],
      from : ['0.00' , [Validators.required]],
      to : ['0.00' , [Validators.required]],
    })

    this.fixedForm = this.formBuilder.group({
      payment_amount : ['10' , [Validators.required]]
    })
  }

  isFixed : boolean = false;
  isLogged : boolean = false;

  chooseFixed()
  {
    this.isFixed = true;
  }

  chooseHourly()
  {
    this.isFixed = false;
  }


  next(){

    if(this.isFixed)
    {
      if(this.fixedForm.valid)
      {
        this.currentJobProcess.payment_style_id = this.form.controls.payment_style_id.value;
        this.currentJobProcess.payment_amount = this.fixedForm.controls.payment_amount.value;
        localStorage.setItem('job_process' , JSON.stringify(this.currentJobProcess));
        this.router.navigateByUrl("/client/post-job/review");
      }
      else
      {
        this.isLogged = true;
      }
    }
    else
    {
      if(this.form.valid)
      {
        this.currentJobProcess.payment_style_id = this.form.controls.payment_style_id.value;
        this.currentJobProcess.duration_id = this.form.controls.duration_id.value;
        this.currentJobProcess.from = this.form.controls.from.value;
        this.currentJobProcess.to = this.form.controls.to.value;
        localStorage.setItem('job_process' , JSON.stringify(this.currentJobProcess));
        this.router.navigateByUrl("/client/post-job/review");
      }
      else
      {
        this.isLogged = true;
      }
    }

  }
}
