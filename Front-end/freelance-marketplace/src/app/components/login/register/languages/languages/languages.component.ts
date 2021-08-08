import { environment } from './../../../../../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private apiService : ApiService) { }

  currentRegisterData : any;

  ngOnInit(): void {
    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      proficiency : ['' , [ Validators.required ]],
      name : ['' , [ Validators.required]],
    })
  }


  isLogged : boolean = false;

  /*hourly-rate*/
  next()
 {
  console.log({name : this.form.controls['name'].value})
  this.apiService.post(`${environment.apiUrl}/languages` , {name : this.form.controls['name'].value}).subscribe(response=>{
    console.log(response);
  })
  if(this.form.valid)
  {
    // this.router.navigateByUrl("/user/signup/hourly-rate");
  }
  else
  {
    this.isLogged = true;
  }
 }
}
