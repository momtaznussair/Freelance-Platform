import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RespondedLocationToken } from 'src/app/models/location/responded-location-token';
<<<<<<< HEAD
import { User } from 'src/app/models/user/user';
=======
import { RegisterDataService } from 'src/app/services/register-data.service';
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

<<<<<<< HEAD
  userResponse : User = new User();

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  ,private http : HttpClient ,  private router : Router , private userService : UserService) { }
=======
  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private userService : UserService , private registerService : RegisterDataService) { }
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77


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
<<<<<<< HEAD
      phone_number:['' , [Validators.required , Validators.minLength(11) , Validators.maxLength(255)]],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15) ]],
      password_confirmation : ['' , [Validators.required]],
=======
      phone_number:['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(255)]],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15) ]],
      repeatPassword : ['' , [Validators.required]],
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
      img_link : ['' , [Validators.minLength(3) , Validators.maxLength(255)]],
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
<<<<<<< HEAD

  password_confirmation : string = '';
=======
  msg : any;

  repeatedPassword : string = '';
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
  password : string = '';
  isLogged : boolean = false;
  register(){
    // alert(JSON.stringify( this.form.value))
<<<<<<< HEAD
    if(this.form.valid && this.password == this.password_confirmation)
    {

      localStorage.setItem('token' , 'any');
      this.router.navigateByUrl('/user/signup/location');


      //====Use HttpClient====
      // this.userService.register(this.form.value).subscribe(response=>{
        // this.userService.register(this.form.value).subscribe(response=>{
        // console.log(response);
        // this.userResponse = response;
        // localStorage.setItem('data' , JSON.stringify(this.userResponse));
        // if(this.userResponse.msg)
        // {
        //   alert(this.userResponse.msg);
        // }else if(this.userResponse.email)
        // {
        //   alert(this.userResponse.email[0]);
        // }
        // this.respondedToken.resToken = response;
      // },error=>console.error)

      // if(this.form.controls.type.value == 'client')
      // {
      //   this.becameClient();
      // }else
      // {
      //   this.becameFreelancer();
      // }
=======
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
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77

    }
    else
    {
      this.isLogged = true;
    }
  };//end of register function
}
