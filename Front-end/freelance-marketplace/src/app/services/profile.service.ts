import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private profile:HttpClient) { }


  get(){
    return this.profile.get("http://127.0.0.1:8000/freelancers");
  }
    getById(){
    return this.profile.get("http://127.0.0.1:8000/freelancers/id");
  }
}
