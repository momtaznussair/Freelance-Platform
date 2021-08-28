import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private userService : UserService) { }


  isTokenFound : boolean = false;
  user_id : any;
  resData : any;
  isDataUpdated : boolean = false;
  errorUpdate : boolean = false;

  ngOnInit(): void {

    this.user_id = localStorage.getItem('user_id');
    if(localStorage.getItem('token'))
    {
      this.isTokenFound = true;
    }else
    {
      this.isTokenFound = false;
    }


    this.form = this.formBuilder.group({
      password : ['' , [Validators.required , Validators.minLength(8) ]],
      new_password : ['' , [Validators.required , Validators.minLength(8) ]],
      new_password_confirmation : ['' , [Validators.required]],
    })

  }

  new_password : string = '';
  new_password_confirmation : string = '';
  isLogged : boolean = false;

  changePassword(){

    console.log(this.form.value)
    if(this.form.valid)
    {
      this.userService.updateUser( `updatePassword/${this.user_id}` , this.form.value).subscribe(response=>{
        console.log(response);
        if(this.resData.data != null)
        {
          this.isDataUpdated = true;
        }else
        {
          this.errorUpdate = true;
        }
      } , error => {
        alert('please check your data and try again');
      });
    }
    else
    {
      this.isLogged = true;
      alert('please check your info and try again');
      console.log(this.isLogged);
    }
  }

}
