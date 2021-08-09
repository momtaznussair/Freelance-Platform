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
  constructor(private formBuilder : FormBuilder ,private router : Router, private userService : UserService ,private jobprocess:postjob) { }

  post_job : any;
  ngOnInit(): void {
    this.post_job = localStorage.getItem('postjob');
    console.log(this.post_job);
    this.form = this.formBuilder.group({
      timeproject : ['' ,  [Validators.required]],
      expectproject : ['' ,  [Validators.required]],
      pay : ['' ,  [Validators.required]],


    })
  }
  isLogged : boolean = false;

  next(){
    if(this.form.valid)
    {

      this.post_job = JSON.parse(this.post_job)
      this.post_job.payment_style_id = this.form.controls.payment_style_id.value;
      console.log(localStorage.getItem('postjob'));
      localStorage.removeItem('postjob');
      this.router.navigateByUrl("/client/post-job/review");
    }
    else
    {

      this.isLogged = true;
    }
  }
  }
