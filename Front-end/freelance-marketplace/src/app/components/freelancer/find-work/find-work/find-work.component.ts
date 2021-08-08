import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { searchFilter } from 'src/app/pipes/search-filter.pipe';
import {JobPostsService} from '../../../../services/job-posts.service';

@Component({
  selector: 'app-find-work',
  templateUrl: './find-work.component.html',
  styleUrls: ['./find-work.component.css']
})
export class FindWorkComponent implements OnInit {
query:string='';
jobs=[
 
  {
    "id":1,
  "title":"photoshop to html and css ",
  "desc":" i need to nkjf kd;rofkrf tovptvpvmpogvm vmtoivmo",
  "skills":["css","html","js","react"]
  },  {
    "id":2,
  "title":"photoshop to html and css ",
  "desc":" i need to nkjf kd;rofkrf tovptvpvmpogvm vmtoivmo",
  "skills":["css","html","js","react"]
  },  {
    "id":3,
  "title":"photoshop to html and css ",
  "desc":" i need to nkjf kd;rofkrf tovptvpvmpogvm vmtoivmo",
  "skills":["css","html","js","react"]
  },  {
    "id":4,
  "title":"photoshop to html and css ",
  "desc":" i need to nkjf kd;rofkrf tovptvpvmpogvm vmtoivmo",
  "skills":["css","html","js","react"]
  },
];
size:any
POSTS: any;
page = 1;
count = 0;
tableSize = 7;
tableSizes = [3, 6, 9, 12];
responsive:string="true"
currentIndex:number=0;
  constructor(private jobsPosts:JobPostsService ,private searchFilter:searchFilter) { }

  ngOnInit(): void {
    this.fetchPosts();
  }  

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

  search(){
    console.log(this.query)
    // this.POSTS=this.POSTS | searchFilter : this.query;
  }

}
