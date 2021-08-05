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
  constructor(private formBuilder : FormBuilder  , private router : Router , private userService : UserService) { }

  user_data : any ;

  ngOnInit(): void {

    this.user_data = localStorage.getItem('user_data');
    this.user_data = JSON.parse(this.user_data);

    this.form = this.formBuilder.group({
      country : ['' , [ Validators.required ]],
      street_address: ['' , [Validators.required ]],
      city: ['' , [Validators.required ]],
      zip_code: ['' , [Validators.required ]]

    })
  }
    isLogged : boolean = false;
    next() {
      if(this.form.valid)
      {
        this.user_data.location = this.form.value;
        console.log(this.user_data)

        //if signUp with socialite
        if(this.user_data.response)
        {

          localStorage.setItem('token' , this.user_data.response.access_token);
          console.log(this.user_data);
          if(this.user_data.type == 'client')
          {
            this.router.navigateByUrl('/client/main');
          }else
          {
            this.router.navigateByUrl('/user/signup/category');
          }

        }
        else
        {
          if(this.user_data.user_data.type == 'client')
          {
            //this is a fake token
            console.log(this.user_data.user_data.type);
            localStorage.setItem('token' , 'any');
            this.router.navigateByUrl('/client/main');
          }
          else
          {
            console.log(this.user_data.user_data.type);
            localStorage.setItem('token' , 'any');
            this.router.navigateByUrl('/user/signup/category');
          }
        }

      }
      else
      {
      this.isLogged = true;
      }

    }
  }

