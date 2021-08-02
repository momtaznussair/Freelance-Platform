import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RespondedLocationToken } from 'src/app/models/location/responded-location-token';
import { RegisterDataService } from 'src/app/services/register-data.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private userService : UserService , private registerService : RegisterDataService) { }


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
      first_name : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255)]],
      last_name : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255) ]],
      username : ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255) ]],
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      gender:['' , [Validators.required]],
      phone_number:['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255)]],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15) ]],
      repeatPassword : ['' , [Validators.required]],
      image_link : ['' , [Validators.minLength(3) , Validators.maxLength(255)]],
      type:['' , [Validators.required]],
    })

  }//end of ngOnInit

  becameClient(){
    this.router.navigateByUrl('client/main');
  }

  becameFreelancer(){
    this.router.navigateByUrl('user/signup/category');
  }


  respondedToken : RespondedLocationToken = new RespondedLocationToken();
  msg : any;

  repeatedPassword : string = '';
  password : string = '';
  isLogged : boolean = false;
  register(){
    // alert(JSON.stringify( this.form.value))
    if(this.form.valid && this.password == this.repeatedPassword)
    {
      //save token into localStorage to login and stop guard
      localStorage.setItem("token" , "response");

      this.registerService.registerProcess.registrationData = this.form.value;
      localStorage.setItem('data' ,JSON.stringify(this.registerService.registerProcess));
      console.log(localStorage.getItem('data'));

      //====Use HttpClient====
      // this.userService.register(this.form.value).subscribe(response=>{
      //   alert('process successfully');
      //   console.log(response);
      //   this.respondedToken.resToken = response
      //   this.msg = this.respondedToken.resToken;
      //   this.msg = localStorage.setItem('msg' , JSON.stringify(this.msg));
      // },error=>console.error)

      if(this.form.controls.type.value == 'client')
      {
        this.becameClient();
      }else
      {
        this.becameFreelancer();
      }

    }
    else
    {
      this.isLogged = true;
    }
  };//end of register function
}
