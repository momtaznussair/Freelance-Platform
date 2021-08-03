import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RegisterDataService } from 'src/app/services/register-data.service';
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder , private registerService : RegisterDataService , private router : Router) { }

  currentRegisterData : any;
  ngOnInit(): void
  {
    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      overview : ['' , [ Validators.required , Validators.minLength(10), Validators.maxLength(500)]],
      jobTitle : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(255)]]
    })
  }


  isLogged : boolean = false;
  next()
  {
    if(this.form.valid)
    {
      this.currentRegisterData = JSON.parse(this.currentRegisterData)
      this.currentRegisterData.overview = this.form.controls.overview.value;
      this.currentRegisterData.jobTitle = this.form.controls.jobTitle.value;
      localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
      this.router.navigateByUrl("/user/signup/experience-level");
    }
    else
    {
      this.isLogged = true;
    }
  }

}
