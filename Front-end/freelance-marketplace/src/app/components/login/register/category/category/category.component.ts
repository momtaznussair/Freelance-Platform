import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../../environments/environment.prod';
import { FreelancerRegisterProcess } from './../../../../../services/register-data.service';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories/categories';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // categories : Categories[] = [];
  categories :any ;

  constructor(private formBuilder : FormBuilder ,private apiService : ApiService ,private router : Router , private registerService : FreelancerRegisterProcess) {

  }

  isCategoryGet : boolean = false;
  isDone :boolean = false;
  currentCategoryChosen : string = '';

  currentRegisterData : any;
  form : FormGroup = new FormGroup({});


  ngOnInit(): void {

    localStorage.removeItem('data');

    this.currentRegisterData = localStorage.getItem('user_data');
    this.currentRegisterData = JSON.parse(this.currentRegisterData);
    console.log(this.currentRegisterData.id);
    this.apiService.get(`${environment.apiUrl}/categories`).subscribe(response=>{
      this.isCategoryGet = true;
      // console.log(response);
      this.categories = response;
      // console.log(this.categories.data);
    })

    this.form = this.formBuilder.group({
      category_id : ['',[Validators.required]]
    })
  }


  submit()
  {
    if(this.form.valid)
    {
      console.log(this.form.value);
      this.registerService.registerProcess.category_id = this.form.controls['category_id'].value;
      localStorage.setItem("data" ,JSON.stringify(this.registerService.registerProcess));
      this.router.navigateByUrl('/user/signup/overview');
    }
    else
    {
      this.isDone = true
    }
  }


  // Test for request freelancer data
  test_request: any ={
    user_id : 34,
    category_id : 1,
    overview : `this is test overview this is test overview this is test overview this is test overview this is test overview
                this is test overview this is test overview this is test overview this is test overview this is test overview this is test overview
                this is test overview this is test overview this is test overview this is test overview this is test overview this is test overview
                this is test overview this is test overview this is test overview this is test overview this is test overview this is test overview
                this is test overview this is test overview this is test overview `,
    job_title : 'this is test title',
    experience_id : 2,
  }


  test()
  {
    this.apiService.post(`${environment.apiUrl}/freelancers` , this.test_request).subscribe(response=>{
      console.log(response);
    })
  }


}
