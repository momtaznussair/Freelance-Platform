import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup = new FormGroup({});
  matchValidator: any;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fname:['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(30)]],
      lname:['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(30)]],
      email : ['' , [Validators.email , Validators.minLength(10) , Validators.maxLength(50) , Validators.required] ],
      password : ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(30)]],
      repeatpassword : ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(30)]]
    })
  }



}
