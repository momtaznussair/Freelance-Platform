import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-eduction',
  templateUrl: './eduction.component.html',
  styleUrls: ['./eduction.component.css']
})
export class EductionComponent implements OnInit {

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
      institute : ['' , [ Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
      area_of_study : ['' , [Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
      degree : ['' , [Validators.required , Validators.minLength(4) , Validators.maxLength(250) ]],
      start_date : ['' , [Validators.required ]],
      graduation_date : ['' , [Validators.required]],
    })
  }
  isLogged : boolean = false;

  next()
{
  
  console.log({user_id : this.user_id , institute : this.form.controls['institute'].value , area_of_study : this.form.controls['area_of_study'].value});
  if(this.form.valid)
  {
    this.apiService.post(`${environment.apiUrl}/educations` , this.form.value).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl("/user/signup/lang");
    },error=>console.error);
  }
  else
  {
    this.isLogged = true;
  }
}
}



