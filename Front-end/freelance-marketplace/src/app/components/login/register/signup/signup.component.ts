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

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  ,private router : Router , private sharedProcess : sharedSignUpProcess) { }


  isTokenFound : boolean = false;

  user_data : any ;
  ngOnInit(): void {



    if(localStorage.getItem('id_token'))
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
      first_name : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255)]],
      last_name : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255) ]],
      username : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255) ]],
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      gender:['' , [Validators.required]],
      phone_number:['' , [Validators.required , Validators.minLength(11) , Validators.maxLength(255)]],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15) ]],
      password_confirmation : ['' , [Validators.required]],
      img_link : ['' , [Validators.minLength(3) , Validators.maxLength(255)]],
      type:['' , [Validators.required]],
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

  // if signup with any socialite




  password_confirmation : string = '';
  password : string = '';
  isLogged : boolean = false;
  register(){
    // alert(JSON.stringify( this.form.value))
    if(this.form.valid && this.password == this.password_confirmation)
    {
      this.sharedProcess.sharedSignUpProcess.user_data = this.form.value;
      localStorage.setItem('user_data' , JSON.stringify(this.sharedProcess.sharedSignUpProcess));
      this.router.navigateByUrl('/user/signup/location');
    }
    else
    {
      this.isLogged = true;
    }
  };//end of register function
}
