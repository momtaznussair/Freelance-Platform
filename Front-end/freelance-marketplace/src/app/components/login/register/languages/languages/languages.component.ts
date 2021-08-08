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
    this.form = this.formBuilder.group({
      proficiency : ['' , [ Validators.required ]],
      name : ['' , [ Validators.required]],
    })
  }


  isLogged : boolean = false;

  /*hourly-rate*/
  next()
  {
    if(this.form.valid)
    {
      console.log(this.form.value);
      this.apiService.post(`${environment.apiUrl}/languages` , {name : this.form.controls['name'].value}).subscribe(response=>{
        console.log(response);
        // this.router.navigateByUrl("/user/signup/hourly-rate");
      },error=>console.error);
    }
  else
  {
    this.isLogged = true;
  }
 }
}
