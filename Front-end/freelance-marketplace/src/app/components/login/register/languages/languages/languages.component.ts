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
  user_id : any;
  languages : any;
  languageLevels : any;
  isLanguageGet : boolean = false;
  isLanguageLevelGet : boolean = false;

  ngOnInit(): void {

    //get languages
    this.apiService.get(`${environment.apiUrl}/languages`).subscribe(response=>{
      console.log(response);
      this.languages = response;
      this.isLanguageGet = true;
    })

    //get language levels
    this.apiService.get(`${environment.apiUrl}/languageLevel`).subscribe(response=>{
      console.log(response);
      this.languageLevels = response;
      this.isLanguageLevelGet = true;
    })

    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_id)

    this.form = this.formBuilder.group({
      user_id : [this.user_id , [ Validators.required]],
      language_level_id : ['' , [ Validators.required]],
      language_id : ['' , [ Validators.required ]],
    })
  }
  isLogged : boolean = false;

  /*hourly-rate*/
  next()
  {  
    if(this.form.valid)
    {
      console.log(this.form.value);
      this.apiService.post(`${environment.apiUrl}/userLanguages` , this.form.value).subscribe(response=>{
        console.log(response);
        this.router.navigateByUrl("freelancer/work");
      },error=>console.error);
    }
  else
  {
    this.isLogged = true;
  }
 }
}
