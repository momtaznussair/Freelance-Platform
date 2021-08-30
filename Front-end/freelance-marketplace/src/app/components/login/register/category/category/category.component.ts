import { environment } from './../../../../../../environments/environment.prod';
import { FreelancerRegisterProcess } from './../../../../../services/register-data.service';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories/categories';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';



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

  // successAlertNotification(){
  //   Swal.fire('Welcome', 'Only some steps to finish your registrations', 'success')
  // }

  freelancer_id :any;
  ngOnInit(): void {

    // this.successAlertNotification();

    //test request location
    this.apiService.get("https://www.universal-tutorial.com/api/countries/",{ 'headers': {
      'Accept' : 'application/json',
      'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhbWlyYTk1YmFkckBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJvSXFDZEdkbkFzSGNVbE8zQTc4UGl4VENEelpqUHZGc0dJZ`
    }}).subscribe(res =>{
      console.log(res)
    },error=>{console.log(error)});

    //end of test location

    localStorage.removeItem('data');

    this.currentRegisterData = localStorage.getItem('user_data');
    this.currentRegisterData = JSON.parse(this.currentRegisterData);
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
      this.registerService.registerProcess.category_id = +this.form.controls['category_id'].value;
      localStorage.setItem("data" ,JSON.stringify(this.registerService.registerProcess));
      this.router.navigateByUrl('/user/signup/overview');
    }
    else
    {
      this.isDone = true
    }
  }


  // Test for request freelancer data
  // test_request: any ={
  //   user_id : 34,
  //   category_id : 1,
  //   overview : `this is test overview this is test overview this is test overview this is test overview this is test overview
  //               this is test overview this is test overview this is test overview this is test overview this is test overview this is test overview
  //               this is test overview this is test overview this is test overview this is test overview this is test overview this is test overview
  //               this is test overview this is test overview this is test overview this is test overview this is test overview this is test overview
  //               this is test overview this is test overview this is test overview `,
  //   job_title : 'this is test title',
  //   experience_id : 2,
  // }


  test()
  {
    // this.apiService.post(`${environment.apiUrl}/freelancers` , this.test_request).subscribe(response=>{
    //   console.log(response);
    // })
  }


  //==============
}