import { Component, OnInit } from '@angular/core';
// import {JobPostsService} from '../../../../services/job-posts.service'
import { HttpParams } from '@angular/common/http';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.css']
})
export class FilterJobsComponent implements OnInit {
  r:any;
  query:any;
  shape1='solid';
  shape2='solid';
  shape3='solid';
  params= new Set();
  count = 0;
  currentIndex:number=0;
  cat :Category[]=[];
  constructor(private catService: CategoryService,private job:JobService ) { }


  radioSelected:any
  radioSel:any;
  radioSelectedString:string=''
  getSelecteditem(){
    this.radioSel = this.cat.find(Item => Item.name === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
    console.log(this.radioSelectedString)
  }
  ngOnInit(): void {
    this.fetchPosts();
  }
  search(){}


 jobPost:any;
  fetchPosts(): void {
  
      this.job.get().subscribe(response=>{
        this.jobPost=response['data'] as Job;
    console.log(this.jobPost)
      },error=>console.error);
      ///////////
    this.catService .getCategories('http://127.0.0.1:8000/api/categories').subscribe(response=>{
      this.cat=response ['data'] as Category[];
      console.log(this.cat)
    }
    )
  }
  addCategories(e:any){

  }

  addPayment(e:any){
    //  console.log(e.target.tagName)
      // console.log(e.target.innerText)
      if(e.target.checked){
       this.params.add(e.target.value)
      }else{
        console.log(e)
      }
      console.log(e.target.name);
        console.log(this.params);
     }
   /*------------------------------
      add filters to array params
  --------------------------------*/ 
  addExpermentLevel(e:any){
  //  console.log(e.target.tagName)
    // console.log(e.target.innerText)
    if(e.target.checked){
     this.params.add(e.target.value)
    }else{
      console.log(e)
    }
    console.log(e.target.name);
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
