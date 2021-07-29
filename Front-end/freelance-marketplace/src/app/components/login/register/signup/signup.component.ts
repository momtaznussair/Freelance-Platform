import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private userService : UserService) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      fName : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(250)]],
      lName : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(250)]],
      userName : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(250)]],
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      gender:['' , [Validators.required]],
      phone:['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(250)]],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]],
      repeatPassword : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]]
    })

  }//end of ngOnInit

  login(){
    if(this.form.valid && (this.form.controls['password'].value == this.form.controls['repeatPassword'].value))
      this.router.navigateByUrl('freelancer');
  }

}
