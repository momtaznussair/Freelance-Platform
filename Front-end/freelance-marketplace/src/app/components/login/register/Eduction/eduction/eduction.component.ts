import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
<<<<<<< HEAD
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { UserService } from 'src/app/services/user.service';
=======
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment.prod';
>>>>>>> 14166a86378d3737db0302b330aaeef7e2c09745

@Component({
  selector: 'app-eduction',
  templateUrl: './eduction.component.html',
  styleUrls: ['./eduction.component.css']
})
export class EductionComponent implements OnInit {

<<<<<<< HEAD

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router) { }

  currentRegisterData : any;


  // msg = localStorage.getItem('msg');
  // constructor(private appService:RegisterDataService,private apiService : ApiService , private registerService : RegisterDataService) { }

  // name : string = '';
  // institute : string = '';
  // graduationdate : any ='';

  // eduction : Eduction = new Eduction();



  ngOnInit(): void {

    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      inistiute : ['' , [ Validators.required ]],
      areaofstudy : ['' , [Validators.required ]],
      degree : ['' , [Validators.required ]],
      data : ['' , [Validators.required ]]

=======
  user_id : any;
  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private apiService : ApiService) { }

  currentRegisterstart_date : any;

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_id)
    this.currentRegisterstart_date = localStorage.getItem('start_date');

    this.form = this.formBuilder.group({
      user_id : [this.user_id , [ Validators.required]],
      institute : ['' , [ Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
      area_of_study : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
      degree : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
      start_date : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
      graduation_date : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
>>>>>>> 14166a86378d3737db0302b330aaeef7e2c09745
    })
  }
  isLogged : boolean = false;

  next()
{
<<<<<<< HEAD
  if(this.form.valid)
  {
    this.currentRegisterData = JSON.parse(this.currentRegisterData)
    this.currentRegisterData.inistiute = this.form.controls.inistiute.value;
    this.currentRegisterData.areaofstudy = this.form.controls.areaofstudy.value;
    this.currentRegisterData.degree = this.form.controls.degree.value;
    // this.currentRegisterData.graduation_date = this.form.controls.graduation_date.value;
    localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
    this.router.navigateByUrl("/user/signup/lang");
=======

  console.log(this.form.value);
  if(this.form.valid)
  {
    this.apiService.post(`${environment.apiUrl}/educations` , this.form.value).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl("/user/signup/lang");
    },error=>console.error);
>>>>>>> 14166a86378d3737db0302b330aaeef7e2c09745
  }
  else
  {
    this.isLogged = true;
  }
}
}

<<<<<<< HEAD
    // this.currentRegisterData = localStorage.getItem('data');
    // this.apiService.get(`${environment.apiUrl}/eduction`).subscribe(response =>{
    //   this.eduction = response;
    //   console.log(this.eduction);
    // },error=>console.error);

=======
>>>>>>> 14166a86378d3737db0302b330aaeef7e2c09745


