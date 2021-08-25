import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.css']
})
export class FilterJobsComponent implements OnInit {
  r:any;
  query:any; // search term


  
  //filters icons
  shape0='fa-chevron-down';
  shape1='fa-chevron-down';
  shape2='fa-chevron-down';
  shape3='fa-chevron-down';
  shape4='fa-chevron-down';

  cat :any[]=[];
  constructor(private catService: CategoryService,private job:JobService, private activatedRoute: ActivatedRoute) { }


  radioSelected:any
  radioSel:any;
  radioSelectedString:string=''
  urlQuery:string=''
  getSelecteditem(){
    this.radioSel = this.cat.find(Item => Item.name === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
    // console.log(this.radioSelectedString)
  }
  ngOnInit(): void {
    this.fetchJobs();
  this.urlQuery=this.activatedRoute.snapshot.params.query;
  this.query=this.urlQuery;
  }
  // search(){
    // console.log(this.query)
  // }


 jobPost:any;
  Categories:any;
  fetchJobs(): void {
  // get jobs
      this.job.getJobs().subscribe(response=>{
        this.jobPost=response['data'] as Job;
    console.log(this.jobPost)
      },error=>console.error);
 // get categories 
    this.catService .getCategories('categories').subscribe(response=>{
      // this.cat=response ['data'] as Category[];
      this.cat=response ['data'] 
     this.Categories =this.cat
    for(let category of this.cat){
      category.selected=false;
    }
    }
    )
  }
  
   /*------------------------------
      add filters to array params
  --------------------------------*/

  // filters

  experience  = [{name:'entry',selected:false},{name:'intermediate',selected:false},{name:'expert',selected:false}];
  payment_style  = [{name:'fixed',selected:false},{name:'hourly',selected:false}];
  payment_amountRange={min:0,max:0};
  nOfProposals ={min:0,max:0};

selectCategory(input:any){
  let index=this.Categories.findIndex((element: { name: any; })=>element.name==input.value);
  this.Categories[index].selected=! this.Categories[index].selected;
 
}

experienceLevel(input:any){
  let index=this.experience.findIndex((level)=>level.name==input.value);
  this.experience[index].selected=! this.experience[index].selected;
}
paymentStyle(input:any){
  let index=this.payment_style.findIndex((level)=>level.name==input.value);
  this.payment_style[index].selected=! this.payment_style[index].selected;
}
paymentAmount(min:any,max:any){
this.payment_amountRange.min=min;
this.payment_amountRange.max=max;
}
selectNOfProposals(min:any,max:any){
  this.nOfProposals.min=min;
  this.nOfProposals.max=max;
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
  count = 0;
  currentIndex:number=0;
  onTableDataChange(event:any){
    this.page = event;
    this.fetchJobs();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchJobs();
  }  
}




   

  