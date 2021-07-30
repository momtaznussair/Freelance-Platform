import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private userService : UserService , private apiService : ApiService) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]]
    })
  }

  login(){
    let response = this.userService.login(this.form.getRawValue());
    console.log(response);
    // this.userService.login(this.form.controls['email'].value);
    // this.router.navigateByUrl('freelancer');
    // console.log(this.form.getRawValue());
  }

  submit():void{
    this.apiService.post("url" , this.form.getRawValue() , {withCredentials : true}).subscribe(response=>{
      console.log(response);
    })
  }






}
