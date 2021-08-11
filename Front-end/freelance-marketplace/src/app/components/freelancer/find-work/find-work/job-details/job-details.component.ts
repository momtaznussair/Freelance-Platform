import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/job';
import { ApiService } from 'src/app/services/api.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  id:string;
  constructor(private jobDetails:JobService,private route:ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

   }

job_details:Job[]=[];
  ngOnInit(): void {
    this.jobDetails.getJob(this.id).subscribe(response=>{
      this.job_details=response['data'] as Job[];
      console.log(this.job_details);
    },error=>console.error);

  

  
  }
  submitproposal(){
      let jop:Job=new Job();
      // jop.id=id;
      this.jobDetails.addJob(jop).subscribe(response=>{
        // jop.id=response['data']['id'] as number;
        console.log(response);
      },erroe=>{console.error()}
      );

  }

}
