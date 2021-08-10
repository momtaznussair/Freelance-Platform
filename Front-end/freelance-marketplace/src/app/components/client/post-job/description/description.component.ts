import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FreelancerRegisterProcess } from 'src/app/services/register-data.service';
// import {RegisterDataService} from "../../../../../services/register-data.service";
// import { UserService } from 'src/app/services/user.service';

// @Component({
//   selector: 'app-description',
//   templateUrl: './description.component.html',
//   styleUrls: ['./description.component.css']
// })
// export class DescriptionComponent implements OnInit {


//   form : FormGroup = new FormGroup({});
//   constructor(private formBuilder : FormBuilder , private registerService : FreelancerRegisterProcess, private router : Router) { }

//   currentRegisterData : any;

//   ngOnInit(): void {
//     this.currentRegisterData = localStorage.getItem('data');

//     this.form = this.formBuilder.group({
//       description : ['' , [ Validators.required , Validators.minLength(10) ]],
//     })
//   }
//   isLogged : boolean = false;

// next(){
//   if(this.form.valid)
//   {

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router) { }

  currentRegisterData : any;

  ngOnInit(): void {
    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      description : ['' , [ Validators.required , Validators.minLength(10) ]],
    })
  }
  isLogged : boolean = false;

next(){
  if(this.form.valid)
  {

    this.router.navigateByUrl("/client/post-job/details");
  }
  else
  {
    this.isLogged = true;
  }
}
}