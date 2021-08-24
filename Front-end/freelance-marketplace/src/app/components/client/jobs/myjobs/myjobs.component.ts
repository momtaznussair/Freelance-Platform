import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {

  constructor() { }

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
