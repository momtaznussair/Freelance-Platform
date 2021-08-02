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
  constructor(private formBuilder : FormBuilder  , private router : Router  , private apiService : ApiService) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      userName : ['' , [Validators.minLength(10) ,Validators.maxLength(255) , Validators.required] ],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]]
    })
  }

  isLogged : boolean = false;

  saveData(){
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
}
