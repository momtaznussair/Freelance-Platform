import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreelancersService } from 'src/app/services/freelancers.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css']
})
export class FreelancersComponent implements OnInit {

  constructor(private freelance:FreelancersService,private activatedRoute:ActivatedRoute) { }
freelancers:any;
freelancer_id:any;
query='';
urlQuery:string=''
  ngOnInit(): void {
    // this.freelance.getFreelancers(`freelancers`).subscribe(res=>{
    //   this.freelancers=res.data;
    //   console.log(this.freelancers);}
    //   this.freelancer_data=this.freelancers.i;
    //   console.log(this.freelancer_data);
    this.fetchPosts();
    this.urlQuery=this.activatedRoute.snapshot.params.query;
  // this.query=this.urlQuery;
  console.log(this.urlQuery)
  }

fetchPosts(){
  this.freelance.getFreelancers(`freelancers`).subscribe(res=>{
    this.freelancers=res.data;
    console.log(this.freelancers);
    // this.freelancer_id=this.freelancers[1].id;
    // console.log(this.freelancer_id);

  },error=>console.error)
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
  shape0='fa-chevron-down';
  shape1='fa-chevron-down';
  shape2='fa-chevron-down';
  shape3='fa-chevron-down';
  shape4='fa-chevron-down';
  params= new Set();
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

  /*-------------------------------
    pagination methods
--------------------------------*/
page = 1;
count = 0;
tableSize = 7;
// tableSizes = [3, 6, 9, 12];
// responsive:string="true"
currentIndex:number=0;
onTableDataChange(event:any){
  this.page = event;
  this.fetchPosts();
}

onTableSizeChange(event:any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.fetchPosts();
}

search(){
  console.log(this.query)
}
}
