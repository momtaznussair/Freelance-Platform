import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-eduction',
  templateUrl: './eduction.component.html',
  styleUrls: ['./eduction.component.css']
})
export class EductionComponent implements OnInit {


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

    })
  }
  isLogged : boolean = false;

  next()
{
  if(this.form.valid)
  {
    this.currentRegisterData = JSON.parse(this.currentRegisterData)
    this.currentRegisterData.inistiute = this.form.controls.inistiute.value;
    this.currentRegisterData.areaofstudy = this.form.controls.areaofstudy.value;
    this.currentRegisterData.degree = this.form.controls.degree.value;
    // this.currentRegisterData.graduation_date = this.form.controls.graduation_date.value;
    localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
    this.router.navigateByUrl("/user/signup/lang");
  }
  else
  {
    this.isLogged = true;
  }
}
}

    // this.currentRegisterData = localStorage.getItem('data');
    // this.apiService.get(`${environment.apiUrl}/eduction`).subscribe(response =>{
    //   this.eduction = response;
    //   console.log(this.eduction);
    // },error=>console.error);



