
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
//"auth_token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhbWlyYTk1aWJyYWhpbUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJvSXFDZEdkbkFzSGNVbE8zQTc4UGl4VENEelpqUHZGc0dJZWNBWWhlcTM5YzNSZEkwTEk3aTl1ZGVLbE5ZNERfS"
  getToken(){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('api-token', 'oIqCdGdnAsHcUlO3A78PixTCDzZjPvFsGIecAYheq39c3RdI0LI7i9udeKlNY4D_Iig')
    .set('user-email', 'amira95badr@gmail.com');
  
  return  this.api.get("https://www.universal-tutorial.com/api/getaccesstoken",{ 'headers': headers });
 
}
 getCountries(){
  const headers= new HttpHeaders()
  .set("Accept", "application/json")
  .set("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhbGFhbm9zc2llckBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJNTlB4VUlLTWZ2bmFvaHhJNXlOQ1Y2aUtwekp1d1JPM21iZXd1MHlfLS1VX3NONWZEWEUzTzc2MEdNMGt3MEM4LTNzIn0sImV4cCI6MTYyODYyOTU4OH0.STye-ey_-VBW11TGH2CtZA_bUFgUmLt6WIeo6vnAUoU")
  return  this.api.get("https://www.universal-tutorial.com/api/countries/",{ 'headers': headers });

 }
 getCities(countrySelected:string){
  const headers= new HttpHeaders()
  .set("Accept", "application/json")
  .set("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhbGFhbm9zc2llckBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJNTlB4VUlLTWZ2bmFvaHhJNXlOQ1Y2aUtwekp1d1JPM21iZXd1MHlfLS1VX3NONWZEWEUzTzc2MEdNMGt3MEM4LTNzIn0sImV4cCI6MTYyODYyOTU4OH0.STye-ey_-VBW11TGH2CtZA_bUFgUmLt6WIeo6vnAUoU")
  return  this.api.get(`https://www.universal-tutorial.com/api/states/${countrySelected}`,{ 'headers': headers });

 }

}
