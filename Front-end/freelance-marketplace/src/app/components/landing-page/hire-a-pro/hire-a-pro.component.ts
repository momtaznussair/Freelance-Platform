import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hire-a-pro',
  templateUrl: './hire-a-pro.component.html',
  styleUrls: ['./hire-a-pro.component.css']
})
export class HireAProComponent implements OnInit {

  constructor(private _apiservice:ApiService,private http:HttpClient) { }
  categories:Category[]=[];
  skills:Category[]=[];

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:8000/api/categories").subscribe(response=>{
      this.categories=response as Category[];
    },error=>{console.error('wrong')}
    );


    this.http.get("http://127.0.0.1:8000/api/skills").subscribe(response=>{
      this.skills=response as Category[];
    },error=>{console.error('wrong')}
    );
  }

}
