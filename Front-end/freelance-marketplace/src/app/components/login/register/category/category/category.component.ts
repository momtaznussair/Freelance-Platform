import { environment } from './../../../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
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


  category : Categories = new Categories();
  constructor(private apiService : ApiService) {}

  ngOnInit(): void {
    this.apiService.get(`${environment.apiUrl}/categories`).subscribe(response =>{
      this.category = response;
      console.log(response);
      console.log(this.category);
    },error=>console.error);
  }

}
