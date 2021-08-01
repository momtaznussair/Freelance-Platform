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
  arr = [{"id":1,"name":"web","created_at":null,"updated_at":null}];


    msg = localStorage.getItem('msg');

  constructor(private appService:RegisterDataService,private apiService : ApiService) {
  
  }

  category : Categories = new Categories();
  ngOnInit(): void {
    this.apiService.get(`${environment.apiUrl}/categories`).subscribe(response =>{
      this.category = response;
      console.log(response);
      console.log(this.category);
    },error=>console.error);
  }
  
  submit()
 {
//  this.appService.updateApprovalMessage(this.approvalText);
 console.log(this.appService.momtazArray['skills']);
 console.log(this.appService.momtazArray['expertiselevel']);
 }


}
