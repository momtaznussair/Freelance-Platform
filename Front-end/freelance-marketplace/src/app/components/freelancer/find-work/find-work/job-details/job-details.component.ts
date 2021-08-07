import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { ApiService } from 'src/app/services/api.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(private _api:ApiService,private http:HttpClient,private job:JobService) { }
job_details:Job[]=[];
  ngOnInit(): void {
    this.http.get("http://127.0.0.1:8000/api/jobs/1").subscribe(Response=>{
      this.job_details=Response as Job[];
    },error=>{console.error});

  

  
  }
  submitproposal(){
      
  }

}
