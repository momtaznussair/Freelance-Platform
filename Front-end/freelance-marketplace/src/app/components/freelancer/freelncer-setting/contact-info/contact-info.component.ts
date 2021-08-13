import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  formLocation : FormGroup = new FormGroup({});

  isDataUpdated : boolean = false;
  user_id : any;
  isLogged : boolean = false;
  resData : any;
  errorUpdate : boolean = false;

  constructor(private formBuilder : FormBuilder  ,  private userService : UserService) { }
  ngOnInit(): void {

    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_id);

    //validate email and name form
    this.form = this.formBuilder.group({
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      username : ['' , [Validators.minLength(10) ,Validators.maxLength(255) , Validators.required] ],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]]
    })


    //validate email and name form
    this.formLocation = this.formBuilder.group({
      phone_number : ['' , [Validators.maxLength(255) , Validators.required] ],
      country : ['' , [Validators.required] ],
      city : ['' , [Validators.required] ],
      street : ['' , [Validators.minLength(10) ,Validators.maxLength(255) , Validators.required] ],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]]
    })
  }




  saveAccountData(){

    console.log(this.form.value);
    if(this.form.valid)
    {
      this.userService.updateUser( `update/${this.user_id}` , this.form.value).subscribe(response=>{
        console.log(response);
        this.resData = response;
        if(this.resData.data != null)
        {
          this.isDataUpdated = true;
        }else
        {
          this.errorUpdate = true;
        }
      } , error => {
        this.errorUpdate = true;
      });
    }
    else
    {
      alert('please check your data and try again');
      this.isLogged = true;
      console.log(this.isLogged);
    }

  }

  saveLocationData(){
    console.log(this.formLocation.value)
    if(this.formLocation.valid)
    {
      this.userService.updateUser( `updateLocation/${this.user_id}` , this.formLocation.value).subscribe(response=>{
        console.log(response);
        if(this.resData.data != null)
        {
          this.isDataUpdated = true;
        }else
        {
          this.errorUpdate = true;
        }
      } , error => {
        this.errorUpdate = true;
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
