import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {

  constructor(private api:ApiService,private job:JobService) { }

  ngOnInit(): void {
    this.fetchJobs()
  }
  fetchJobs(){

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
