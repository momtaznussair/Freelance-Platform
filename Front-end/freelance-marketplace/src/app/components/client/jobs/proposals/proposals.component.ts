import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {
jobs:any;
id:string;
  constructor(private job:JobService,private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.job.getJob(this.id).subscribe(res=>{
      this.jobs=res.data;
      console.log(this.jobs);
    },error=>console.error)
  }

}
