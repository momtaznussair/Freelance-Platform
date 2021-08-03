import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";
import { Categories } from 'src/app/models/categories/categories';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    msg = localStorage.getItem('msg');

  constructor(private httpClient : HttpClient ,private appService:RegisterDataService,private apiService : ApiService , private registerService : RegisterDataService) {

  }

  currentCategoryChosen : string = '';
  // category : Categories = new Categories();

  category : Categories[] =[];


  currentRegisterData : any;

  ngOnInit(): void {
    //first test ====
    // this.apiService.get("https://jsonplaceholder.typicode.com/posts").subscribe(response=>{
    //   alert('success');
    //   console.log(response);
    // } , error=>console.error);

    //second test =======
    // this.apiService.get("https://www.universal-tutorial.com/api/countries" , { header:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtb210YXpfbnVzc2FpckB5YWhvby5jb20iLCJhcGlfdG9rZW4iOiJZbUJNQnVfZUE5OVB5dlJ3bTFWRlNJWWZYQkZ0WjR6cmJ1UTMzakJrYUQ5N2d6OVk5eEJacVkzME5SQjZFU2J4OFU0In0sImV4cCI6MTYyNzkyNjAzNH0.BiJp1Za9pdFSZOLlKtU3ktU5TIILqTmpzbJS1CvkkSU","Accept": "application/json"}})
    //   .subscribe(response=>{
    //     alert ('success');
    //     console.log(response);
    //   } , error=>{alert('field')});

    // this.currentRegisterData = localStorage.getItem('data');
    this.apiService.get(`${environment.apiUrl}/categories`).subscribe(response =>{
      // this.category = response[]

      console.log(response);
      console.log(this.category);
    },error=>console.error);
  }


  submit()
  {
    // this.registerService.registerProcess.registrationData
    // console.log(this.registerService.registerProcess);
  //  this.appService.updateApprovalMessage(this.approvalText);
  }


}
