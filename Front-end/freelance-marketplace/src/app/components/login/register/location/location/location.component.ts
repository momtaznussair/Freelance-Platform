import { Component, OnInit } from '@angular/core';
import { RespondedLocationToken } from 'src/app/models/location/responded-location-token';
import { ApiService } from 'src/app/services/api.service';
import {RegisterDataService} from "../../../../../services/register-data.service";



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private appService:RegisterDataService, private apiService : ApiService) { }


   // responseToken : any = {auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…MwOX0.-8FYA7Pa40tCXSrPr-ZeKSGrbFeKCVD_-qwbT2Ze_qo" , "Accept": "application/json"}

   // token for get locations
  generatedToken : string = 'lZTv5kjIRIqEN89G5lfaXWdodpZzB3NhLOkmLGA0TM3tm93ifILj7_mFSmcMs60PJb0';

  //first request header
  firstRequestHeader : any = {
    "Accept": "application/json",
    "api-token": "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ",
    "user-email": "hemamessi47@gmail.com"
  }



  respondedToken : RespondedLocationToken = new RespondedLocationToken();

  ngOnInit(): void {
    this.apiService.get('https://www.universal-tutorial.com/api/getaccesstoken' , {headers : this.firstRequestHeader }).subscribe((response)=>{
      console.log(response)
      this.respondedToken.resToken = response
      let token = this.respondedToken.resToken.auth_token;
      localStorage.setItem('locationToken' ,`Bearer ${token}`);
    },error=>{
      console.log(error);
    })
  }

  //second header request
  secondRequestHeader : any = {
    "Authorization": localStorage.getItem('locationToken'),
    "Accept": "application/json",
  }

  getLocations(){
    // console.log(localStorage.getItem('locationToken'));
    console.log(this.secondRequestHeader)
    this.apiService.get('https://www.universal-tutorial.com/api/countries/' , {headers : this.secondRequestHeader}).subscribe(response=>{
      console.log(response);
    })
      
  
  }



}
