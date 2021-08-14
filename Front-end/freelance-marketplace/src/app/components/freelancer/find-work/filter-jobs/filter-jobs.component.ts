import { Component, OnInit } from '@angular/core';
// import {JobPostsService} from '../../../../services/job-posts.service'
import { HttpParams } from '@angular/common/http';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.css']
})
export class FilterJobsComponent implements OnInit {
  query:any;
  shape1='solid';
  shape2='solid';
  shape3='solid';
  params:any=[];
  count = 0;
  currentIndex:number=0;
  cat :Category[]=[];
  constructor(private catService: CategoryService ) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  search(){}

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
  POSTS: any;

  fetchPosts(): void {
    
    // this.jobsPosts.getAllPosts(HttpParams)
    //   .subscribe(
    //     response => {
    //       this.POSTS = response;
    //       console.log(response);
    //     },
    //     error => {
    //       console.log(error);
    //     });
    this.catService .getCategories('http://127.0.0.1:8000/api/categories').subscribe(response=>{
      this.cat=response ['data'] as Category[];
      console.log(this.cat)
      
    }
    // , error =>{
      // console.log(error);
      // alert(error)
    // }
    )
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
