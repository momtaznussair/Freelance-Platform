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

    msg = localStorage.getItem('msg');

  constructor(private formBuilder : FormBuilder ,private router : Router , private registerService : FreelancerRegisterProcess) {

  }

  currentCategoryChosen : string = '';

  currentRegisterData : any;
  form : FormGroup = new FormGroup({});

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      category_id : ['',[Validators.required]]
    })
  }


  submit()
  {
    if(this.form.valid)
    {
      console.log(this.form.value);
      this.registerService.registerProcess.category = this.form.value;
      localStorage.setItem("data" ,JSON.stringify(this.registerService.registerProcess));
      this.router.navigateByUrl('/user/signup/overview');
    }
  }


}
