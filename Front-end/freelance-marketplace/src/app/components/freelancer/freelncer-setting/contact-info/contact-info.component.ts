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


  user_id : any;

  constructor(private formBuilder : FormBuilder  , private router : Router  , private userService : UserService) { }
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


  isLogged : boolean = false;

  saveAccountData(){



    console.log(this.form.value);
    if(this.form.valid)
    {
      this.userService.updateUser(this.user_id , this.form.value).subscribe(response=>{
        console.log(response);
        alert('updated successfully');
      })
    }
    else
    {
      this.isLogged = true;
      console.log(this.isLogged);
    }

  }

  saveLocationData(){
    console.log(this.formLocation.value)
    if(this.formLocation.valid)
    {
      alert('updated successfully');
    }
    else
    {
      this.isLogged = true;
      console.log(this.isLogged);
    }
  }




}
