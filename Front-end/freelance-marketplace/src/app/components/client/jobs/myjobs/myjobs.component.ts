import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ClientJobService } from 'src/app/services/client-job.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {
jobs:any;
user_id:any;
  constructor(private api:ApiService,private job:ClientJobService) { }

  ngOnInit(): void {
    this.user_id=localStorage.getItem('user_id');
    console.log(this.user_id);
    this.fetchJobs()
  }
  fetchJobs(){
    this.job.getJob("1").subscribe(res=>{
      this.jobs=res.data;
      console.log(this.jobs);
    })
    
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
