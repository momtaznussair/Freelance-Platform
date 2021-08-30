import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientJobService } from 'src/app/services/client-job.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  id:string;
  isDataGet:any;
  jobb:any;
  skills:any;
  constructor(private route:ActivatedRoute,private job:JobService) { 
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.job.getJob(this.id).subscribe(res=>{
      this.jobb=res.data;
      console.log(this.jobb);
      this.skills=this.jobb.skills;
      console.log(this.skills);

      this.isDataGet=true;

    },error=>console.error);

  }

}
