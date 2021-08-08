import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router) { }

  currentRegisterData : any;

  ngOnInit(): void {
    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      peroficienvy : ['' , [ Validators.required ]],


    })
  }
  isLogged : boolean = false;

  /*hourly-rate*/
  next()
 {
  if(this.form.valid)
  {
    // this.currentRegisterData = JSON.parse(this.currentRegisterData)
    // this.currentRegisterData.inistiute = this.form.controls.inistiute.value;
    // this.currentRegisterData.areaofstudy = this.form.controls.areaofstudy.value;
    // this.currentRegisterData.degree = this.form.controls.degree.value;
    // this.currentRegisterData.graduation_date = this.form.controls.graduation_date.value;
    // localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
    this.router.navigateByUrl("/user/signup/hourly-rate");
  }
  else
  {
    this.isLogged = true;
  }
 }
}
