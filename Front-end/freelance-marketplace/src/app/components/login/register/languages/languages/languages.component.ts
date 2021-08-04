<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RegisterDataService } from 'src/app/services/register-data.service';
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { UserService } from 'src/app/services/user.service';
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

  submit()
 {
=======
  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder , private registerService : RegisterDataService , private router : Router) { }

  currentRegisterData : any;

  ngOnInit(): void {

    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      languagelevelid : ['' , [ Validators.required ]],
      languageid : ['' , [Validators.required ]]
    })
  }
  isLogged : boolean = false;
  next()
 {

  if(this.form.valid)
    {
      this.currentRegisterData = JSON.parse(this.currentRegisterData)
      this.currentRegisterData.languagelevelid = this.form.controls.languagelevelid.value;
      this.currentRegisterData.languageid = this.form.controls.languageid.value;
      localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
      this.router.navigateByUrl("/user/signup/hourly-rate");
    }
    else
    {
      this.isLogged = true;
    }
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
//  this.appService.updateApprovalMessage(this.approvalText);
 }
}
