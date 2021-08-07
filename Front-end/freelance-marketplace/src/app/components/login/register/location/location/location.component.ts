import { environment } from './../../../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  ,private http : HttpClient , private router : Router , private userService : UserService) { }

  data = {
    username : 'ali',
    first_name : 'ali',
    last_name : 'mohamed',
    email : 'aliiiiiiii@gmail.com',
    password : '11111111',
    password_confirmation : '11111111',
    img_link : '',
    phone_number : 11111111111,
    country : 'any',
    city : 'any',
    street : 'any',
    zip_code : 2222,
    gender : 'male',
    type : 'client'
  }



  user_data : any ;

  ngOnInit(): void {

    if(localStorage.getItem('user_data'))
    {
      this.user_data = localStorage.getItem('user_data');
      this.user_data = JSON.parse(this.user_data);
      console.log(this.user_data.user_data);
    }

    this.form = this.formBuilder.group({
      country : ['' , [ Validators.required ]],
      street: ['' , [Validators.required ]],
      city: ['' , [Validators.required ]],
      zip_code: ['' , [Validators.required ]]

    })
  }
    isLogged : boolean = false;
    next() {
      if(this.form.valid)
      {
        // this.user_data.location = this.form.value;
        this.user_data.user_data.city = this.form.controls['city'].value;
        this.user_data.user_data.country = this.form.controls['country'].value;
        this.user_data.user_data.zip_code = this.form.controls['zip_code'].value;
        this.user_data.user_data.street = this.form.controls['street'].value;
        console.log(this.user_data.user_data)

        //if signUp with socialite done

        if(this.user_data.response)
        {
          console.log(this.user_data.user_data);

          //send request
          // this.userService.register(this.user_data).subscribe(response=>{
            this.http.post(`http://localhost:8000/api/register`, this.user_data.user_data).subscribe(response=>{

            console.log(response);
            // if(this.user_data.type == 'client')
            // {
            //   localStorage.setItem('clientType' , 'client');
            //   this.router.navigateByUrl('/client/main');
            // }else
            // {
            //   localStorage.setItem('freelancerType' , 'freelancer');
            //   this.router.navigateByUrl('/user/signup/category');
            // }
          })//end of request

        }
        else //=> if logged manually
        {

          //send request
          // this.userService.register(this.user_data).subscribe(response=>{
            this.http.post(`http://localhost:8000/api/register`, this.user_data.user_data).subscribe(response=>{
            console.log(response);

            //fake token
            // localStorage.setItem('token' , 'any');

            // if(this.user_data.user_data.type == 'client')
            // {
            //   localStorage.setItem('clientType' , 'client');
            //   this.router.navigateByUrl('/client/main');
            // }
            // else
            // {
            //   localStorage.setItem('freelancerType' , 'freelancer');
            //   this.router.navigateByUrl('/user/signup/category');
            // }

          } , error=>{
            console.log('shit');
          })//end of request

        }

      }
      else //=> invalid data or error validation
      {
      this.isLogged = true;
      }

    }

    //test request
    test(){
      this.http.post(`${environment.apiUrl}/register` ,this.data).subscribe(response=>{
        console.log(response);
        console.log(this.data);
      }, error=>{
        console.log('error message');
      })
    }


  }

