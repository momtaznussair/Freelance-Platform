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

  constructor(private appService:RegisterDataService,private apiService : ApiService) {

  }

  category : Categories = new Categories();
  ngOnInit(): void {
    this.apiService.get(`${environment.apiUrl}/categories`).subscribe(response =>{
      this.category = response;
      // this.appService.registerProcess.push(response);
      console.log(this.appService.registerProcess);
      console.log(response);
      console.log(this.category);
    },error=>console.error);
  }

  submit()
 {
 }


}
