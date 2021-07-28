import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private userService : UserService) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      email : ['' , [Validators.email , Validators.minLength(10) , Validators.maxLength(50) , Validators.required] ],
      password : ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(30)]]
    })
  }

  login(){
    this.userService.login(this.form.controls['email'].value);
    this.router.navigateByUrl('freelancer');
  }






}
