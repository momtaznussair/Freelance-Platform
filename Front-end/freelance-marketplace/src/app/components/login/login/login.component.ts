import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


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
      this.router.navigateByUrl('/client/main')
    }

    this.form = this.formBuilder.group({
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]]
    })
  }

  isLogged : boolean = false;
  response_data : any;

  login(){
    console.log(this.form.value);
    if(this.form.valid)
    {

      // localStorage.setItem("token" , "response");
      this.userService.login(this.form.getRawValue()).subscribe(response=>{
        console.log(response);
        this.response_data = response

        if(this.response_data.data != null)
        {
          localStorage.setItem('token' , this.response_data.data.token);
          localStorage.setItem('user_data' , JSON.stringify(this.response_data.data.user));
          localStorage.setItem('user_id' , this.response_data.data.user.user_id);
          localStorage.setItem('success_msg' , this.response_data.msg);
          localStorage.setItem('logged_status' , this.response_data.status);

          this.router.navigateByUrl('/freelancer');
        }
      },error=>console.error);

    }
    else
    {
      this.isLogged = true;
      console.log(this.isLogged);
    }



    // if(token)
    // {
    //   console.log(token);
    //   alert(JSON.stringify(this.form.getRawValue()));
    //   localStorage.setItem('token' , token);
    //   this.router.navigateByUrl('freelancer');
    // }
    // else
    // {
    //   this.router.navigateByUrl('/user');
    //   alert('login unsuccessfully');
    // }

  }//end of login function

  // submit():void{
  //   this.userService.login(this.form.getRawValue()).subscribe(response=>{
  //     alert(JSON.stringify( response));
  //   })
  // }







}
