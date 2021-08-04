import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RespondedLocationToken } from 'src/app/models/location/responded-location-token';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userResponse : User = new User();

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  ,private http : HttpClient ,  private router : Router , private userService : UserService) { }


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
      phone_number:['' , [Validators.required , Validators.minLength(11) , Validators.maxLength(255)]],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15) ]],
      password_confirmation : ['' , [Validators.required]],
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

  password_confirmation : string = '';
  password : string = '';
  isLogged : boolean = false;
  register(){
    // alert(JSON.stringify( this.form.value))
    if(this.form.valid && this.password == this.password_confirmation)
    {
      localStorage.setItem('token' , 'any');


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
