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

  namePattern = "^[a-zA-Z]{8,15}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$";
  phoneNumPattern = "^((\+91-?)|0)?[0-9]{10 , 15}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  imagePattern :string =  "([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)";

  isTokenFound : boolean = false;

  ngOnInit(): void {
    if(localStorage.getItem('token'))
    {
      this.isTokenFound = true;
    }else
    {
      this.isTokenFound = false;
    }


    this.form = this.formBuilder.group({
      fName : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255)]],
      lName : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255) ]],
      userName : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255) ]],
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      gender:['' , [Validators.required]],
      phone:['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255)]],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15) ]],
      repeatPassword : ['' , [Validators.required]],
      personalImage : ['' , [Validators.minLength(3) , Validators.maxLength(255)]],
      type:['' , [Validators.required]],
    })

  }//end of ngOnInit

  becameClient(){
    this.router.navigateByUrl('user/signup/category')
  }

  becameFreelancer(){
    this.router.navigateByUrl('freelancer')
  }

  login(){
    if(this.form.valid)
    {
      if(this.form.controls.type.value == 'client'){
        this.userService.login(this.form.controls['email'].value);
        this.becameClient();
      }else{
        this.userService.login(this.form.controls['email'].value);
        this.becameFreelancer
      }
    }
  };//end of login function




}
