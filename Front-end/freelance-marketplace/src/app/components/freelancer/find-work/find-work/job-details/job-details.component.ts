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

  constructor(private jobDetails:JobService) { }
job_details:Job[]=[];
  ngOnInit(): void {
    this.jobDetails.getJobs("jobs/{id}").subscribe(Response=>{
      this.job_details=Response['data'] as Job[];
    },error=>{console.error()});

  

  
  }
  submitproposal(){
      let jop:Job=new Job();
      // jop.id=id;
      this.jobDetails.addJob("jobs",jop).subscribe(response=>{
        console.log(response);
      },erroe=>{console.error()}
      );

  }

}
