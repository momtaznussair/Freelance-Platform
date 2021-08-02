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
  constructor(private formBuilder : FormBuilder , private registerService : RegisterDataService) { }

  currentRegisterData : any;
  ngOnInit(): void
  {
    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      overview : ['' , [ Validators.required, Validators.maxLength(500) , Validators.minLength(10)]],
      jobTitle : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(255)]]
    })
  }



  next()
  {
    this.currentRegisterData = JSON.parse(this.currentRegisterData)
    this.currentRegisterData.overview = this.form.controls.overview.value;
    this.currentRegisterData.jobTitle = this.form.controls.jobTitle.value;
    localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
  }

}
