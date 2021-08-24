import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { RespondedLocationToken } from 'src/app/models/location/responded-location-token';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { countries } from 'src/app/models/location/countries';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location:RespondedLocationToken=new RespondedLocationToken
  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder , private api:ApiService,private countryAndCities:CountriesService , private router : Router , private userService : UserService) { }

 placeholder="Start typing your city"
 countries :countries []=[]

  // data comes from social sign up
  user_data : any = ''
  queryloc:string=""
  // data comes from manually signUp
  data : any = '';
  arrayOfCountries:any
  arrayOfCities:any
  arrayOfStates:any
  response_data : any;
  isLocationGet : boolean = false;
  locationAccessToken:any;
  ngOnInit(): void {

    if(localStorage.getItem('user_data'))
    {
      this.user_data = localStorage.getItem('user_data');
      this.user_data = JSON.parse(this.user_data);
      console.log(this.user_data);
    }
    else if(localStorage.getItem('data'))
    {
      this.data = localStorage.getItem('data');
      this.data = JSON.parse(this.data);
      console.log(this.data.user_data);
    }

    this.form = this.formBuilder.group({
      country : ['' , [ Validators.required ]],
      street: ['' , [Validators.required ]],
      city: ['' , [Validators.required ]],
      zip_code: ['' , [Validators.required ]]

    })
   /*-------------------------------------------
           using rest api for location
    -------------------------------------------*/
    //getting access token
    this.locationAccessToken = this.countryAndCities.getToken();
    this.countryAndCities.getCountries(this.locationAccessToken).subscribe(res=>{
      alert(res);
      this.arrayOfCountries =res
      this.isLocationGet = true;
    // console.log(this.arrayOfCountries[0].country_name)
  },error=>
  {

});
  //////////////////////////////////



  }


    isLogged : boolean = false;
    next() {

      if(this.form.valid)
      {

        // check exists
        if(localStorage.getItem('user_data'))
        {
          this.user_data.city = this.form.controls['city'].value;
          this.user_data.country = this.form.controls['country'].value;
          this.user_data.zip_code = this.form.controls['zip_code'].value;
          this.user_data.street = this.form.controls['street'].value;
          console.log(this.user_data)
        }
        else if(localStorage.getItem('data'))
        {
          this.data.user_data.city = this.form.controls['city'].value;
          this.data.user_data.country = this.form.controls['country'].value;
          this.data.user_data.zip_code = this.form.controls['zip_code'].value;
          this.data.user_data.street = this.form.controls['street'].value;
          console.log(this.data.user_data)
        }


        //if signUp with socialite done
        if(this.user_data.response)
        {
          console.log(this.user_data);

          //send request
          this.userService.registerWithSocialite(this.user_data).subscribe(response=>{

            this.response_data = response;
            console.log(this.response_data);
            if(this.response_data.data != null)
            {

              // localStorage.setItem('token' , this.response_data.data.token);
              localStorage.setItem('user_data' , JSON.stringify(this.response_data.data.user));
              localStorage.setItem('user_id' , this.response_data.data.user.user_id);
              console.log(this.response_data.data.user.user_id);
              // localStorage.setItem('success_msg' , this.response_data.msg);
              // localStorage.setItem('logged_status' , this.response_data.status);
              if(this.response_data.data.user.client_id)
              {
                localStorage.setItem('client_id' , this.response_data.data.user.client_id);
              }

              console.log(response);
              if(this.user_data.type == 'client')
              {
                localStorage.setItem('token' , this.response_data.data.token);
                localStorage.setItem('clientType' , 'client');
                this.router.navigateByUrl('/client/main');
              }
              else
              {
                localStorage.setItem('user_token' , this.response_data.data.token);
                localStorage.setItem('freelancerType' , 'freelancer');
                this.router.navigateByUrl('/user/signup/category');
              }

          }
          else
          {
            this.router.navigateByUrl('/user/signup/register');
            alert(this.response_data.msg.email);
            localStorage.setItem('error_msg' , JSON.stringify(this.response_data.msg.email));
          }
          })//end of request

        }
        else //=> if logged manually
        {
          console.log(this.data.user_data)

          //send request
          this.userService.register(this.data.user_data).subscribe(response=>{

            console.log(response);

            const formData = new FormData()
            // formData.append('image', )

            //if response has token
            this.response_data = response;
            if(this.response_data.data != null)
            {

              // localStorage.setItem('token' , this.response_data.data.access_token);
              localStorage.setItem('user_data' , JSON.stringify(this.response_data.data.user));
              localStorage.setItem('user_id' , this.response_data.data.user.user_id);
              localStorage.setItem('token' , this.response_data.data.access_token);

              if(this.response_data.data.user.client_id)
              {
                localStorage.setItem('client_id' , this.response_data.data.user.client_id);
              }else{
                localStorage.setItem('freelancer_id' , this.response_data.data.user.freelancer_id);
              }

              //redirect user
              if(this.data.user_data.type == 'client')
              {
                // localStorage.setItem('token' , this.response_data.data.access_token);
                localStorage.setItem('clientType' , 'client');
                this.router.navigateByUrl('/client/main');
              }
              else
              {
                //we can't save token because we need freelancer information
                // localStorage.setItem('user_token' , this.response_data.data.access_token);

                localStorage.setItem('freelancerType' , 'freelancer');
                this.router.navigateByUrl('/user/signup/category');
              }

            }
            else
            {
              this.router.navigateByUrl('/user/signup/register');
              alert(this.response_data.msg.email);
              localStorage.setItem('error_msg' , JSON.stringify(this.response_data.msg.email));
            }


          } , error=>console.error)//end of request

        }

      }
      else //=> invalid data or error validation
      {
        this.isLogged = true;
      }

    }

    //==============start use notification ===============
    // successAlertNotification(){
    //   Swal.fire('Hi', 'Congrats! operation successfull', 'success')
    // }

    
    //=================End of notifications ==============


    selectCountry(selectedCountry:string){
        console.log(selectedCountry)
        this.countryAndCities.getCities(selectedCountry, this.locationAccessToken).subscribe(res=>{
          this.arrayOfCities=res
          // console.log(this.arrayOfCities[0].state_name)
        })
    }
    selectState(a:HTMLElement){
      this.placeholder=a.innerText

      console.log(a.innerText)
    }


}//End Of Class

