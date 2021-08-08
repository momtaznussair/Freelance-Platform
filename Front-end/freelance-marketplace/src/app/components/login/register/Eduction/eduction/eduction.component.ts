import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import {Registerstart_dateService} from "../../../../../services/register-start_date.service";
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-eduction',
  templateUrl: './eduction.component.html',
  styleUrls: ['./eduction.component.css']
})
export class EductionComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private apiService : ApiService) { }

  currentRegisterstart_date : any;

  ngOnInit(): void {

    this.currentRegisterstart_date = localStorage.getItem('start_date');

    this.form = this.formBuilder.group({
      user_id : ['1' , [ Validators.required]],
      institute : ['' , [ Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
      area_of_study : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
      degree : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
      start_date : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
      graduation_date : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(250) ]],
    })
  }
  isLogged : boolean = false;

  next()
{

  console.log(this.form.value);
  if(this.form.valid)
  {
    this.apiService.post(`${environment.apiUrl}/educations` , this.form.value).subscribe(response=>{
      console.log(response);
    })
    // this.router.navigateByUrl("/user/signup/lang");
  }
  else
  {
    this.isLogged = true;
  }
}
}



