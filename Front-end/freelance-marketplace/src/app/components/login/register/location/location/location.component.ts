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

  currentDataForUser : any;
  ngOnInit(): void {

    this.currentDataForUser = localStorage.getItem('user_data');

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
        localStorage.setItem('token' , 'any');
        this.currentDataForUser = JSON.parse(this.currentDataForUser);
        this.currentDataForUser.location = this.form.value;
        console.log(this.currentDataForUser);

        this.router.navigateByUrl('/user/signup/category');
        // this.userService.register(this.currentDataForUser).subscribe(response=>{
        //   console.log(response);
        // })
      }
      else
      {
      this.isLogged = true;
      }

    }
  }

