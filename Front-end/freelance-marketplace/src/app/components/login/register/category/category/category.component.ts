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
    // } , error=>console.error);

    //second test =======
    // this.apiService.get("https://www.universal-tutorial.com/api/countries" , {header:{}})
    //   .subscribe(response=>{
    //     alert ('success');
    //     console.log(response);
    //   } , error=>console.error);

    // this.currentRegisterData = localStorage.getItem('data');
    // this.apiService.get(`${environment.apiUrl}/categories`).subscribe(response =>{
    //   // this.category = response[]

    //   console.log(response);
    //   console.log(this.category);
    // },error=>console.error);
  }

  submit()
  {
    // this.registerService.registerProcess.registrationData
    // console.log(this.registerService.registerProcess);
  //  this.appService.updateApprovalMessage(this.approvalText);
  }


}
