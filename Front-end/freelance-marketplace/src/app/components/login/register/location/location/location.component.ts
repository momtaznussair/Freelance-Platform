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

        //if signUp with socialite done
        if(this.user_data.response)
        {
          console.log(this.user_data);

          //send request
          this.userService.register(this.user_data).subscribe(response=>{

            console.log(response);

            //redirect user as a client or freelancer
            if(this.user_data.type == 'client')
            {
              this.router.navigateByUrl('/client/main');
            }else
            {
              this.router.navigateByUrl('/user/signup/category');
            }
          })//end of request

        }
        else //=> if logged manually
        {

          //send request
          this.userService.register(this.user_data).subscribe(response=>{
            console.log(response);


            if(this.user_data.user_data.type == 'client')
            {
              this.router.navigateByUrl('/client/main');
            }
            else
            {
              this.router.navigateByUrl('/user/signup/category');
            }

          })//end of request

        }

      }
      else //=> invalid data or error validation
      {
      this.isLogged = true;
      }

    }
  }

