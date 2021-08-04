import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-expertlevel',
  templateUrl: './expertlevel.component.html',
  styleUrls: ['./expertlevel.component.css']
})
export class ExpertlevelComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder ,private router : Router) { }

  currentRegisterData : any;
  ngOnInit(): void
  {
    this.currentRegisterData = localStorage.getItem('data');
    console.log(this.currentRegisterData);
    this.form = this.formBuilder.group({
      experienceLevel : ['' ,  [Validators.required]],
    })
  }

  isLogged : boolean = false;

  next()
  {
    this.isLogged = true;
    if(this.form.valid){
      this.router.navigateByUrl('/user/signup/skills');
      this.currentRegisterData = JSON.parse(this.currentRegisterData)
      this.currentRegisterData.experienceLevel = this.form.controls.experienceLevel.value;
      localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
    }
  }

  submit()
 {
//  this.appService.updateApprovalMessage(this.approvalText);
 }
}
