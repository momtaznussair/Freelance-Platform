import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hourlyrate',
  templateUrl: './hourlyrate.component.html',
  styleUrls: ['./hourlyrate.component.css']
})
export class HourlyrateComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder , private userService : UserService,private appService:RegisterDataService) { }

  currentRegisterData : any;
  ngOnInit(): void
  {
    this.currentRegisterData = localStorage.getItem('data');
    this.form = this.formBuilder.group({
      hourlyRate : ['' , [ Validators.required]],
    })
  }

  submit()
 {

 }

  hourlyRating : any;
  siteService : any;
  latestReceive : any;

  getSiteService(hourly : any):any
  {
    return (this.siteService = hourly * 0.8).toFixed(2) && (this.latestReceive = hourly - this.siteService).toFixed(2)
  }

  next()
  {
    alert(JSON.stringify(this.form.getRawValue()));
    this.currentRegisterData = JSON.parse(this.currentRegisterData)
    this.currentRegisterData.hourlyRate = this.form.controls.hourlyRate.value;

    localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
    console.log(localStorage.getItem('data'));
  }




}
