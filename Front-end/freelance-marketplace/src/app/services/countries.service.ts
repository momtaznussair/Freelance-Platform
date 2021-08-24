
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
import { RespondedLocationToken } from '../models/location/responded-location-token';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private api:ApiService) { }
    location:RespondedLocationToken=new RespondedLocationToken()
    // get access token
  getToken(){
    const headers= new HttpHeaders()
    .append('content-type', 'application/json')
    .append('api-token', 'oIqCdGdnAsHcUlO3A78PixTCDzZjPvFsGIecAYheq39c3RdI0LI7i9udeKlNY4D_Iig')
    .append('user-email', 'amira95badr@gmail.com');
  
  this.api.get("https://www.universal-tutorial.com/api/getaccesstoken",{ 'headers': headers }).subscribe(res=>{
    return res;
  }, error=> {return error}); 
}

// get all countries
 getCountries(accessToken:any){
  const headers= new HttpHeaders()
  .set("Accept", "application/json")
  .set("Authorization", `Bearer ${accessToken}`)
  console.log(this.getToken());
  return  this.api.get("https://www.universal-tutorial.com/api/countries",{ 'headers': headers });

 }
// get cities of a scpicific 
 getCities(countrySelected:string, accessToken:any){
  const headers= new HttpHeaders()
  .set("Accept", "application/json")
  .set("Authorization",`Bearer ${accessToken}`)
  return  this.api.get(`https://www.universal-tutorial.com/api/states/${countrySelected}`,{ 'headers': headers });

 }

}
