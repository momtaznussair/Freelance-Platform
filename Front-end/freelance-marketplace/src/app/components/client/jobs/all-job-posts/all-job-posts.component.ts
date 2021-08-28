import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-all-job-posts',
  templateUrl: './all-job-posts.component.html',
  styleUrls: ['./all-job-posts.component.css']
})
export class AllJobPostsComponent implements OnInit {
jobs:any;
  constructor(private job:JobService) { }

  ngOnInit(): void {
    this.job.getJobs().subscribe(res=>{
      this.jobs=res.data;
      console.log(this.jobs);
    },error=>console.error)
  }

}
