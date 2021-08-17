import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Job } from 'src/app/models/job';
import { ApiService } from 'src/app/services/api.service';
import { ClientService } from 'src/app/services/client.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  id:string;
  isDataGet:any;
  constructor(private jobDetails:JobService,private route:ActivatedRoute,private router:Router,private client:ClientService) {
    this.id = this.route.snapshot.params['id'];

   }

// job_details:Job[]=[];
job_details:any;
clients:any;
job_skills:any;
client_id:any;
  ngOnInit(): void {
    this.jobDetails.getJob(this.id).subscribe(response=>{
      this.job_details=response['data'] as Job;
      console.log(this.job_details);
      this.client_id=this.job_details.client_id;
      console.log(this.client_id);
      this.job_skills=this.job_details.skill;
      // console.log(this.job_skills);
      this.clients=this.job_details.user;
      console.log(this.clients);
      this.isDataGet=true;

      //client====
      // this.client.getClient(this.client_id).subscribe(res=>{
      //   this.clients=res.data;
      //   console.log(this.clients);
      // },error=>console.error);
      //====
    },error=>console.error);

    //getclient
  // this.client.getClient(this.client_id).subscribe(res=>{
  //   this.clients=res.data;
  //   console.log(this.clients);
  // },error=>console.error);
  
  
  }
  submitproposal(){
      let jop:Job=new Job();
      this.jobDetails.addJob(jop).subscribe(response=>{
        console.log(response);
      },erroe=>{console.error()}
      
      );
      this.router.navigate(['/freelancer/work/details',this.id]);
  }

}
