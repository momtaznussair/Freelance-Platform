import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private userService : UserService , private apiService : ApiService) { }

  ngOnInit(): void {


    if(this.userService.isLogged())
    {
      if(localStorage.getItem('clientType') && localStorage.getItem('client_id') != 'null')
      {
        this.router.navigateByUrl('/client/main')
      }
      else if(localStorage.getItem('freelancerType') && localStorage.getItem('freelancer_id') != 'null')
      {
        this.router.navigateByUrl('/freelancer')
      }else
      {
        this.userService.logout();
      }
    }

    this.form = this.formBuilder.group({
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]]
    })
  }

  response_data : any;
  isDataUpdated : boolean = false;
  user_id : any;
  isLogged : boolean = false;
  resData : any;
  errorUpdate : boolean = false;

  login(){
    console.log(this.form.value);
    if(this.form.valid)
    {

      this.userService.login(this.form.getRawValue()).subscribe(response=>{
        console.log(response);
        this.response_data = response;

        if(this.response_data.data != null)
        {
          this.isDataUpdated = true;
          localStorage.setItem('token' , this.response_data.data.token);
          localStorage.setItem('user_data' , JSON.stringify(this.response_data.data.user));
          localStorage.setItem('user_id' , this.response_data.data.user.user_id);
          if(this.response_data.data.user.client_id)
          {
            localStorage.setItem('client_id' , this.response_data.data.user.client_id);
          }else{
            localStorage.setItem('freelancer_id' , this.response_data.data.user.freelancer_id);
          }

          //redirect user
          if(this.response_data.data.user.client_id != null)
          {
            localStorage.setItem('clientType' , 'client');
            this.router.navigateByUrl('/client/main');
          }
          else if(this.response_data.data.user.freelancer_id != null)
          {
            localStorage.setItem('freelancerType' , 'freelancer');
            this.router.navigateByUrl('/freelancer');
          }
        }else{
          this.errorUpdate = true;
        }
      },error=>{
        this.errorUpdate = true;
        console.log(error);
      });

    }
    else
    {
      alert('credentials are incorrect')
      this.isLogged = true;
      console.log(this.isLogged);
    }

  }//end of login function

}
