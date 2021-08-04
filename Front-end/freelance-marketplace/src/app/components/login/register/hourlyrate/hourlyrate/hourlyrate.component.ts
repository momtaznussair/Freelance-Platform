import { Component, OnInit } from '@angular/core';
import {FreelancerRegisterProcess} from "../../../../../services/register-data.service";
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
  constructor(private formBuilder : FormBuilder , private userService : UserService,private registerProcess:FreelancerRegisterProcess) { }

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

  hourlyRating : number = 10;
  siteService : any;
  latestReceive : any;

  getSiteService(hourly : any):any
  {
    return (this.siteService = hourly * 0.8).toFixed(2) && (this.latestReceive = hourly - this.siteService).toFixed(2)
  }

  next()
  {
    this.currentRegisterData = JSON.parse(this.currentRegisterData)
    this.currentRegisterData.hourlyRate = this.form.controls.hourlyRate.value;
    localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
    console.log(localStorage.getItem('data'));
  }




}
