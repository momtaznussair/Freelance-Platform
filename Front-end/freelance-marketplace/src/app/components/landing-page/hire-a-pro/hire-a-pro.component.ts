import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hire-a-pro',
  templateUrl: './hire-a-pro.component.html',
  styleUrls: ['./hire-a-pro.component.css']
})
export class HireAProComponent implements OnInit {

  constructor(private _apiservice:ApiService) { }
  categories:Category[]=[];
  skills:Category[]=[];

  ngOnInit(): void {
<<<<<<< HEAD
    // this._apiservice.get("http://127.0.0.1:8000/api/categories").subscribe(Response=>{
    //   this.categories=Response as Category[];
    // },error=>{}
    // );


    // this._apiservice.get("http://127.0.0.1:8000/api/skills").subscribe(Response=>{
    //   this.skills=Response as Category[];
    // },error=>{}
    // );
=======
  //   this._apiservice.get("http://127.0.0.1:8000/api/categories").subscribe(Response=>{
  //     this.categories=Response as Category[];
  //   },error=>{}
  //   );


  //   this._apiservice.get("http://127.0.0.1:8000/api/skills").subscribe(Response=>{
  //     this.skills=Response as Category[];
  //   },error=>{}
  //   );
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
  }

}
