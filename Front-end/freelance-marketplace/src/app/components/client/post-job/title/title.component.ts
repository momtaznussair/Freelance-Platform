import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RegisterDataService } from 'src/app/services/register-data.service';
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder , private registerService : RegisterDataService , private router : Router) { }

  currentRegisterData : any;
  ngOnInit(): void {

    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      title : ['' , [ Validators.required ]],
    })
  }
  isLogged : boolean = false;
  next()
  {
    if(this.form.valid)
    {
      // this.currentRegisterData = JSON.parse(this.currentRegisterData)
      // this.currentRegisterData.title = this.form.controls.title.value;
      // localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
      this.router.navigateByUrl("/client/post-job/description");
    }
    else
    {
      this.isLogged = true;
    }
  }

}
