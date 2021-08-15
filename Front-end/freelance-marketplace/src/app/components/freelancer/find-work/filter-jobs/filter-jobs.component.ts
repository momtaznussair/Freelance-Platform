import { Component, OnInit } from '@angular/core';
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
    
  shape0='fa-chevron-down';
  shape1='fa-chevron-down';
  shape2='fa-chevron-down';
  shape3='fa-chevron-down';
  shape4='fa-chevron-down';
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
  
      this.job.getJobs().subscribe(response=>{
        this.jobPost=response['data'] as Job;
    console.log(this.jobPost)
      },error=>console.error);
      ///////////
    this.catService .getCategories('categories').subscribe(response=>{
      this.cat=response ['data'] as Category[];
      console.log(this.cat)
    }
    )
  }
  addCategories(e:any){

  }

  addParams(e:any){
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
  changeCategoryIcon(){
    if(this.shape0=='fa-chevron-down'){
      this.shape0='fa-chevron-up'
    }else{
      this.shape0='fa-chevron-down'
    }
  }
  changenoOfPrposalsIcon(){
    if(this.shape1=='fa-chevron-down'){
      this.shape1='fa-chevron-up'
    }else{
      this.shape2='fa-chevron-down'
    }
  }
  changeHourlyRateIcon(){
    if(this.shape2=='fa-chevron-down'){
      this.shape2='fa-chevron-up'
    }else{
      this.shape2='fa-chevron-down'
    }
  }
  changeSkillsIcon(){
    if(this.shape3=='fa-chevron-down'){
      this.shape3='fa-chevron-up'
    }else{
      this.shape3='fa-chevron-down'
    }
  
  }
  changeExperienceIcon(){
    if(this.shape4=='fa-chevron-down'){
      this.shape4='fa-chevron-up'
    }else{
      this.shape4='fa-chevron-down'
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
