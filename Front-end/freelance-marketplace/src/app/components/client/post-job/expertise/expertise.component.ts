import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//  import {RegisterDataService} from "../../../../../services/register-data.service";
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder ,private router : Router, private userService : UserService) { }

  currentRegisterData : any;
  ngOnInit(): void {

    this.currentRegisterData = localStorage.getItem('data');
    console.log(this.currentRegisterData);
    this.form = this.formBuilder.group({
      level : ['' ,  [Validators.required]],
    })



  }
  isLogged : boolean = false;

  next(){
    if(this.form.valid)
    {

      this.router.navigateByUrl("/client/post-job/visibility");
    }
    else
    {
      this.isLogged = true;
    }
  }
  }




