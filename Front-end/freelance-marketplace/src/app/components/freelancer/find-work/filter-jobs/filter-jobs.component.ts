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

  // filters
  category : string[] = []; //[]
  experience : string[] = ['entry', 'expert'];
  payement_style : string[] = [];
  nOfProposals : string[]  = [];

  //filters icons
  shape0='fa-chevron-down';
  shape1='fa-chevron-down';
  shape2='fa-chevron-down';
  shape3='fa-chevron-down';
  shape4='fa-chevron-down';
  count = 0;
  currentIndex:number=0;
  constructor(private catService: CategoryService,private job:JobService, private activatedRoute: ActivatedRoute) {
    // cat :Category[]=[];

  }


  radioSelected:any
  radioSel:any;
  radioSelectedString:string=''
  urlQuery:string=''
  getSelecteditem(){
    // this.radioSel = this.cat.find(Item => Item.name === this.radioSelected);
    // this.radioSelectedString = JSON.stringify(this.radioSel);
    // console.log(this.radioSelectedString)
  }
  ngOnInit(): void {
    this.fetchJobs();
  this.urlQuery=this.activatedRoute.snapshot.params.query;
  this.query=this.urlQuery;
  }
  search(){console.log(this.query)}


 jobPost:any;
  fetchJobs(): void {

      this.job.getJobs().subscribe(response=>{
        this.jobPost=response['data'] as Job;
    console.log(this.jobPost)
      },error=>console.error);
      ///////////
    this.catService .getCategories('categories').subscribe(response=>{
      // this.cat=response ['data'] as Category[];
      // console.log(this.cat)
    }
    )
  }

   /*------------------------------
      add filters to array params
  --------------------------------*/
  params=[
    {
    name:'Entry',
    selected:false
  },
  {
    name:'intermediate',
    selected:false
  },
  {
    name:'expert',
    selected:false
  },
  {
    name:'hourly',
    selected:false
  },
  {
    name:'fixed',
    selected:false
  },
  {
    name:'0',
    selected:false
  },
  {
    name:'5',
    selected:false
  },
  {
    name:'10',
    selected:false
  },
  {
    name:'15',
    selected:false
  },
  {
    name:'20',
    selected:false
  },
  {
    name:'p0',
    selected:false
  },
  {
    name:'p5',
    selected:false
  },
  {
    name:'p10',
    selected:false
  },
  {
    name:'p15',
    selected:false
  },
  {
    name:'p20',
    selected:false
  }
  ]
  selectedArr=[{name:'',selected:false}]
  addParams(e:any){
    for (let i = 0; i < this.params.length; i++)
    {
      if(this.params[i].name == e.target.value &&this.params[i].selected==false)
      {
        this.params[i].selected=true
      }
    }
  this.selectedArr= this.params.filter(item => item.selected);

  console.log(this.selectedArr)

  }
    addCat(e:any){
      for (let i = 0; i < this.selectedArr.length; i++)
      {
        if(this.selectedArr[i].name == e.target.value &&this.selectedArr[i].selected==false)
        {
          this.selectedArr[i].selected=true
        }
      }
    this.selectedArr.push({
      name:e.target.value,
      selected:true
    })
    console.log(this.selectedArr)
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
    this.fetchJobs();
  }

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchJobs();
  }
}
