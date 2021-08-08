import { Component, OnInit } from '@angular/core';
import {JobPostsService} from '../../../../services/job-posts.service'
import { HttpParams } from '@angular/common/http';
// import { Categories } from 'src/app/models/categories/categories';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.css']
})
export class FilterJobsComponent implements OnInit {
  query:any='';
  shape1='solid';
  shape2='solid';
  shape3='solid';
  params:any=[];
  count = 0;
  currentIndex:number=0;
  constructor(private jobsPosts:JobPostsService,private category:Category) { }

  ngOnInit(): void {
    this.fetchPosts();
  }


   /*-------------------------
     add params to array params
  -------------------------- */ 
  addParams(e:any){
    if(e.target.checked){
     this.params.push(e.target.value)
    }else{
     console.log(e)
    }
    this.params.push(e.innerText);
   console.log(this.params);
   }
  /*-------------------------
     change icon methods 
  -------------------------- */ 
  changeCatgoryIcon(){
    if(this.shape1=='solid'){
      this.shape1='chevron-up'
    }else{
      this.shape1='solid'
    }
  }
  changeHourlyRateIcon(){
 if(this.shape2=='solid'){
   this.shape2='chevron-up'
 }else{
   this.shape2='solid'
 }
  }
  changeSkillsIcon(){
    if(this.shape3=='solid'){
      this.shape3='chevron-up'
    }else{
      this.shape3='solid'
    }
  
  }
 /*-------------------------
       pagination methods 
  -------------------------- */ 
  page=1;
  tableSize=7;
  POSTS: any=[];

  fetchPosts(): void {
    // this.jobsPosts.getAllPosts(HttpParams)
    //   .subscribe(
    //     response => {
    //       this.POSTS = response;
    //       console.log(this.POSTS);
    //     },
    //     error => {
    //       console.log(error);
    //     });
    this.jobsPosts.getAllCategories(HttpParams)
    .subscribe(
      response =>{
      this.category=response;
      console.log(response);
    }
    ,error =>{console.log(error);}
      );
    
      
  }
  onTableDataChange(event:any){
    this.page = event;
    this.fetchPosts();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }  
}
