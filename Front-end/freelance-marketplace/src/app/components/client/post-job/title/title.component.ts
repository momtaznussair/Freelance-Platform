import { environment } from './../../../../../environments/environment';
import { ApiService } from './../../../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { postjob } from 'src/app/services/post-job.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  form : FormGroup = new FormGroup({});


  constructor(private formBuilder : FormBuilder  , private router : Router ,private jobprocess:postjob , private apiService : ApiService) { }


  categoryData : any;
  isCategoryGet:boolean = false;
  ngOnInit(): void {

    this.apiService.get(`${environment.apiUrl}/categories`).subscribe(res=>{
      this.categoryData = res;
      this.isCategoryGet = true;
    })

    this.form = this.formBuilder.group({
      job_title : ['' , [ Validators.required ,Validators.minLength(3), Validators.maxLength(255)]],
      category_id : ['', [Validators.required]]
    })
  }
  isLogged : boolean = false;
  next()
  {
    console.log(this.form.value);
    if(this.form.valid)
    {
      this.jobprocess.postjobProcess.job_title=this.form.controls.job_title.value;
      this.jobprocess.postjobProcess.category_id=this.form.controls.category_id.value;

      for(let i = 0 ; i< this.categoryData.data.length ; i++){
        if(this.categoryData.data[i].id == this.form.controls.category_id.value){
          localStorage.setItem('category_name', this.categoryData.data[i].name);
        }
      }
      localStorage.setItem('job_process',JSON.stringify(this.jobprocess.postjobProcess));
      this.router.navigateByUrl("/client/post-job/description");
    }
    else
    {
      this.isLogged = true;
    }
  }





}
