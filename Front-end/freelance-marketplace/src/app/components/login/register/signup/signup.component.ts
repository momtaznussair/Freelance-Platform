import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { sharedSignUpProcess } from 'src/app/services/shared-sign-up-process';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userResponse : User = new User();
  imgPattern = '([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)';


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  ,private router : Router , private sharedProcess : sharedSignUpProcess) { }


  isTokenFound : boolean = false;

  user_data : any ;

  //patterns for validation
  textPattern = "^[a-zA-Z]{3,255}$"
  phonePattern = "/^[0-9]{11,15}$/";
  passwordPattern = "^[0-9a-zA-Z]{3,255}$";

  genders = ['male' , 'female'];


  //start of ngOnInit()
  ngOnInit(): void {



    if(localStorage.getItem('user_data'))
    {
      this.user_data = localStorage.getItem('user_data');
      this.user_data = JSON.parse(this.user_data);
      this.isTokenFound = true;
    }
    else
    {
      this.isTokenFound = false;
    }


    this.form = this.formBuilder.group({
      first_name : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255) , Validators.pattern(this.textPattern)]],
      last_name : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255), Validators.pattern(this.textPattern) ]],
      username : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255) , Validators.pattern(this.textPattern)]],
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required , Validators.pattern(this.textPattern)] ],
      gender:['' , [Validators.required]],
      phone_number:['' , [Validators.required , Validators.minLength(11) , Validators.maxLength(255)]],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15), Validators.pattern(this.passwordPattern)]],
      password_confirmation : ['' , [Validators.required ]],
      img_link : ['' , [Validators.minLength(3) , Validators.maxLength(255) ]],
      type:['' , [Validators.required , Validators.pattern(this.textPattern)]],
    })

  }//end of ngOnInit


  nextStepOfSignUp()
  {

    localStorage.setItem('user_data' , JSON.stringify(this.user_data));
    this.router.navigateByUrl('/user/signup/location');
  }

  becameClient(){
      this.user_data.type = 'client';
      this.nextStepOfSignUp();
  }

  becameFreelancer(){
      this.user_data.type = 'freelancer';
      this.nextStepOfSignUp();
  }


  // signUp manually

  password_confirmation : string = '';
  password : string = '';
  isLogged : boolean = false;

  register(){

    if(this.form.valid && this.password == this.password_confirmation)
    {
      this.sharedProcess.sharedSignUpProcess.user_data = this.form.value;
      localStorage.setItem('data' , JSON.stringify(this.sharedProcess.sharedSignUpProcess));
      this.router.navigateByUrl('/user/signup/location');
    }
    else
    {
      alert('error values please complete your information');
      this.isLogged = true;
    }
  };//end of register function
}
