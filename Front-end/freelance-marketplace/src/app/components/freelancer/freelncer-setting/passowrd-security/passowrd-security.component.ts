import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-passowrd-security',
  templateUrl: './passowrd-security.component.html',
  styleUrls: ['./passowrd-security.component.css']
})
export class PassowrdSecurityComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private userService : UserService) { }

  isDataUpdated : boolean = false;
  user_id : any;
  isLogged : boolean = false;
  resData : any;
  errorUpdate : boolean = false;;

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      password : ['' , [Validators.required , Validators.minLength(8) ]],
      new_password : ['' , [Validators.required , Validators.minLength(8) ]],
      new_password_confirmation : ['' , [Validators.required]],
    })

  }

  new_password : string = '';
  new_password_confirmation : string = '';

  changePassword(){

    console.log(this.form.value)
    if(this.form.valid)
    {
      this.userService.updateUser( `updatePassword/${this.user_id}` , this.form.value).subscribe(response=>{
        console.log(response);
        this.user_id = localStorage.getItem('user_id');
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
