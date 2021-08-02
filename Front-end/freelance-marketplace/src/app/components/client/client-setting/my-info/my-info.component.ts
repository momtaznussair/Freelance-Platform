import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  formLocation : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder  , private router : Router  , private apiService : ApiService) { }

  ngOnInit(): void {

    //get countries
    // this.apiService.get("https://www.universal-tutorial.com/api/countries" , { header:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtb210YXpfbnVzc2FpckB5YWhvby5jb20iLCJhcGlfdG9rZW4iOiJZbUJNQnVfZUE5OVB5dlJ3bTFWRlNJWWZYQkZ0WjR6cmJ1UTMzakJrYUQ5N2d6OVk5eEJacVkzME5SQjZFU2J4OFU0In0sImV4cCI6MTYyNzkyNjAzNH0.BiJp1Za9pdFSZOLlKtU3ktU5TIILqTmpzbJS1CvkkSU","Accept": "application/json"}})
    //   .subscribe(response=>{
    //     alert('success');
    //     console.log(response);
    // },error=>console.error)

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

      alert('updated successfully');
      // this.apiService.post(`${environment.apiUrl}/update` , this.form.getRawValue() , {header:{"token" : `Bearer ${localStorage.getItem('token')}`}}).subscribe(response=>{
      //   alert ('updated successfully');
      //   console.log(response);
      this.router.navigateByUrl('/client/info');
      // },error=>console.error);

    }
    else
    {
      this.isLogged = true;
      console.log(this.isLogged);
    }

  }

  saveLocationData(){
    console.log(this.formLocation.value)
    if(this.form.valid)
    {
      alert('updated successfully');
      this.router.navigateByUrl('/client/info');
    }
    else
    {
      this.isLogged = true;
      console.log(this.isLogged);
    }
  }




}
