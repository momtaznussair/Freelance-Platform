import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
<<<<<<< HEAD
import { FreelancerRegisterProcess } from 'src/app/services/register-data.service';
=======
import { RegisterDataService } from 'src/app/services/register-data.service';
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  form : FormGroup = new FormGroup({});
<<<<<<< HEAD
  constructor(private formBuilder : FormBuilder , private registerService : FreelancerRegisterProcess , private router : Router) { }
=======
  constructor(private formBuilder : FormBuilder , private registerService : RegisterDataService , private router : Router) { }
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77

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
<<<<<<< HEAD
      this.router.navigateByUrl("/user/signup/experience-level");
=======
      this.router.navigateByUrl("/user/signup/experience");
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
    }
    else
    {
      this.isLogged = true;
    }
  }

}
