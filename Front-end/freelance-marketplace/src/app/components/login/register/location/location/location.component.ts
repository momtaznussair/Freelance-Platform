import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

<<<<<<< HEAD
=======
import { RespondedLocationToken } from 'src/app/models/location/responded-location-token';
import { ApiService } from 'src/app/services/api.service';
import {RegisterDataService} from "../../../../../services/register-data.service";
import { environment } from './../../../../../../environments/environment.prod';
// import { Location } from 'src/app/models/location/location';

>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  form : FormGroup = new FormGroup({});
<<<<<<< HEAD
  constructor(private formBuilder : FormBuilder  , private router : Router) { }
=======
  constructor(private formBuilder : FormBuilder , private registerService : RegisterDataService , private router : Router) { }
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77

  currentRegisterData : any;
  ngOnInit(): void {

    this.currentRegisterData = localStorage.getItem('data');

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
<<<<<<< HEAD
        console.log(this.form.value);

        this.router.navigateByUrl('/user/signup/category');
=======
        this.currentRegisterData = JSON.parse(this.currentRegisterData)
        this.currentRegisterData.country = this.form.controls.country.value;
        this.currentRegisterData.street_address = this.form.controls.street_address.value;
        this.currentRegisterData.city = this.form.controls.city.value;
        this.currentRegisterData.zip_code = this.form.controls.zip_code.value;
        localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
        this.router.navigateByUrl("/freelancer");
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
      }
      else
      {
      this.isLogged = true;
      }

    }
  }

<<<<<<< HEAD
=======
  // constructor(private appService:RegisterDataService,private apiService : ApiService , private registerService : RegisterDataService)
  // {}

  // currentcityChosen : string = '';
  // location : Location = new Location();


   // responseToken : any = {auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…MwOX0.-8FYA7Pa40tCXSrPr-ZeKSGrbFeKCVD_-qwbT2Ze_qo" , "Accept": "application/json"}

   // token for get locations
  // generatedToken : string = 'lZTv5kjIRIqEN89G5lfaXWdodpZzB3NhLOkmLGA0TM3tm93ifILj7_mFSmcMs60PJb0';

  //first request header
  // firstRequestHeader : any = {
  //   "Accept": "application/json",
  //   "api-token": "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ",
  //   "user-email": "hemamessi47@gmail.com"
  // }
  // respondedToken : RespondedLocationToken = new RespondedLocationToken();


// this.apiService.get("https://www.universal-tutorial.com/api/countries")
// .subscribe(response=>{
//   console.log(response);
// } , error=>console.error);

//     this.currentRegisterData = localStorage.getItem('data');
//     this.apiService.get(`${environment.apiUrl}/location`).subscribe(response =>{
//       this.location = response;
//       console.log(this.location);
//     },error=>console.error);

//   }


    // this.apiService.get('https://www.universal-tutorial.com/api/getaccesstoken' , {headers : this.firstRequestHeader }).subscribe((response)=>{
    //   console.log(response)
    //   this.respondedToken.resToken = response
    //   let token = this.respondedToken.resToken.auth_token;
    //   localStorage.setItem('locationToken' ,`Bearer ${token}`);
    // },error=>{
    //   console.log(error);
    // })


  //second header request
  // secondRequestHeader : any = {
  //   "Authorization": localStorage.getItem('locationToken'),
  //   "Accept": "application/json",
  // }

  // getLocations(){
  //   // console.log(localStorage.getItem('locationToken'));
  //   console.log(this.secondRequestHeader)
  //   this.apiService.get('https://www.universal-tutorial.com/api/countries/' , {headers : this.secondRequestHeader}).subscribe(response=>{
  //     console.log(response);
  //   })



>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
